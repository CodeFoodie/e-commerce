const joinDbsa = async () => {
    document.getElementById("errors").innerHTML = '<img src="assets/img/logo/fetch_loader.gif"/>';
    const reference_number = document.getElementById('reference_number').value;
    const package = document.getElementById('package').value;
    const email = document.getElementById('email').value;
    const mobile_number = document.getElementById('mobile_number').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
  
    let errors = [];
    const user_data = {
      reference_number,
      package,
      email,
      mobile_number,
      first_name,
      last_name,
    };

    for (var key of Object.keys(user_data)) {
      if(user_data[key].trim() == ''){
        errors.push(key)
      }
    }

    if(errors[0]){
      let errorString = '';
      errors.forEach((err) => {
        errorString += `<p>Enter a valid value for ${titleCase(err.replace('_', ' '))}</p>`
      });
      document.getElementById("errors").innerHTML = errorString;
      return false;
    }

    localStorage.setItem("user_data", JSON.stringify(user_data));

    if(package != 'starter'){
      document.getElementById("errors").innerHTML='<span><a href="shop.html">Proceed to shop</a></span>';
      document.getElementById("form").innerHTML='';
      return false;
    }else{
      document.getElementById("errors").innerHTML='<span><a href="shop.html">Proceed to checkout</a></span>';
      document.getElementById("form").innerHTML='';
      return false;
    }
   
    return false;
  }