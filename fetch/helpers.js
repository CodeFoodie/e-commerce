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
  
const token = getCookie('token');
const first_name = getCookie('first_name');

const IS_DEV_MODE = false;
// eslint-disable-next-line no-unused-vars
const host = IS_DEV_MODE
  ? 'http://localhost:5000'
  : 'https://cors-anywhere.herokuapp.com/https://dbullssquad.herokuapp.com/';