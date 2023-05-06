var carts;
var cartDiv = document.getElementById("cart");
var cartAllDiv = document.getElementById("carts");
var branch = JSON.parse(localStorage.getItem("brunsh"));
var menuFood = JSON.parse(localStorage.getItem("menuFood"));
var count = 0;
if (JSON.parse(localStorage.getItem("carts")===null)) {
    carts=[];
  }
  else{
    carts=JSON.parse(localStorage.getItem("carts"));
  }
function getCarts() {

    if (carts.length == 0) {
        cartAllDiv.innerHTML = `
        <div class="cartempty text-center d-flex align-items-center flex-column justify-content-between py-5">
        <h2 class=""> Your Cart Is Empty </h2>
        <h3>let fill it <i class="fa-solid fa-arrow-right-long fa-beat mx-5" style="color: #c59764;"></i></span>
        <a href="ourmenu.html" class="btn btn-outline-light">MENU
          <i class="fa-solid fa-utensils fa-spin mx-3" style="color: #340f0f;"></i>        
            </a>
            
            </div>`

    }
    else {
        for (let index = 0; index < carts.length; index++) {

            cartAllDiv.innerHTML +=
            `
            <div class="carts d-flex justify-content-center flex-column p-5" id="cart">
            
            
            </div>

            <button class="btn btn-outline-light deletefromcart mt-5 " id="deleteAll" onclick="deleteAll()">DELETE ALL
                <i class="fa-solid fa-cart-shopping" style="color: #000;"></i></button>
            <h4 class="total mt-3 text-white px-1 fw-bolder" id="total">Total Price : <span
                    class="text-large">20</span> $</h4>
       
         `;

            cartDiv.innerHTML +=
                `
            <div class="cart py-3 d-flex justify-content-evenly text-start b ">
                        <img src="${carts[index].imgSrc}" class="text-start " height="70px"
                            width="80px" alt="${carts[index].name}">
                        <div class="contentTitle text-start mx-3 ">
                            <div class="d-flex align-items-center  text-start">
                                <h6>${carts[index].name}</h6>
                                <span class="line2 mx-2"></span>
                                <span class="price">${carts[index].price} </span>
                            </div>
                            <span>${carts[index].ingredients}</span>
                        </div>
                        <button class="btn btn-outline-light deletefromcart mt-1 " id="deletecart">DELETE From
                            <i class="fa-solid fa-cart-shopping" onclick="deleteCart(${index})" style="color: #000;"></i></button>
                    </div>
            `;
        

        }
    }
}
getCarts();


function addToCartBranch(index) {
    cart = { imgSrc: branch[index].imgSrc,
     name: branch[index].name,
     price:branch[index].price,
     ingredients: branch[index].description }

    if (carts.length == 0) {
        carts.push(cart);
    }
    else {
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].name == cart.name) {
                carts[i].price = carts[i].price + cart.price;
            }
            else if (i == carts.length) {
                carts.push(cart);
            }
        }
    }
    localStorage.setItem("carts", JSON.stringify(carts))

}
function addToCartCoffeeAndFood(index) {
    cart = { imgSrc: menuFood[index].imgSrc,
        name: menuFood[index].name,
        price:menuFood[index].price,
        ingredients: menuFood[index].ingredients }


    if (carts.length == 0) {
        carts.push(cart);
        localStorage.setItem("carts", JSON.stringify(carts))
    }
    else {
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].name == cart.name) {
                carts[i].price = carts[i].price + cart.price;
                localStorage.setItem("carts", JSON.stringify(carts))
            }
            else if (i == carts.length) {
                carts.push(cart);
                localStorage.setItem("carts", JSON.stringify(carts))
            }

        }
    }
    console.log(carts);
    console.log(cart);

}

function deleteCart(index) {
    carts.splice(index, 1);
    displayData();
    localStorage.setItem("carts", JSON.stringify(carts))

}

function deleteAll() {

    cartAllDiv.innerHTML = `
        <div class="cartempty text-center d-flex align-items-center flex-column justify-content-between py-5">
        <h2 class=""> Your Cart Is Empty </h2>
        <h3>let fill it <i class="fa-solid fa-arrow-right-long fa-beat mx-5" style="color: #c59764;"></i></span>
        <a href="ourmenu.html" class="btn btn-outline-light">MENU
          <i class="fa-solid fa-utensils fa-spin mx-3" style="color: #340f0f;"></i>        
            </a>
            
            </div>`
            carts=[];
            localStorage.setItem("carts", JSON.stringify(carts))

}
