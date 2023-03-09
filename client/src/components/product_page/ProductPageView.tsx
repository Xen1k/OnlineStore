import React from 'react';
import { ProductData } from '../../commonTypes';
import { serverUrl } from '../../preferences';
import './ProductPage.scss';
import Button from 'react-bootstrap/Button';

interface IProductPageViewProps {
    productData: ProductData;
    addToCartButtonText: string;
    onAddToCardPressed: () => void;
}

const ProductPageView: React.FC<IProductPageViewProps> = ({ productData, onAddToCardPressed, addToCartButtonText }) => (
    <div className='product-page-container'>
        <div className='product-info-container'>
            <p className='product-name'>{productData.name}</p>
            <p className='product-price'>{productData.price}₽</p>
            <p className='product-information-title'>Описание</p>
            <p className='product-description'>{productData.fullDescription}</p>
            <Button onClick={onAddToCardPressed} style={{ width: '60%', marginTop: 20 }} variant='primary'>
                {addToCartButtonText}
            </Button>
        </div>
        <div style={{ flex: 1 }}>
            <img className='product-image' src={`${serverUrl}/${productData.mainImage}`} />
        </div>
    </div>
);

export default ProductPageView;
