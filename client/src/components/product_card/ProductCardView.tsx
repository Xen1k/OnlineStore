import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ProductData } from '../../commonTypes';
import { serverUrl } from '../../preferences';
import './ProductCard.scss';

const ProductCardView: React.FC<ProductData> = ({ name, category, price, shortDescription, fullDescription, mainImage }) => (
    <Card className='card-container'>
        <Card.Img className='card-image' variant='top' src={`${serverUrl}/${mainImage}`} />
        <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
                <Card.Title> {name}</Card.Title>
            </div>
            <div style={{ flex: 2 }}>
                <Card.Text>{shortDescription}</Card.Text>
            </div>
            <div style={{ flex: 1, marginTop: 10 }}>
                <Button variant='primary'>Купить</Button>
            </div>
        </Card.Body>
    </Card>
);

export default ProductCardView;
