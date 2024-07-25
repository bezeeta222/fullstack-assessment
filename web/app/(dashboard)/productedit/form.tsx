import React, { useEffect, useState } from 'react';

interface FormProps {
  setForm: (input: any) => void;
  onSubmit: () => void;
  defaultValues: {
    name: string;
    upc12: string;
    brand: string;
    image: string;
  };
}

const Form: React.FC<FormProps> = ({ setForm, onSubmit, defaultValues }) => {
  const [formValues, setFormValues] = useState(defaultValues);

  useEffect(() => {
    setFormValues(defaultValues);
  }, [defaultValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ [name]: value });
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="upc12"
        >
          UPC12
        </label>
        <input
          id="upc12"
          name="upc12"
          type="text"
          value={formValues.upc12}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="brand"
        >
          Brand
        </label>
        <input
          id="brand"
          name="brand"
          type="text"
          value={formValues.brand}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="image"
        >
          Image URL
        </label>
        <input
          id="image"
          name="image"
          type="text"
          value={formValues.image}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-end mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
