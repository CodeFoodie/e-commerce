let phoneAppCount = 0;
let iti;
const phoneApp = () => {
    if (phoneAppCount < 1) {
      //document.querySelector("#phone").removeAttribute('placeholder');
      const input = document.querySelector("#phone");
      iti = window.intlTelInput(input, {
        utilsScript: "./intl-tel-input-master/build/js/utils.js",
        autoPlaceholder: true,
      });
    }
    phoneAppCount = 1;
    $('#phone').focus(function() {
      //$(this).attr('placeholder', '');
      // console.log(iti);
    }).blur(function() {
      if (iti.isValidNumber()) {
        phoneAppCount = 0;
       document.querySelector("#phoneContainer").innerHTML = `
       <input onclick="phoneApp();" type="tel" placeholder="Mobile Number" id="phone" class="form-text-field" value="${iti.getNumber(intlTelInputUtils.numberFormat.E164)}"/><br/>`
      } else {
       // $(this).attr('placeholder', 'Mobile Number');
      }
    });
  };

const showMemberArea = () => {
    if(document.getElementById("member-area").innerHTML === ''){
        document.getElementById("member-area").innerHTML = signIn;
        document.getElementById('member-area-container').style.display = 'block';
        return false;
    };
    document.getElementById("member-area").innerHTML = '';
    document.getElementById('member-area-container').style.display = 'none';
    phoneAppCount = 0;
    return false;
}

const toggleMemberArea = (value) => {
    switch (value){
        case 'signIn':
            document.getElementById("member-area").innerHTML = signIn;
            return false;
        case 'signUp':
            document.getElementById("member-area").innerHTML = signUp;
            return false;
        case 'forgotPassword':
            document.getElementById("member-area").innerHTML = forgotPassword;
            return false;
        default:
            document.getElementById("member-area").innerHTML = '';
            return false;
    }
};
