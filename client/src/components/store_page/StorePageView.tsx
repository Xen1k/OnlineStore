import React from 'react';
import { ProductData } from '../../commonTypes';
import ProductCardController from '../product_card/ProductCardController';
import './StorePage.scss';

interface IStorePageViewProps {
    products: Array<ProductData> | undefined;
}

const StorePageView: React.FC<IStorePageViewProps> = ({ products }) => (
    <div className='store-container'>
        {products?.map((product) => (
            <ProductCardController productData={product} key={product.id} />
        ))}
    </div>
);

export default StorePageView;
