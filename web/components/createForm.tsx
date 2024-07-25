import { useState } from 'react';

interface FormProps {
  onSubmit: (form: {
    name: string;
    upc12: string;
    brand: string;
    image: string;
  }) => void;
}

const FormCreate: React.FC<FormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    upc12: '',
    brand: '',
    image: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="upc12"
          className="block text-sm font-medium text-gray-700"
        >
          UPC 12
        </label>
        <input
          type="text"
          name="upc12"
          id="upc12"
          value={form.upc12}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="brand"
          className="block text-sm font-medium text-gray-700"
        >
          Brand
        </label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={form.brand}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
        />
      </div>
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image URL
        </label>
        <input
          type="text"
          name="image"
          id="image"
          value={form.image}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Product
      </button>
    </form>
  );
};

export default FormCreate;
