import { useState } from 'react';
import './Product.css';

function Product(props) {

    const { item } = props;

    const [isActive, setActive] = useState(false);
    const setActiveProduct = () => {
        if (item.availability === false) {
            return;
        }
        setActive(!isActive);
    }

    const [countOver, setCountOver] = useState(0);
    const setHoverProductClick = () => {
        if (isActive) {
            setCountOver((prevCount) => prevCount + 1);
        } else {
            setCountOver((prevCount) => prevCount = 0);
        }
    }

    const setHoverTextClick = () => {
        if (isActive) {
            setCountOver((prevCount) => prevCount + 1);
        } else {
            setCountOver((prevCount) => prevCount = 1);
        }
    }

    return (
        <div className={`productContainer ${isActive ? "selected" : ''}`}>
            <div
                className={`product ${item.availability ? '' : 'notAvailable'}`}
                onClick={() => setActiveProduct()}
                onMouseEnter={() => setHoverProductClick()}
                onMouseLeave={() => setHoverTextClick()}
            >
                <div 
                className={`product__description 
                    ${(countOver > 1 && countOver % 2 === 0 && isActive) ? 'pinkText' : ''}`
                }>
                    {(countOver > 1 && countOver % 2 === 0 && isActive) ? item.descriptionSelected : item.description}
                </div>
                <div className="product__name">{item.name}</div>
                <div className="product__taste">{item.taste}</div>
                <div className="product__text">
                    <p>
                        <strong> {`${item.count} `}</strong>
                        {item.countText}
                    </p>
                    <p>
                        <strong>{`${item.giftCount} `}</strong>
                        {item.giftText}
                    </p>
                    <p>
                        {item.text}
                    </p>
                </div>
                <div className={`product__weight`}>
                    <div className="weight">{item.weight}</div>
                    <div className="weightText">{item.weightText}</div>
                </div>
                <div className={`product__img ${item.imgName}`}></div>
            </div>
            <div className={`productBorder ${item.availability ? "" : "grey"}`}></div>
            <div className={`textUnderProduct ${item.availability ? "" : "yellowText"}`}>
                {item.availability ? '' : `Печалька, ${item.taste} закончился.`}
                {isActive && item.textUnderProductSelected}
                {(!isActive && item.availability) && item.textUnderProduct}
                {item.availability ? <div className="blueText" onClick={() => setActiveProduct()}> {isActive ? '' : 'Купи'}</div> : ''}
            </div>
        </div>
    );
}

export default Product;