import { Actions } from "Config/Util/constants";
import { initStore } from "Store/Hooks/store";

export default function configureStore(){
    const products = [
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ];

    const toggleFavHandler = (currState: any, productId: any) => {
        const prodIndex = currState.products.findIndex((p: any) => p.id === productId);
        const newFavStatus = !currState.products[prodIndex].isFavorite;
        const updatedProducts = [...currState.products];
        updatedProducts[prodIndex] = {
            ...currState.products[prodIndex],
            isFavorite: newFavStatus
        };
        return { products: updatedProducts }
    }

    const actions = { TOGGLE_FAV: toggleFavHandler };
    const initialState = { products: products };
 
    initStore(actions, initialState);
}