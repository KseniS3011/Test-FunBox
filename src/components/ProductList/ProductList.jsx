import './ProductList.css';
import Product from '../Product/Product';
import productInfo from '../../model/products.json'

function Main() {

    return (
        <div className="main">
            {
                productInfo.map((item) => {

                    return (
                        <Product
                            key={item.id}
                            item={item}
                        />
                    )
                })
            }
        </div>
    );
}

export default Main;