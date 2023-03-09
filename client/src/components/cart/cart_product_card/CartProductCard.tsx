import { Form } from 'react-bootstrap';
import { ProductData } from '../../../commonTypes';
import { serverUrl } from '../../../preferences';
import './CartProductCard.scss';

interface ICartProductCardProps {
    removeFromCart: (producData: ProductData) => void;
    product: ProductData;
}

const CartProductCard: React.FC<ICartProductCardProps> = ({ removeFromCart, product }) => (
    <div className='cart-card-container'>
        <div className='center-content'>
            <img className='cart-card-image' src={`${serverUrl}/${product.mainImage}`} />
        </div>
        <div className='center-content'>
            <b> {product.name} </b>
        </div>
        <div className='center-content'>
            <Form.Control style={{ width: 70 }} defaultValue={1} min={1} max={10} type='number' name='price' />
        </div>
        <div className='center-content'>
            <b> {product.price} RUB </b>
        </div>
        <div style={{ flex: 0.5 }} className='center-content'>
            <button onClick={() => removeFromCart(product)} className='cart-card-delete-button'>
                X
            </button>
        </div>
    </div>
);

export default CartProductCard;
