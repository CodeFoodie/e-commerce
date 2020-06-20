const addProduct = async () => {
    document.getElementById("errors").innerHTML = '<img src="assets/img/logo/fetch_loader.gif"/>';
    const userData = JSON.parse(localStorage.getItem('user_data'));
    if(!userData){
      window.location.replace("signin.html");
    }
    const { token } = userData;
    const fd = new FormData();

    const image_file = document.getElementById('image-file').files[0];
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;

    fd.append('image_file', image_file);
    fd.append('price', price);
    fd.append('description', description);
    

    const uri = `${host}/api/v1/product/add`;
    const h = new Headers({ 'Accept': 'application/json', 'authorization': `bearer ${token}` });
  
    const req = new Request(uri, {
      method: 'POST',
      headers: h,
      body: fd
    });
   try {
        const response = await fetch(req);
        const data = await response.json();
        console.log(data);
        if(data.status > 500){
          window.location.replace("signin.html");
        }
        if(data.status === 401){
            document.getElementById("errors").innerHTML=`<p>Your login session has expired, click here to <a href="signin.html">login</a> again...</p>`;
            localStorage.removeItem("user_data");
            return false
        }
        if(data.errors){
            if(data.errors.image_file){
              data.errors.image_file = 'Please upload a valid image file...'
            }
            let errorString = '';
            for (var key in data.errors) {
                errorString = errorString + `<p>${data.errors[key]}</p>`;
            }
            document.getElementById("errors").innerHTML = errorString;
            return false;
        }
        if(data.status === 201){
          document.getElementById("errors").innerHTML=`<span>${data.message}</span>`;
          return false
      }
        return false
   } catch(e){
      // console.log(e);
   }
    return false;
  }
