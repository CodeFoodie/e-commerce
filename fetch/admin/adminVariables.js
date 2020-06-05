const showChangeAdminPassword = () => {
    document.getElementById("container").innerHTML =
    `
    <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                    <div class="login_part_text text-center">
                        <div class="login_part_text_iner">
                            <h2>Let's Change Your Password</h2>
                            <p>&nbsp; &nbsp;&nbsp; &nbsp; Toggle the visibility Icon to be sure of your password &nbsp; &nbsp;&nbsp; &nbsp;</p>
                          
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="login_part_form">
                        <div class="login_part_form_iner">
                            <h3>Change the admin password</h3>
                                <div id="errors">
                                </div>
                            <div class="row contact_form" id="form">
                                <div class="col-md-12 form-group p_star">
                                    <input type="password" class="form-control" id="password" name="password" value=""
                                        placeholder="Password">
                                        <a href="#"></a><i class="material-icons" id="visibility" onclick="toggleVisibility();">visibility_off</i></a>
                                </div>
                                <div class="col-md-12 form-group">
                                    <button type="submit" class="btn_3" onclick="changeAdminPassword()">
                                        Create password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
    return false;
}

const showAddProductForm = () => {
    document.getElementById("container").innerHTML =
    `
    <div class="row align-items-center">
    <div class="col-lg-6 col-md-6">
        <div class="login_part_text text-center">
            <div class="login_part_text_iner">
                <h2>Keep the entrepreneurship spirit</h2>
                <p>Success is not final; failure is not fatal: </br>
                    It is the courage to continue that counts...</p>
                <img id="previewImage" width="250" height="250" style="border:none;"/>
            </div>
        </div>
    </div>
    <div class="col-lg-6 col-md-6">
        <div class="login_part_form">
            <div class="login_part_form_iner">
                <h3>Add a new product</h3>
                    <div id="errors">
                    </div>
                <div class="row contact_form" >
                    <div class="col-md-12 form-group p_star">
                        <label for="image_url">Add an image</label>
                        <input type="file" accept="image/*" class="form-control" id="image-file" name="image_url" onchange="readURL(this);"/>
                    </div>
                    <div class="col-md-12 form-group p_star">
                        <input type="text" class="form-control" id="description" name="description" placeholder="description">
                    </div>
                    <div class="col-md-12 form-group p_star">
                        <input type="number" class="form-control" id="price" name="price" placeholder="price">
                    </div>
                    <div class="col-md-12 form-group">
                        <button class="btn_3" onClick="addProduct()">
                            add product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    return false;
}