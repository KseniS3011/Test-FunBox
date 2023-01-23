import './PageProduct.css';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';

function PageProduct() {
  return (
    <div className="pageProductMargin">
      <div className="pageProduct">
        <Header />
        <ProductList />
      </div>
    </div>
  );
}

export default PageProduct;
