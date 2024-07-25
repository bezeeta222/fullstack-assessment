'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import Form from '../form';

interface Product {
  name: string;
  upc12: string;
  brand: string;
  image: string;
}

const EditProduct = () => {
  const router = useRouter();
  const { id } = useParams();
  const [form, setForm] = useState<Product>({
    name: '',
    upc12: '',
    brand: '',
    image: ''
  });
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [product, setProduct] = useState<Product>({
    name: '',
    upc12: '',
    brand: '',
    image: ''
  });

  const API_BASE_URL = process.env.API_BASE_URL;

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/products/${id}`);
      const data: Product = await res.json();
      setProduct(data);
      setForm(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error fetching product:', error.message); // Debugging log
      } else {
        console.log('Unexpected error:', error); // Handle unexpected errors
      }
    }
  };

  const updateProduct = async () => {
    try {
      const res = await axios.put(`${API_BASE_URL}/api/products/${id}`, form, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Update response:', res); // Debugging log
      setSuccess(true);
      setValidationErrors([]);
      // Redirect to product list page after a successful update
      router.push('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(
          'Error updating product:',
          error.response?.data?.errors || error.message
        ); // Debugging log
        setValidationErrors(error.response?.data?.errors || [error.message]);
      } else if (error instanceof Error) {
        console.log('Error updating product:', error.message); // Debugging log
        setValidationErrors([error.message]);
      } else {
        console.log('Unexpected error:', error); // Handle unexpected errors
        setValidationErrors(['An unexpected error occurred']);
      }
    }
  };

  return (
    <div className="min-h-full w-full">
      <main className="m-8">
        {success && (
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
            role="alert"
          >
            <span className="font-medium">Product has been updated</span>
          </div>
        )}
        {validationErrors.length > 0 && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
            role="alert"
          >
            {validationErrors.map((item, index) => (
              <div key={index}>
                <span className="font-medium"></span> {JSON.stringify(item)}
              </div>
            ))}
          </div>
        )}
        <Form
          setForm={(input: Partial<Product>) => setForm({ ...form, ...input })}
          onSubmit={updateProduct}
          defaultValues={product}
        />
      </main>
    </div>
  );
};

export default EditProduct;
