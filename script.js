let foods = [
    {
        "mainDish":[
            {
                "name":"Pizza Margherita",
                "mainIngredients": ["Tomaten Sauce", "Mozarella"],
                "price": 11.5,
                "clicked": 0
            },

            {
                "name":"Pizza Krabben",
                "mainIngredients": ["Krabben","Peperoni"],
                "price": 12.5,
                "clicked": 0
            },

            {
                "name":"Pizza Hähnchen",
                "mainIngredients": ["hähnchen","Peperoni"],
                "price": 13.5,
                "clicked": 0
            }
        ]
    }
];

let clicked = 0;
let basketElementsCounter = 0;
function init(){
    showAllDishes();
}

function showAllDishes(){
    for (let index = 0; index < foods[0].mainDish.length; index++) {
        let dishName = document.getElementById(`title_${index+1}`); 
        let mainDish = foods[0].mainDish[index];
        dishName.innerHTML = `${mainDish.name}`;
        showIngredients(mainDish , index);
    }
}

function  showIngredients(mainDish, i){
    let ingredients = document.getElementById(`Ingredients_${i+1}`);
    ingredients.innerHTML +=`mit `;
    let separation = "";
    for (let index = 0; index < mainDish.mainIngredients.length; index++) {
        if(index == mainDish.mainIngredients.length -2){
            separation = " und ";
        }else{
            separation = ", "
        }
        ingredients.innerHTML +=`${mainDish.mainIngredients[index]}${separation}`;
    }
}

function addElementToBasket(genre, title){
    let shoppingBasket = document.getElementById("basket-elements");
    let dishName = document.getElementById(title);
    let dish = foods[genre].mainDish[title.slice(6)-1];
    let price = dish.price;
    let clicked = dish.clicked;
    if(!basketElementsCounter){
        let emptyBasketContainer = document.getElementById("shopping-basket-empty");
        let costsContainer = document.getElementById("costs");
        costsContainer.style.display = "flex";
        emptyBasketContainer.style.display = "none";
    }
    if(!clicked){
        shoppingBasket.innerHTML += createInnerHtml(dishName, title, price, dish);
        dish.clicked = 1;
        basketElementsCounter++;
    }else{
        let amount = document.getElementById(`amount${title}`);
        amount.innerHTML = Number(amount.innerHTML) +1;
        
    }
}

function changeAmount(operator, title){
    let amount = document.getElementById(`amount${title}`);
    
        if(operator == '+'){
            amount.innerHTML = Number(amount.innerHTML) + 1;
        }else{
            if(amount.innerHTML != '1'){
                amount.innerHTML = Number(amount.innerHTML) - 1;
            }else{
                deleteElementFromBaket(title);
            }
        }
        
}

function deleteElementFromBaket(title){
    let element = document.getElementById(`element-${title}-in-basket`);
    element.remove();
    basketElementsCounter--;
    foods[0].mainDish[title.slice(6)-1].clicked = 0;
    if(!basketElementsCounter){
        let emptyBasketContainer = document.getElementById("shopping-basket-empty");
        emptyBasketContainer.style.display = "flex";
    }
}