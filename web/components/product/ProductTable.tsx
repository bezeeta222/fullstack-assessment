// components/product/ProductTable.tsx
import Link from 'next/link';
import Barcode from 'react-barcode';

interface Product {
  id: number;
  name: string;
  upc12: number;
  brand: string;
  image: string;
  generatedUPC12?: string;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const handleViewUPC12 = (upc12: string | undefined) => {
    if (upc12) {
      alert(`Generated UPC12 Code: ${upc12}`);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2 px-4 border-b text-center">ID</th>
            <th className="py-2 px-4 border-b text-center">Image</th>
            <th className="py-2 px-4 border-b text-center">Name</th>
            <th className="py-2 px-4 border-b text-center">Brand</th>
            <th className="py-2 px-4 border-b text-center">UPC12</th>
            <th className="py-2 px-4 border-b text-center">Generated UPC12</th>
            <th className="py-2 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item: Product) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b text-center">{item.id}</td>
              <td className="py-2 px-4 border-b text-center">
                <img
                  className="w-16 h-16 object-cover mx-auto"
                  src={item.image}
                  alt={item.name}
                />
              </td>
              <td className="py-2 px-4 border-b text-center">{item.name}</td>
              <td className="py-2 px-4 border-b text-center">{item.brand}</td>
              <td className="py-2 px-4 border-b text-center">{item.upc12}</td>
              <td className="py-2 px-4 border-b text-center">
                {item.generatedUPC12 && (
                  <div className="flex justify-center">
                    <Barcode
                      value={item.generatedUPC12}
                      width={2}
                      height={50}
                      fontSize={14}
                    />
                  </div>
                )}
              </td>
              <td className="py-2 px-4 border-b text-center">
                <Link href={`/productedit/${item.id}`}>
                  <button className="bg-gray-200 text-gray-800 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
