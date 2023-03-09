import { useEffect } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import StorePageController from './components/store_page/StorePageController';
import NavbarController from './components/navbar/NavbarController';
import AddProductController from './components/add_product_page/AddProductController';
import ProductPageController from './components/product_page/ProductPageController';
import CartController from './components/cart/CartController';

const App = (): JSX.Element => {
    useEffect(() => {
        document.body.style.backgroundColor = '#ecf0f1';
    }, []);

    return (
        <div>
            <BrowserRouter>
                <NavbarController />
                <Routes>
                    <Route path='/store' element={<StorePageController />} />
                    <Route path='/add-product' element={<AddProductController />} />
                    <Route path='/cart' element={<CartController />} />
                    <Route path='/product/:id' element={<ProductPageController />} />
                    <Route path='*' element={<Navigate to='/store' replace />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
