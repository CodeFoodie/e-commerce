/*
const countInArray = (array, value) => {
    return array.reduce((n, x) => n + (x === value), 0);
};
*/
const uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))

const updateCartIcon = () => {
    if(Array.isArray(JSON.parse(localStorage.getItem('cart')))){
        const cartParsedValue = JSON.parse(localStorage.getItem('cart'));
        document.getElementById("count").innerHTML = cartParsedValue.length;
        return cartParsedValue;
    }
    return false;
}
updateCartIcon();

let cart = [];
(() => {
    let initCart = updateCartIcon();
    if(initCart){
        cart = initCart;
    }
})()

const cartTotal = (cart) => {
    let subTotal = 0;
    cart.forEach((item) => {
        subTotal += item.price
    })
    const overAllTotal = subTotal + 1000;
    return {
        subTotal,
        overAllTotal
    };
}

const countInArray = (array, base) => {
    const newArray = array.filter(function (item){
        return item.id === base
    })
    return newArray.length;
}

const modifyCart = (id, image_url, description, price, task) => {
    if(task === 'add'){
        cart.push({id, image_url, description, price});
    }
    if(task === 'remove'){
        if(countInArray(cart, id) < 1){
            return false;
        }
        cart.splice(cart.indexOf({id, image_url, description, price}, 1));
    }
    let cartTotaled = cartTotal(cart);
    if(document.getElementById(`counter${id}`)){
        document.querySelector(`#counter${id}`).value = countInArray(cart, id);
        document.querySelector(`#total${id}`).innerHTML = `₦${(price * countInArray(cart, id)).toLocaleString()}`;

        document.querySelector("#sub-total").innerHTML = `₦${cartTotaled.subTotal.toLocaleString()}`;
        document.querySelector("#overall-total").innerHTML = `₦${cartTotaled.overAllTotal.toLocaleString()}`;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartIcon();
}

const viewCart = () => {
    const cartParsedValue = JSON.parse(localStorage.getItem('cart'));
    if(!Array.isArray(cartParsedValue) || cartParsedValue.length == 0){
        document.getElementById("table").innerHTML = `
        <div id="errors">
            <p>Your cart is empty, back to shopping ...</p>
        </div>
        <p onclick="window.location.replace('index.html')" style="cursor:pointer;">Click to go back to shopping...</p>
        `;
        return false;
    }
    let cartTotaled = cartTotal(cartParsedValue);
    let cartDetail = '';
    uniqueArray(cartParsedValue).reverse().forEach((item) => {
        const count = countInArray(cartParsedValue, item.id);
        const {id, image_url, description, price} = item;
        const total = count * price;
        cartDetail += `
        <tr>
            <td>
            <div class="media">
                <div class="d-flex">
                <div class="product-img">
                    <img src="${image_url}" alt=""/>
                </div>
                </div>
                <div class="media-body">
                <p>${description}</p>
                </div>
            </div>
            </td>
            <td>
            <h5>₦${price.toLocaleString()}</h5>
            </td>
            <td>
            <div class="product_count">
                <span style="cursor:pointer" onClick="modifyCart(${id}, '${image_url}', '${description}', ${price}, 'remove')" class="input-number-decrement"> 
                    &nbsp;</br>&nbsp;</br><i class="ti-minus"></i>
                </span>
                <input id="counter${id}" type="text" value="${count}" min="0" max="10">
                <span style="cursor:pointer" onClick="modifyCart(${id}, '${image_url}', '${description}', ${price}, 'add')" class="input-number-increment"> 
                    <i class="ti-plus"></i>
                </span>
            </div>
            </td>
            <td>
            <h5 id="total${id}">₦${total.toLocaleString()}</h5>
            </td>
        </tr>
        `
    });
    document.querySelector("#show-cart-content").innerHTML = cartDetail;
    document.querySelector("#sub-total").innerHTML = `₦${cartTotaled.subTotal.toLocaleString()}`;
    document.querySelector("#overall-total").innerHTML = `₦${cartTotaled.overAllTotal.toLocaleString()}`;
    const userData = JSON.parse(localStorage.getItem('user_data'));
    if(userData.state){
        document.getElementById('state').value = userData.state;
        document.getElementById('lga').value = userData.local_government_area;
        document.getElementById('address').value = userData.address;
    }
}

const proceedToCheckOut = () => {
    if(userHasActiveSession == false){
        document.getElementById("errors").innerHTML = '<p>*Please <a href="signin.html">sign in/sign up</a> to proceed to checkout</p>';
        return false;
    }
    if(document.getElementById('state').value == false){
        document.getElementById('errors').innerHTML = "<p>*'State' cannot be blank</p>";
        document.getElementById('state').focus();
        return false;
    }
    if(document.getElementById('lga').value == false){
        document.getElementById('errors').innerHTML = "<p>*'Local Government Area' cannot be blank</p>";
        document.getElementById('lga').focus();
        return false;
    }
    if(document.getElementById('address').value == false){
        document.getElementById('errors').innerHTML = "<p>*'Street Address' cannot be blank</p>";
        document.getElementById('address').focus();
        return false;
    }
    const userData = JSON.parse(localStorage.getItem('user_data'));
    userData.state = document.getElementById('state').value;
    userData.local_government_area = document.getElementById('lga').value;
    userData.address = document.getElementById('address').value;
    localStorage.setItem("user_data", JSON.stringify(userData));
    window.location.replace("checkout.html");
}
