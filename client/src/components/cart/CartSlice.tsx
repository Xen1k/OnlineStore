import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { ProductData } from '../../commonTypes';

type CartSliceState = { products: Array<ProductData> };

const cartSlice: Slice = createSlice({
    name: 'cartSlice' as string,
    initialState: {
        products: [],
    } as CartSliceState,
    reducers: {
        appendProduct(state: CartSliceState, action: PayloadAction<ProductData>): void {
            state.products.push(action.payload);
        },
        removeProduct(state: CartSliceState, action: PayloadAction<ProductData>): void {
            state.products = state.products.filter((obj) => obj.id !== action.payload.id);
        },
    },
});

export default cartSlice.reducer;
export const { appendProduct, removeProduct } = cartSlice.actions;
