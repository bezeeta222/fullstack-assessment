// components/product/SortDropdown.tsx
import { useState } from 'react';

interface SortDropdownProps {
  sortField: string;
  sortOrder: string;
  onSortChange: (field: string, order: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({
  sortField,
  sortOrder,
  onSortChange
}) => {
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setShowSortDropdown(!showSortDropdown)}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        aria-haspopup="true"
      >
        Sort
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${showSortDropdown ? 'block' : 'hidden'}`}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="py-1">
          <button
            onClick={() => onSortChange('name', '')}
            className={`text-gray-700 block px-4 py-2 text-sm ${sortField === 'name' && sortOrder === '' ? 'font-bold' : ''}`}
          >
            Product name (Ascending)
          </button>
          <button
            onClick={() => onSortChange('name', '-')}
            className={`text-gray-700 block px-4 py-2 text-sm ${sortField === 'name' && sortOrder === '-' ? 'font-bold' : ''}`}
          >
            Product name (Descending)
          </button>
          <button
            onClick={() => onSortChange('brand', '')}
            className={`text-gray-700 block px-4 py-2 text-sm ${sortField === 'brand' && sortOrder === '' ? 'font-bold' : ''}`}
          >
            Brand (Ascending)
          </button>
          <button
            onClick={() => onSortChange('brand', '-')}
            className={`text-gray-700 block px-4 py-2 text-sm ${sortField === 'brand' && sortOrder === '-' ? 'font-bold' : ''}`}
          >
            Brand (Descending)
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;
