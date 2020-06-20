const indexShowAllProducts = async () => {
  const uri = `${host}/api/v1/product/getAll`;
  const h = new Headers({ 'Content-Type': 'application/json' });

  const req = new Request(uri, {
    method: 'GET',
    headers: h,
  });

  try {
    const response = await fetch(req);
    const data = await response.json();
    if(data.data){
      const result = data.data;
      let productString = '';
      result.forEach((item) => {
        if(item.is_available){
          const {id, image_url, description, price} = item;
          productString += `
          <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="single-product mb-60 single-product-background">
                  <div class="product-img">
                      <img src="${image_url}" width="200px" height="250px" alt="">
                      <div class="new-product">
                          <span>New</span>
                      </div>
                  </div>
                  <div class="product-caption">
                      <h4>${description}</h4>
                      <div class="price">
                          <ul>
                              <li>₦${price.toLocaleString()}</li></br>
                              
                              <li><a class="btn" onclick="modifyCart(${id}, '${image_url}', '${description}', ${price}, 'add')">Add to Cart</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          `
        }
      });
       document.getElementById("shopping-table").innerHTML = productString;
       return false;
    }else{
      document.getElementById("shopping-table").innerHTML = `
      <div id="errors">
        <p>No available product in store</p>
      </div>
      `;
      return false;
    }
  } catch(error){
    document.getElementById("shopping-table").innerHTML = `
    <div id="errors">
      <p>Store under update, please check later</p>
    </div>
    `;
  }
};
