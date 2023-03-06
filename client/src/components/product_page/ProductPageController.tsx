import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductData } from '../../commonTypes';
import { serverUrl } from '../../preferences';
import ProductPageView from './ProductPageView';
import { useParams } from 'react-router-dom';

const ProductPageController = (): JSX.Element => {
    const [product, setProduct] = useState<ProductData>();
    const { id } = useParams();

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
        };

        getProductData();
    }, []);
    
    const addToCart = () => {
        console.log("Not implemented");
    }

    return (
        <>
            {product && <ProductPageView productData={product} addToCart = {addToCart} />};
        </>
    );
};

export default ProductPageController;
