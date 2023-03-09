import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { ProductData } from '../../commonTypes';
import { serverUrl } from '../../preferences';
import ProductPageView from './ProductPageView';
import { useParams } from 'react-router-dom';
import useAppDispatch, { AppDispatch } from '../../hooks/useAppDispatch';
import { appendProduct } from '../cart/CartSlice';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const ProductPageController = (): JSX.Element => {
    const [product, setProduct] = useState<ProductData>();
    const [addToCartButtonText, setAddToCartButtonText] = useState<string>('В корзину');
    const [onAddToCartPressed, setOnAddToCartPressed] = useState<() => void>(() => () => {});
    const { id } = useParams();
    const dispatch: AppDispatch = useAppDispatch();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const getProductData = async () => {
            let product: ProductData = (
                await axios({
                    method: 'post',
                    url: `${serverUrl}/get-product-by-id`,
                    data: id,
                })
            ).data;
            setProduct(product);
            setOnAddToCartPressed(() => () => addToCart(product));
        };

        getProductData();
    }, []);

    const navigateToCart = () => navigate('/cart');
    const addToCart = (product: ProductData) => {
        dispatch(appendProduct(product));
        setAddToCartButtonText('Добавлено. Перейти в корзину.');
        setOnAddToCartPressed(() => () => navigateToCart());
    };

    return (
        <>
            {product && (
                <ProductPageView productData={product} onAddToCardPressed={onAddToCartPressed} addToCartButtonText={addToCartButtonText} />
            )}
        </>
    );
};

export default ProductPageController;
