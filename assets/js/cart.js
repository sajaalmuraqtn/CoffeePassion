var carts = [];
var cart = { imgsrc: "", name: " ", price: 0, ingredients: `` }
var cartDiv = document.getElementById("cart");
var branch = JSON.parse(localStorage.getItem("brunsh"));
var count = 0;
console.log(branch);

function getCarts() {
    carts=JSON.parse(localStorage.getItem("carts"));
    if (carts==[]) {
        cartDiv.innerHTML = `
      <div class="cartempty text-center d-flex align-items-center flex-column justify-content-between py-5">
      <h2 class=""> Your Cart Is Empty </h2>
      <h3>let fill it<i class="fa-solid fa-arrow-right-long fa-beat mx-5" style="color: #c59764;"></i></span>
      <a href="ourmenu.html" class="btn btn-outline-light">MENU
          <i class="fa-solid fa-utensils fa-spin mx-3" style="color: #340f0f;"></i>        
            </a>
       
    </div>
      `
    }
 else {
        
        for (let index = 0; index < carts.length; index++) {
            cartDiv.innerHTML +=
                `
            <div class="cart py-3 d-flex justify-content-evenly text-start b ">
                        <img src="${carts[index].imgsrc}" class="text-start " height="70px"
                            width="80px" alt="${carts[index].name}">
                        <div class="contentTitle text-start mx-3 ">
                            <div class="d-flex align-items-center  text-start">
                                <h6>${carts[index].name}</h6>
                                <span class="line2 mx-2"></span>
                                <span class="price">${carts[index].price} </span>
                            </div>
                            <span>${carts[index].price}</span>
                        </div>
                        <button class="btn btn-outline-light deletefromcart mt-1 " id="deletecart">DELETE From
                            <i class="fa-solid fa-cart-shopping" style="color: #000;"></i></button>
                    </div>
            `
        }
    }
}

function addToCartBranch(index) {

    cart.imgsrc = branch[index].imgsrc;
    cart.name = branch[index].name;
    cart.price = branch[index].price;
    cart.ingredients = branch[index].description;
    if (carts==[]) {
        carts.push(cart);
    }
    else{
        for (let i = 0; i< carts.length ; i++) {
            if (carts[i].name == cart.name) {
                carts[i].price=carts[i].price+cart.price;
            }    
            else if(i==carts.length) {
                carts.push(cart);
            }
        }    
    }        
    localStorage.setItem("carts", JSON.stringify(carts))
    console.log(carts);
    console.log(cart);
}
function addToCartCoffeeAndFood(index) {
    cart.imgsrc = branch[index].imgsrc;
    cart.name = branch[index].name;
    cart.price = branch[index].price;
    cart.ingredients = branch[index].ingredients;

}


function deleteAll() {
    cartDiv.innerHTML = `
      <div class="cartempty text-center d-flex align-items-center flex-column justify-content-between py-5">
      <h2 class=""> Your Cart Is Empty </h2>
      <h3>let fill it<i class="fa-solid fa-arrow-right-long fa-beat mx-5" style="color: #c59764;"></i></span>
      <a href="ourmenu.html" class="btn btn-outline-light">MENU
          <i class="fa-solid fa-utensils fa-spin mx-3" style="color: #340f0f;"></i>        
            </a>
       
    </div>`
    localStorage.removeItem("carts");

}
