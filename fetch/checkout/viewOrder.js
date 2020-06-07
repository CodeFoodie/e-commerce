const viewOrder = async () => {
    const url = window.location;
    const id = new URLSearchParams(url.search).get('id');

    const uri = `${host}/api/v1/cart/get/${id}`;
    const h = new Headers({ 'content-type': 'application/json' });
    
    const req = new Request(uri, {
      method: 'GET',
      headers: h,
    });

   try {
    const response = await fetch(req);
    const data = await response.json();
  
    const cartParsedValue = JSON.parse(data.data.items);
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

    document.getElementById('first_name').value = data.data.user.first_name;
    document.getElementById('last_name').value = data.data.user.last_name;
    document.getElementById('mobile_number').value = data.data.user.mobile_number;
    document.getElementById('email').value = data.data.user_email;
    document.getElementById('address').value = JSON.parse(data.data.shipping_address);
    document.getElementById('receipt-url').innerHTML = `<img src="${data.data.receipt_url}" />`;
     }catch(e){
       console.log(e);
   }
   return false;
}