export type ProductData = {
    name: string;
    category: string;
    price: number;
    shortDescription: string;
    fullDescription: string;
    mainImage: Blob | undefined;
    id: number;
};