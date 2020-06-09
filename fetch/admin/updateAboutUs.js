const updateAboutUs = async () => {
    document.getElementById("errors").innerHTML = '<img src="assets/img/logo/fetch_loader.gif"/>';
    const userData = JSON.parse(localStorage.getItem('user_data'));
    if(!userData){
      window.location.replace("signin.html");
      return false;
    }
    const { token } = userData;
    if(document.getElementById("about-us").value == '' || document.getElementById("about-us").value.length < 10){
        document.getElementById("errors").innerHTML = '<p>Please enter some reasonable text...</p>';
        return false;
    }
    let txt = document.getElementById("about-us").value;
    const txttostore = '<p>' + txt.replace(/\n/g, "</p>\n<p>") + '</p>';
 
    const uri = `${host}/api/v1/aboutus/add`;
    const h = new Headers({ 'Accept': 'application/json', 'authorization': `bearer ${token}` });
    const body = {
      text: txttostore
    };
  
    const req = new Request(uri, {
      method: 'POST',
      headers: h,
      body: JSON.stringify(body),
    });

   try {
    const response = await fetch(req);
    const data = await response.json();
    if(data.status === 500){
      window.location.replace("signin.html");
      return false;
    }
    if(data.status === 201){
        document.getElementById("generic-about-us").innerHTML = txttostore
        document.getElementById("errors").innerHTML = '<span>Content Updated successfully...</span>';
        return false;
    } else {
        document.getElementById("errors").innerHTML = '<p>There seem to be an error, please try again...</p>';
        return false;
    }
   } catch(e){
       console.log(e)
   }
}