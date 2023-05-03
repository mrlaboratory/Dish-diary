// use local storage to manage cart data
const addChef = id => {
    let shoppingCart = getChefData();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('chefs', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getChefData();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('chefs', JSON.stringify(shoppingCart));
    }
}

const getChefData = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('chefs');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const delateDbData = () => {
    localStorage.removeItem('chefs');
}

export {
    addChef,
    removeFromDb,
    getChefData,
    delateDbData
}
