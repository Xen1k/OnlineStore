import { ProductData } from '../../commonTypes';
import CartProductCard from './cart_product_card/CartProductCard';
import './Cart.scss';
import { Button, Form } from 'react-bootstrap';

interface ICartViewProps {
    removeFromCart: (producData: ProductData) => void;
    products: Array<ProductData>;
    confirmOrder: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CartView: React.FC<ICartViewProps> = ({ removeFromCart, products, confirmOrder }) => (
    <div className='cart-container'>
        <div className='cart-sub-container'>
            {products.map((product) => (
                <CartProductCard product={product} key={product.id} removeFromCart={removeFromCart} />
            ))}
            {products.length === 0 && <b>Коризна пуста!</b>}
        </div>
        <div className='cart-sub-container'>
            <Form className='cart-form-container' validated={false} onSubmit={(e) => confirmOrder(e)}>
                <Form.Group className='cart-form-field'>
                    <Form.Label>Адрес</Form.Label>
                    <Form.Control required type='text' name='address' />
                </Form.Group>
                <Form.Group className='cart-form-field'>
                    <Form.Label>ФИО</Form.Label>
                    <Form.Control required type='text' name='fio' />
                </Form.Group>
                <Button type='submit'>Оформить заказ</Button>
            </Form>
        </div>
    </div>
);

export default CartView;
