// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getDbData();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('recipes', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getDbData();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('recipes', JSON.stringify(shoppingCart));
    }
}

const getDbData = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('recipes');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const delateDbData = () => {
    localStorage.removeItem('recipes');
}

export {
    addToDb,
    removeFromDb,
    getDbData,
    delateDbData
}
