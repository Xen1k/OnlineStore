import { ProductData } from '../../commonTypes';
import ProductCardView from './ProductCardView';

interface IProductCardControllerProps {
    productData: ProductData;
}

const ProductCardController: React.FC<IProductCardControllerProps> = ({ productData }) => <ProductCardView {...productData} />;

export default ProductCardController;
