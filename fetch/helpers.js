const toggleVisibility = () => {
  if(document.getElementById("visibility").innerHTML === "visibility"){
    document.getElementById("visibility").innerHTML = "visibility_off"
    document.getElementById("password").type = "password"
  }else{
    document.getElementById("visibility").innerHTML = "visibility"
    document.getElementById("password").type = "text"
  }
};

function readURL(input) {
      var reader = new FileReader();
      reader.onload = function (e) {
          $('#previewImage')
              .attr('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
      return false;
}


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

let userHasActiveSession = false;
(() =>{
  if(JSON.parse(localStorage.getItem('user_data')) && document.getElementById("user")){
    const userData = JSON.parse(localStorage.getItem('user_data'));
    const { first_name } = userData;
    userHasActiveSession = true;
    document.querySelector("#user").innerHTML = `hi, ${first_name}`;
    $('#user').attr('href',"#");
    document.querySelector("#user-two").innerHTML = `hi, ${first_name}`;
    $('#user-two').attr('href',"#");
  }
})();

const autoAuth = () => {
  if(userHasActiveSession){
    window.location.replace("index.html");
  }
}

const tokenFromUrl = () => {
  const url = window.location;
  const access_token = new URLSearchParams(url.search).get('token');
  return access_token;
}

const uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));

const countInArray = (array, base) => {
  const newArray = array.filter(function (item){
      return item.id === base
  })
  return newArray.length;
}

const cartTotal = (cart) => {
  let subTotal = 0;
  cart.forEach((item) => {
      subTotal += item.price
  })
  const overAllTotal = subTotal + 1000;
  return {
      subTotal,
      overAllTotal
  };
}

const IS_DEV_MODE = false;
// eslint-disable-next-line no-unused-vars
const host = IS_DEV_MODE
  ? 'http://localhost:5000'
  : 'https://cors-anywhere.herokuapp.com/https://dbullssquad.herokuapp.com/';
