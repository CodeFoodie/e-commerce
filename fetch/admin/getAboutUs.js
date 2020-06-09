const getAboutUs = async () => {
    document.getElementById("generic-about-us").innerHTML = '<img src="assets/img/logo/fetch_loader.gif"/>';
 
    const uri = `${host}/api/v1/aboutus/get`;
    const h = new Headers({ 'Accept': 'application/json' });
  
    const req = new Request(uri, {
      method: 'GET',
      headers: h,
    });

   try {
    const response = await fetch(req);
    const data = await response.json();
    console.log(data);
    if(data.status === 200){
        document.getElementById("generic-about-us").innerHTML = data.data;
        return false;
    } else {
        document.getElementById("generic-about-us").innerHTML = `
	Transform people into Entrepreneurs and Leaders Leverage our resources to create value Maximize our platform to create sustainable wealth Provide our people with tools to build their business Vision - Raising empowered Entrepreneurs Earning in multiple currencies.`;
        return false;
    }
   } catch(e){
       console.log(e)
   }
}
