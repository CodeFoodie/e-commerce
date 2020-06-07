let total;
const viewCheckOut = () => {
    /*
    if(!userHasActiveSession){
        window.location.replace("cart.html");
        return false;
    };
    */
    const cartParsedValue = JSON.parse(localStorage.getItem('cart'));
    let cartReview = '';
    uniqueArray(cartParsedValue).reverse().forEach((item) => {
        const count = countInArray(cartParsedValue, item.id);
        const {id, image_url, description, price} = item;
        const total = count * price;
        cartReview += `
        <li>
            <a href="#">${description}
                <span class="middle">x ${count}</span>
                <span class="last">₦${(price * count).toLocaleString()}</span>
            </a>
        </li>
        `; 
    });

    let cartTotaled = cartTotal(cartParsedValue);
    total = cartTotaled;
    document.querySelector("#sub-total").innerHTML = `₦${cartTotaled.subTotal.toLocaleString()}`;
    document.querySelector("#overall-total").innerHTML = `₦${cartTotaled.overAllTotal.toLocaleString()}`;
    document.querySelector("#cart-review").innerHTML = cartReview;

    const userData = JSON.parse(localStorage.getItem('user_data'));
    document.getElementById('first_name').value = userData.first_name;
    document.getElementById('last_name').value = userData.last_name;
    document.getElementById('mobile_number').value = userData.mobile_number;
    document.getElementById('email').value = userData.email;
    document.getElementById('state').value = userData.state;
    document.getElementById('lga').value = userData.local_government_area;
    document.getElementById('address').value = userData.address;
}
