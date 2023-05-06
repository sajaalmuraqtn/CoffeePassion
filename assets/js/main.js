var carts = [];


var branch = [
    {
        imgSrc: `../assets/images/home/branch/img-1.jpg`,
        name: "Spaghetti alla Puttanesca"
        , price: 29.99,
        description: `Extra virgin olive oil, touch of garlic, prawns, green peas,
         sun dried tomato, white wine and Italian herbs.`
    },
    {
        imgSrc: `../assets/images/home/branch/img-2.jpg`,
        name: "Spaghetti Napoletana "
        , price: 24.99,
        description: `Spaghetti with olive oil, touch of garlic, olives, capers, anchovies, Italian Herbs and Napolitanan sauce with fresh basil.

        `
    },
    {
        imgSrc: `../assets/images/home/branch/img-3.jpg`,
        name: "Penne Alla Arrabbiata"
        , price: 24.99,
        description: `Tubes of al dente pasta with olive oil, garlic, bacon, onion, basil and a touch of red sauce.

        `
    },
    {
        imgSrc: `../assets/images/home/branch/img-4.jpg`,
        name: "Pappardelle Gamberi"
        , price: 35.99,
        description: `Extra virgin olive oil, touch of garlic, prawns, green peas, sun dried tomato, white wine and Italian herbs.

        `
    },
    {
        imgSrc: `../assets/images/ourmenu/img5.jpg`,
        name: "Seafood Capellini Pasta"
        , price: 24.99,
        description: `Al dente spaghetti in the regional tomato sauce with a hint of herbs.`
    },
    {
        imgSrc: `../assets/images/ourmenu/img6.jpg`,
        name: "Mushroom Bolognese Pasta"
        , price: 24.99,
        description: `Al dente spaghetti in the regional tomato sauce with a hint of herbs.`
    }
]

var menuFood = [
    {
        imgSrc: `../assets/images/ourmenu/coffee/coffee-1.jpg`,
        name: "Marbled Iced Latte"
        , price: 3.65,
        ingredients: `Condensed Milk, Ice cubs, Espresso. `
    },
    {
        imgSrc: `../assets/images/ourmenu/coffee/coffee-2.jpg`,
        name: "Hot Vanilla Latte "
        , price: 3.25,
        ingredients: `Espresso, Vanilla Syrup, Milk. `
    },
    {
        imgSrc: `../assets/images/ourmenu/coffee/coffee-3.jpg`,
        name: "Almondmilk Latte"
        , price: 4.25,
        ingredients: `Espresso, Almondmilk, Vegan.`
    },
    {
        imgSrc: `../assets/images/ourmenu/coffee/coffee-4.jpg`,
        name: "Cappuccino	"
        , price: 3.65,
        ingredients: `Espresso, Extra Froth, Chocolate Powder`
    },
    {
        imgSrc: `../assets/images/ourmenu/coffee/coffee-5-2.jpg`,
        name: "Double Shot Espresso	"
        , price: 2.25,
        ingredients: `Espresso, Double Shorts.`

    },
    {
        imgSrc: `../assets/images/ourmenu/coffee/coffee-6.jpg`,
        name: "Black Tea with Milk"
        , price: 2.55,
        ingredients: `Royal English Breakfast Tea Latte.`
    },
    {
        imgSrc: `../assets/images/ourmenu/food/food1.jpg`,
        name: "Breakfast Sandwich	"
        , price: 4.25,
        ingredients: `Bacon, Gouda, Toasts.

        `
    },
    {
        imgSrc: `../assets/images/ourmenu/food/food2.jpg`,
        name: "	Croissant Bun "
        , price: 3.75,
        ingredients: `Slow Roasted Ham, Croissant Bun.
        `
    },
    {
        imgSrc: `../assets/images/ourmenu/food/food3.jpg`,
        name: "Sausage Sandwich	"
        , price: 4.25,
        ingredients: `Cheddar, Salad, Sausage .


        `
    },
    {
        imgSrc: `../assets/images/ourmenu/food/food4.jpg`,
        name: "Iced Lemon Pound Cake"
        , price: 2.45,
        ingredients: `Iced Lemon Pound Cake.


        `
    },
    {
        imgSrc: `../assets/images/ourmenu/food/food-5.jpg`,
        name: "Chilli Turkey Sandwich"
        , price: 4.75,
        ingredients: `Bread, Sweet Chilli Turkey, Salad.

        `
    },
    {
        imgSrc: `../assets/images/ourmenu/food/food-6.jpg`,
        name: "Blueberry Waffles"
        , price: 4.95,
        ingredients: `Blue Berries, Waffles, Honey.

        `
    }
];


localStorage.setItem("branch",JSON.stringify(branch));
localStorage.setItem("menuFood",JSON.stringify(menuFood));



function getFoodAndCoffee() {

    for (let index = 0; index < menuFood.length - 6; index++) {
        document.getElementById("coffeList").innerHTML += `
        <div class="cart py-3 d-flex justify-content-center text-start ">
        <img src=${menuFood[index].imgSrc} " class="text-start " height="70px" width="80px"  alt="${menuFood[index].name}">
        <div class="contentTitle text-start mx-3 ">
         <div class="d-flex align-items-center  text-start">
             <h6>${menuFood[index].name}</h6> 
             <span class="line2 mx-2"></span>
             <span class="price">$${menuFood[index].price} </span>
         </div>
          <span>${menuFood[index].ingredients}</span>
          <button class="btn btn-outline-light addtocart" onclick="addToCartCoffeeAndFood(${index})">ADD TO
          <i class="fa-solid fa-cart-shopping" style="color: #000;"></i></button>
        </div>
     </div>
        
        `;
    }

    for (let index = 6;index< menuFood.length; index++) {
        document.getElementById("foodList").innerHTML += `
        <div class="cart py-3 d-flex justify-content-center text-start">
        <img src="${menuFood[index].imgSrc}" class="text-center" height="70px" width="80px" alt="${menuFood[index].name}">
        <div class="contentTitle text-start mx-3">
         <div class="d-flex align-items-center text-start">
             <h6>${menuFood[index].name}</h6> 
             <span class="line2 mx-2"></span>
             <span class="price">$${menuFood[index].price} </span>
         </div>
          <span>${menuFood[index].ingredients}</span>
          <button class="btn btn-outline-light addtocart" onclick="addToCartCoffeeAndFood(${index})">ADD TO
          <i class="fa-solid fa-cart-shopping" style="color: #000;"></i></button>
          
        </div>
     </div>
        
        `;
    }

}

function getBranch() {

    for (let index = 0; index < branch.length; index++) {

        document.getElementById("allbrunch").innerHTML += `
    <div class="card col-md-4" >
    <img src="${branch[index].imgSrc}" class="card-img-top pt-2" alt="...">
    <div class="card-body">
    <div class="d-flex justify-content-between align-items-center">
                            <h3>${branch[index].name} </h3>
                            <span>${branch[index].price} </span>
                            </div>
                        <p class="card-text">${branch[index].description} </p>
                    </div>
                    <button class="btn btn-outline-light addtocart  mb-3" onclick="addToCartBranch(${index})">ADD TO
          <i class="fa-solid fa-cart-shopping" style="color: #000;"></i></button>
                </div>
    
    `;
    
    }
}
getFoodAndCoffee();
getBranch();
