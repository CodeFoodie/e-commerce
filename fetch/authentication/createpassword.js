const createPassword = async () => {
    document.getElementById("errors").innerHTML = '<img src="assets/img/logo/fetch_loader.gif"/>';
    const password = document.getElementById('password').value;
    const confirmPassword = password;
    
    const token = tokenFromUrl();
    const uri = `${host}/api/v1/users/updatepassword`;
    const h = new Headers({ 'content-type': 'application/json', 'authorization': `bearer ${token}` });
    const body = {
     password,
     confirmPassword
    };
  
    const req = new Request(uri, {
      method: 'PUT',
      headers: h,
      body: JSON.stringify(body),
    });

   try {
    const response = await fetch(req);
    const data = await response.json();
    if(data.status === 500){
        document.getElementById("errors").innerHTML=`<p>Password link expired, please request again</p>`;
        return false
    }
    if(data.errors){
        let errorString = ''
        for (var key in data.errors) {
            errorString = errorString + `<p>${data.errors[key]}</p>`;
        }
        document.getElementById("errors").innerHTML = errorString;
        return false
    }
    if(data.status === 200){
      document.getElementById("errors").innerHTML='<span>Password updated successfully</span>';
      document.getElementById("form").innerHTML=`<a class="btn_3" href="signin.html">Proceed to Sign in</a>`;
      return false;
    }
   } catch(e){
       console.log(e);
   }
   
    return false;
  }