const no_cors = 'https://cors-anywhere.herokuapp.com/';
// const uri = 'https://api.cloudinary.com/v1_1/dbullssquad-frontend-herokuapp-com/image/upload';
const uri = no_cors + 'https://api.cloudinary.com/v1_1/torsami77/image/upload';
// const CLOUDINARY_UPLOAD_PRESET = 'mny2qq1o';
const CLOUDINARY_UPLOAD_PRESET = 'ojvw9osg';

const imgPreview = document.getElementById('img-preview');
const fileUpload = document.getElementById('image_url');
    
fileUpload.addEventListener('change', (event) => {
  const file = event.target.files[0]; 
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  formData.append("cloud_name", "torsami77");

  const h = new Headers({ 'content-Type': 'application/x-www-form-urlencoded', 'accept': 'application/json' });
  const req = new Request(uri, {
    mode: 'no-cors',
    method: 'POST',
   // headers: h,
    body: formData
  });

  fetch(req)
  .then((response) => {
    console.log(response);
    response.json()})
  .then((data) => {
    //console.log(data)
  })
   /* 
  try {
    const response = await fetch(req);
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch(err){
      console.error(err);
  };
  */
});
