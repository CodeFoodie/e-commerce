const makeOrder = () => {
    document.getElementById("errors").innerHTML = '<img src="assets/img/logo/fetch_loader.gif"/>';
    const image_file = document.getElementById('image-file').files[0];
    if(!image_file){
        document.getElementById("errors").innerHTML=`<p>Payment document should be a valid image file</p>`;
        return false;
    }

    const cart = JSON.parse(localStorage.getItem('cart'));
    const userData = JSON.parse(localStorage.getItem('user_data'));
    delete userData.token;

    fd.append('image_file', image_file);
    fd.append('userData', userData);
    fd.append('cart', cart);

    const uri = `${host}/api/v1/cart/order`;
    const h = new Headers({ 'Accept': 'application/json', });
  
    const req = new Request(uri, {
      method: 'POST',
      headers: h,
      body: fd
    });
   try {
    const response = await fetch(req);
    const data = await response.json();
    console.log(data);

   } catch(e){
      // console.log(e);
   }
   return false;
};
