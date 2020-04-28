const signIn = `
<div class="member-area" style="background-image: url('assets/img/collection/latest-offer.png'); background-size: cover;>
    <span class="material-icons">
    </span>
    <div class="latest-wrapper lf-padding">
    <div class="latest-area latest-height d-flex align-items-center" data-background="assets/img/collection/latest-offer.png">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                    <div class="latest-caption">
                        <h2>Sign In</h2>
                        <p>
                            Don't have an account? <a href="#" class="colored-link" onClick="toggleMemberArea('signUp');">click here</a></br>
                            Forgot Password? <a href="#" class="colored-link" onClick="toggleMemberArea('forgotPassword');">click here</a>
                        </p>
                    </div>
                </div>
                    <div class="col-xl-5 col-lg-5 col-md-6 ">
                    <div class="latest-subscribe">
                        <form action="#">
                            <p><input type="email" placeholder="Your email here" /></p>
                            <p><input type="password" placeholder="Your password here" /></p>
                            <p><div class="btn">Sign In</div></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- man Shape -->
    </div>
    </div>
</div>
`;

const signUp = `
<div class="member-area" style="background-image: url('assets/img/collection/latest-offer.png'); background-size: cover;>
    <span class="material-icons">
    </span>
    <div class="latest-wrapper lf-padding">
    <div class="latest-area latest-height d-flex align-items-center" data-background="assets/img/collection/latest-offer.png">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                    <div class="latest-caption">
                        <h2>Sign Up</h2>
                        <p>
                            Already have an account? <a href="#" class="colored-link" onClick="toggleMemberArea('signIn');">click here</a></br>
                            Forgot Password? <a href="#" class="colored-link" onClick="toggleMemberArea('forgotPassword');">click here</a>
                        </p>
                    </div>
                </div>
                    <div class="col-xl-5 col-lg-5 col-md-6 ">
                    <div class="latest-subscribe">
                        <form action="#">
                            <p><input type="email" placeholder="Your email here" /></p>
                            <p><input onclick="phoneApp();" type="tel" id="phone" placeholder="Your mobile number here" /></p>
                            <p><input type="text" placeholder="Your first name here" /></p>
                            <p><input type="text" placeholder="Your last name here" /></p>
                            <p><div class="btn">Sign Up</div></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- man Shape -->
    </div>
    </div>
</div>
`;

const forgotPassword = `
<div class="member-area" style="background-image: url('assets/img/collection/latest-offer.png'); background-size: cover;>
    <span class="material-icons">
    </span>
    <div class="latest-wrapper lf-padding">
    <div class="latest-area latest-height d-flex align-items-center" data-background="assets/img/collection/latest-offer.png">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                    <div class="latest-caption">
                        <h2>Password Recovery</h2>
                        <p>
                            Already have an account? <a href="#" class="colored-link" onClick="toggleMemberArea('signIn');">click here</a></br>
                            Dont have an account? <a href="#" class="colored-link" onClick="toggleMemberArea('signUp');">click here</a>
                        </p>
                    </div>
                </div>
                    <div class="col-xl-5 col-lg-5 col-md-6 ">
                    <div class="latest-subscribe">
                        <form action="#">
                            <p><input type="email" placeholder="Your email here" /></p>
                            <p><div class="btn">Email me recovery link</div></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- man Shape -->
    </div>
    </div>
</div>
`;