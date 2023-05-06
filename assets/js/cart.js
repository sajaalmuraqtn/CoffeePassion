var carts;
var cartDiv = document.getElementById("cart");
var cartAllDiv = document.getElementById("carts");
var branch = JSON.parse(localStorage.getItem("branch"));
var menuFood = JSON.parse(localStorage.getItem("menuFood"));
var total=0;

if (JSON.parse(localStorage.getItem("carts") === null)) {
    carts = [];
}
else {
    carts = JSON.parse(localStorage.getItem("carts"));
}

// add cart to array of object carts

function addToCartCoffeeAndFood(index) {
    cart = {
       imgSrc: menuFood[index].imgSrc,
       name: menuFood[index].name,
       price: menuFood[index].price,
       ingredients: menuFood[index].ingredients
   }
   if (carts.length == 0) {
       carts.push(cart);
   }
   else {
       for (let index = 0; index < carts.length; index++) {
           if (index == carts.length-1) {
               carts.push(cart);
           }
           else if (carts[index].name == cart.name) {
               carts[index].price += cart.price;
           }
       }
   }
   Swal.fire({
       position: 'center',
       icon: 'success',
       title: `${cart.name}  add successfully`,
       showConfirmButton: false,
       timer: 1500
     });
 localStorage.setItem("carts", JSON.stringify(carts))

}
function addToCartBranch(index) {
    cart = {
        imgSrc: branch[index].imgSrc,
        name: branch[index].name,
        price: branch[index].price,
        ingredients: branch[index].description
    }
    if (carts.length == 0) {
        carts.push(cart);
    }
    else {
        for (let index = 0; index < carts.length; index++) {
            if (index == carts.length-1) {
                carts.push(cart)
            }
            else if (carts[index].name == cart.name) {
                carts[index].price += Math.trunc(cart.price) ;
            }
        }
    }
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `${cart.name} add successfully`,
        showConfirmButton: false,
        timer: 1500
      });
    localStorage.setItem("carts", JSON.stringify(carts))

}

// display cart 

function displayCarts(){
    var result=``;
if (carts.length==0) {
    cartAllDiv.innerHTML = `
    <div class="cartempty text-center d-flex align-items-center flex-column justify-content-between py-5">
    <h2 class=""> Your Cart Is Empty </h2>
    <h3>let fill it <i class="fa-solid fa-arrow-right-long fa-beat mx-5" style="color: #c59764;"></i></span>
    <a href="ourmenu.html" class="btn btn-outline-light">MENU
      <i class="fa-solid fa-utensils fa-spin mx-3" style="color: #340f0f;"></i>        
        </a>
        
        </div>`
} 
else  {

    for (let index = 0; index < carts.length; index++) {
        result+=`
        <div class="cart py-3 d-flex justify-content-evenly text-start b ">
                    <img src="${carts[index].imgSrc}" class="text-start " height="70px"
                        width="80px" alt="${carts[index].name}">
                    <div class="contentTitle text-start mx-3 ">
                        <div class="d-flex align-items-center  text-start">
                            <h6>${carts[index].name}</h6>
                            <span class="line2 mx-2"></span>
                            <span class="price">${carts[index].price} </span>
                        </div>
                        <span class="description ">${carts[index].ingredients}</span>
                    </div>
                    <button class="btn btn-outline-light deletefromcart mt-1 " id="deletecart">DELETE From
                        <i class="fa-solid fa-cart-shopping" onclick="deleteCart(${index})" style="color: #000;"></i></button>
                </div>
        `;
        total+=parseFloat(carts[index].price);
    }
    cartAllDiv.innerHTML=`
    <div class="carts d-flex justify-content-center flex-column p-5" id="cart">
            
            
    </div>

    <button class="btn btn-outline-light deletefromcart mt-5 " id="deleteAll" onclick="deleteAll()">DELETE ALL
        <i class="fa-solid fa-cart-shopping" style="color: #000;"></i></button>
    <h4 class="total mt-3 text-white px-1 fw-bolder" id="total">Total Price : <span
            class="text-large">${total}</span> $</h4>
    `;
    cart.innerHTML= result;
    localStorage.setItem("total", JSON.stringify(total));
}
}

//delete cart

function deleteCart(index) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) { 
            carts.splice(index, 1);    
            localStorage.setItem("carts", JSON.stringify(carts));
            displayCarts();
          Swal.fire(
            'Deleted!',
            'your cart has been deleted.',
            'success'
          )
        }
      });
      console.log("hi");

}

function deleteAll() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) { 
            carts=[];
            localStorage.setItem("carts", JSON.stringify(carts));
            displayCarts();
          Swal.fire(
            'Deleted!',
            'Your Cart has been deleted.',
            'success'
          );
        }
      })

}

