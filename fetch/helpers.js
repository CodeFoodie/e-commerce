function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
/*
const getCookie = (cname) => {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
};
*/
const userData = getCookie('userData');

(() =>{
  console.log(userData);
  if(userData != '' && document.getElementById("user")){
    document.querySelector("#user").innerHTML = userData.first_name;
  }
})();

const toggleVisibility = () => {
  if(document.getElementById("visibility").innerHTML === "visibility"){
    document.getElementById("visibility").innerHTML = "visibility_off"
    document.getElementById("password").type = "password"
  }else{
    document.getElementById("visibility").innerHTML = "visibility"
    document.getElementById("password").type = "text"
  }
};

const tokenFromUrl = () => {
  const url = window.location;
  const access_token = new URLSearchParams(url.search).get('token');
  return access_token;
}

  
const token = getCookie('token');
const first_name = getCookie('first_name');

const IS_DEV_MODE = false;
// eslint-disable-next-line no-unused-vars
const host = IS_DEV_MODE
  ? 'http://localhost:5000'
  : 'https://cors-anywhere.herokuapp.com/https://dbullssquad.herokuapp.com/';