import { useEffect, useState } from 'react';
import StorePageView from './StorePageView';
import axios from 'axios';
import { serverUrl } from '../../preferences';
import { ProductData } from '../../commonTypes';

const StorePageController = (): JSX.Element => {
    const [products, setProducts] = useState<Array<ProductData>>();

    useEffect(() => {
        const getProducts = async () => {
            let products: Array<ProductData> = (
                await axios({
                    method: 'get',
                    url: `${serverUrl}/get-all-products`,
                })
            ).data;
            setProducts(products);
        };

        getProducts();
    }, []);

    return <StorePageView products={products} />;
};

export default StorePageController;
