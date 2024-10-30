export const loadCartState = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : []; 
    } catch (err) {
        console.error('Could not load cart state');
        return []; 
    }
}

export const saveToLocalStorage = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState)
    } catch (err) {
        console.error("Could not save cart state", err);
    }
}