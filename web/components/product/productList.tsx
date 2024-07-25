// components/product/ProductList.tsx
'use client';
import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import ProductTable from './ProductTable';
import SortDropdown from './SortDropdown';
import SearchForm from './SearchForm';

interface Product {
  id: number;
  name: string;
  upc12: number;
  brand: string;
  image: string;
  generatedUPC12?: string;
}

const generateUPC12 = (): string => {
  let upc = '';
  for (let i = 0; i < 12; i++) {
    upc += Math.floor(Math.random() * 10).toString();
  }
  return upc;
};

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState({
    name: '',
    brand: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [sortOrder, sortField]);

  const fetchProducts = async () => {
    setLoading(true);
    setError('');
    const filterString = Object.entries(filters)
      .map(([key, value]) => `filter[${key}]=${value}`)
      .join('&');

    try {
      const res = await fetch(
        `http://localhost:8000/api/products?sort=${sortOrder + sortField}&${filterString}`
      );
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      const productsWithGeneratedUPC = data.map((product: Product) => ({
        ...product,
        generatedUPC12: generateUPC12()
      }));
      setProducts(productsWithGeneratedUPC);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.error('Error fetching products:', err.message);
      } else {
        setError('An unexpected error occurred');
        console.error('An unexpected error occurred:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchProducts = useCallback(debounce(fetchProducts, 300), [
    filters,
    sortOrder,
    sortField
  ]);

  const handleSearchChange = (key: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value
    }));
  };

  const handleSortChange = (field: string, order: string) => {
    setSortField(field);
    setSortOrder(order);
  };

  return (
    <div className="min-h-full w-full">
      <main className="m-8">
        <SearchForm
          onSearchChange={handleSearchChange}
          onFetchProducts={fetchProducts}
        />

        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="flex flex-row justify-end gap-3 mb-4">
            <a
              href="/create"
              className="px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Create
            </a>
            <SortDropdown
              sortField={sortField}
              sortOrder={sortOrder}
              onSortChange={handleSortChange}
            />
          </div>

          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <ProductTable products={products} />
        </div>
      </main>
    </div>
  );
}

export default ProductList;
