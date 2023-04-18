var allbrunch = document.getElementById("allbrunch");

var menuFood = [
    {
        imgsrc: `../assets/images/ourmenu/coffee/coffee-1.jpg`,
        name: "Marbled Iced Latte"
        , price: 3.65,
        ingredients: `Condensed Milk, Ice cubs, Espresso. `
    },
    {
        imgsrc: `../assets/images/ourmenu/coffee/coffee-2.jpg`,
        name: "Hot Vanilla Latte "
        , price: 3.25,
        ingredients: `Espresso, Vanilla Syrup, Milk. `
    },
    {
        imgsrc: `../assets/images/ourmenu/coffee/coffee-3.jpg`,
        name: "Almondmilk Latte"
        , price: 4.25,
        ingredients: `Espresso, Almondmilk, Vegan.`
    },
    {
        imgsrc: `../assets/images/ourmenu/coffee/coffee-4.jpg`,
        name: "Cappuccino	"
        , price: 3.65,
        ingredients: `Espresso, Extra Froth, Chocolate Powder`
    },
    {
        imgsrc: `../assets/images/ourmenu/coffee/coffee-5.jpg`,
        name: "Double Shot Espresso	"
        , price: 2.25,
        ingredients: `Espresso, Double Shorts.`

    },
    {
        imgsrc: `../assets/images/ourmenu/coffee/coffee-6.jpg`,
        name: "Black Tea with Milk"
        , price: 2.55,
        ingredients: `Royal English Breakfast Tea Latte.`
    },
    {
        imgsrc: `../assets/images/ourmenu/food/food1.jpg`,
        name: "Breakfast Sandwich	"
        , price: 4.25,
        ingredients: `Bacon, Gouda, Toasts.

        `
    },
    {
        imgsrc: `../assets/images/ourmenu/food/food2.jpg`,
        name: "	Croissant Bun "
        , price: 3.75,
        ingredients: `Slow Roasted Ham, Croissant Bun.
        `
    },
    {
        imgsrc: `../assets/images/ourmenu/food/food3.jpg`,
        name: "Sausage Sandwich	"
        , price: 4.25,
        ingredients: `Cheddar, Salad, Sausage .


        `
    },
    {
        imgsrc: `../assets/images/ourmenu/food/food4.jpg`,
        name: "Iced Lemon Pound Cake"
        , price: 2.45,
        ingredients: `Iced Lemon Pound Cake.


        `
    },
    {
        imgsrc: `../assets/images/ourmenu/food/food5.jpg`,
        name: "Chilli Turkey Sandwich"
        , price: 4.75,
        ingredients: `Bread, Sweet Chilli Turkey, Salad.

        `
    },
    {
        imgsrc: `../assets/images/ourmenu/food/food6.jpg`,
        name: "Blueberry Waffles"
        , price: 4.95,
        ingredients: `Blue Berries, Waffles, Honey.

        `
    }
];
var brunch = [
    {
        imgsrc: `../assets/images/home/branch/img-1.jpg`,
        name: "Spaghetti alla Puttanesca"
        , price: 29.99,
        description: `Extra virgin olive oil, touch of garlic, prawns, green peas,
         sun dried tomato, white wine and Italian herbs.`
    },
    {
        imgsrc: `../assets/images/home/branch/img-2.jpg`,
        name: "Spaghetti Napoletana "
        , price: 24.99,
        description: `Spaghetti with olive oil, touch of garlic, olives, capers, anchovies, Italian Herbs and Napolitanan sauce with fresh basil.

        `
    },
    {
        imgsrc: `../assets/images/home/branch/img-3.jpg`,
        name: "Penne Alla Arrabbiata"
        , price: 24.99,
        description: `Tubes of al dente pasta with olive oil, garlic, bacon, onion, basil and a touch of red sauce.

        `
    },
    {
        imgsrc: `../assets/images/home/branch/img-4.jpg`,
        name: "Pappardelle Gamberi"
        , price: 35.99,
        description: `Extra virgin olive oil, touch of garlic, prawns, green peas, sun dried tomato, white wine and Italian herbs.

        `
    },
    {
        imgsrc: `../assets/images/ourmenu/img5.jpg`,
        name: "Seafood Capellini Pasta"
        , price: 24.99,
        description: `Al dente spaghetti in the regional tomato sauce with a hint of herbs.`
    },
    {
        imgsrc: `../assets/images/ourmenu/img6.jpg`,
        name: "Mushroom Bolognese Pasta"
        , price: 24.99,
        description: `Al dente spaghetti in the regional tomato sauce with a hint of herbs.`
    }
];

for (let index = 0; index < brunch.length; index++) {
    allbrunch.innerHTML += `
    <div class="card col-md-4" style="width:33%;">
                    <img src="${brunch[index].imgsrc}" class="card-img-top pt-2" alt="...">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h3>${brunch[index].name} </h3>
                            <span>${brunch[index].price} </span>
                        </div>
                        <p class="card-text">${brunch[index].description} </p>
                    </div>
                </div>
    
    `;

}