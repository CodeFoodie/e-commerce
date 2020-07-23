const makeOrder = async () => {
    document.getElementById("errors").innerHTML = '<img src="assets/img/logo/fetch_loader.gif"/>';
    const image_file = document.getElementById('image-file').files[0];
    if(!image_file){
        document.getElementById("errors").innerHTML=`<p>Payment document should be a valid image file</p>`;
        return false;
    }

    const userData = JSON.parse(localStorage.getItem('user_data'));
    delete userData.token;

    const shipping_address = `${userData.state}, ${userData.local_government_area}, ${userData.address}`
    
    let fd = new FormData();

    fd.append('image_file', image_file);
    fd.append('items', localStorage.getItem('cart'));
    fd.append('subtotal', total.subTotal);
    fd.append('total', total.overAllTotal);
    fd.append('user_data', localStorage.getItem('user_data'));
    fd.append('shipping_address', JSON.stringify(shipping_address));

    const uri = `${host}/api/v1/cart/add`;
    const h = new Headers({ 'Accept': 'application/json' });
  
    const req = new Request(uri, {
      method: 'POST',
      headers: h,
      body: fd
    });
   try {
    const response = await fetch(req);
    const data = await response.json();
console.log(data);
    if(data.status === 201){
        localStorage.removeItem('cart');
	    document.getElementById("errors").innerHTML = '<span>Your order has been placed successfully, you will be contacted by our delivery team shortly</span>';
	    return false;
    } else {
        document.getElementById("errors").innerHTML = '<p>There was a problem placing your order, please try again</p>';
        return false;
    };

   } catch(e){
       console.log(e);
   }
   return false;
};
