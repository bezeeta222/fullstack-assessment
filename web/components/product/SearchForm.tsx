// components/product/SearchForm.tsx
import { useState } from 'react';

interface SearchFormProps {
  onSearchChange: (key: string, value: string) => void;
  onFetchProducts: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  onSearchChange,
  onFetchProducts
}) => {
  const [searchType, setSearchType] = useState('name');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(searchType, event.target.value);
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchType(event.target.value);
  };

  return (
    <form className="flex items-center gap-4 mb-4">
      <div className="w-1/4">
        <select
          value={searchType}
          onChange={handleDropdownChange}
          className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="name">Product name</option>
          <option value="brand">Brand</option>
        </select>
      </div>
      <div className="flex-1">
        <input
          type="search"
          className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder={`Search by ${searchType}`}
          onChange={handleInputChange}
          aria-label={`Search by ${searchType}`}
        />
      </div>
      <div className="w-auto">
        <button
          type="button"
          onClick={onFetchProducts}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;