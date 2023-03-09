import { AppState } from '../../app/store';
import { ProductData } from '../../commonTypes';
import useAppDispatch, { AppDispatch } from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { removeProduct } from './CartSlice';
import CartView from './CartView';

const CartController = (): JSX.Element => {
    const products: Array<ProductData> = useAppSelector((state: AppState) => state.cartReducer.products);
    const dispatch: AppDispatch = useAppDispatch();

    const removeFromCart = (product: ProductData) => dispatch(removeProduct(product));
    const confirmOrder = (e: React.FormEvent<HTMLFormElement>): void => alert('Заказ сделан успешно');

    return <CartView products={products} removeFromCart={removeFromCart} confirmOrder={confirmOrder} />;
};

export default CartController;
