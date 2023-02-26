import { ProductData } from '../../commonTypes';
import ProductCardView from './ProductCardView';

interface IProductCardControllerProps {
    productData: ProductData;
}

const ProductCardController: React.FC<IProductCardControllerProps> = ({ productData }) => {
    return (
        <ProductCardView
            name={productData.name}
            category={productData.category}
            price={productData.price}
            shortDescription={productData.shortDescription}
            fullDescription={productData.fullDescription}
            mainImage={productData.mainImage}
            id={productData.id}
        />
    );
};

export default ProductCardController;
