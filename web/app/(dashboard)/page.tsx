import ProductList from '@/components/product/productList';
import { getProducts } from '@/lib/db';

export default async function ProductsPage() {
  return (
    <div>
      <ProductList />
    </div>
  );
}
