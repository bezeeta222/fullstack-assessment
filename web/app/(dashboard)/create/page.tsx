'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FormCreate from '@/components/createForm';
import { useRouter, useParams } from 'next/navigation';

function CreateProduct() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log('Component has been mounted');
  }, []);

  const API_BASE_URL = process.env.API_BASE_URL;

  const createProduct = async (form: any) => {
    try {
      console.log('Attempting to create product with data:', form);
      axios.defaults.headers.post['Content-Type'] =
        'application/x-www-form-urlencoded';
      const { data } = await axios.post(`${API_BASE_URL}/api/products`, form);

      console.log('Product creation successful:', data);
      setSuccess(true);
      setValidationErrors([]);

      router.push('/');
    } catch (err) {
      if (
        axios.isAxiosError(err) &&
        err.response &&
        err.response.data &&
        err.response.data.errors
      ) {
        console.log('Validation errors:', err.response.data.errors);
        setValidationErrors(err.response.data.errors);
      } else {
        console.log('Unexpected error:', err);
        setValidationErrors(['An unexpected error occurred.']);
      }
    }
  };

  return (
    <div className="min-h-full w-full bg-gray-100">
      <main className="m-8">
        {success && (
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
            role="alert"
          >
            <span className="font-medium">Product has been created</span>
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
                <br />
              </div>
            ))}
          </div>
        )}
        <FormCreate onSubmit={createProduct} />
      </main>
    </div>
  );
}

export default CreateProduct;
