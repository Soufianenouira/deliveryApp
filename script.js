let foods = [
  {
    mainDish: [
      {
        name: "Pizza Margherita",
        mainIngredients: ["Tomaten Sauce", "Mozarella"],
        price: 11.50,
        clicked: 0,
      },

      {
        name: "Pizza Krabben",
        mainIngredients: ["Krabben", "Peperoni"],
        price: 12.50,
        clicked: 0,
      },

      {
        name: "Pizza Hähnchen",
        mainIngredients: ["hähnchen", "Peperoni"],
        price: 13.50,
        clicked: 0,
      },

      {
        name: "Pizza Hähnchen",
        mainIngredients: ["hähnchen", "Peperoni"],
        price: 13.50,
        clicked: 0,
      },

      {
        name: "Pizza Hähnchen",
        mainIngredients: ["hähnchen", "Peperoni"],
        price: 13.50,
        clicked: 0,
      },

      {
        name: "Pizza Hähnchen",
        mainIngredients: ["hähnchen", "Peperoni"],
        price: 13.50,
        clicked: 0,
      },

      {
        name: "Pizza Hähnchen",
        mainIngredients: ["hähnchen", "Peperoni"],
        price: 13.50,
        clicked: 0,
      },

      {
        name: "Pizza Hähnchen",
        mainIngredients: ["hähnchen", "Peperoni"],
        price: 13.50,
        clicked: 0,
      }
    ],
    desserts: [
      {
        name: "Cheesecake",
        price: 7.50,
        clicked: 0,
      },

      {
        name: "Tiramisu",
        price: 7.50,
        clicked: 0,
      },

      {
        name: "Tiramisu",
        price: 7.50,
        clicked: 0,
      },

      {
        name: "Tiramisu",
        price: 7.50,
        clicked: 0,
      },

      {
        name: "Tiramisu",
        price: 7.50,
        clicked: 0,
      },

      {
        name: "Ben&Jerrys",
        price: 7.50,
        clicked: 0,
      }

    ]
  }
];

let clicked = 0;
let basketElementsCounter = 0;
let isDelevery = 1;
let windowWidthOld = window.innerWidth;
let slideBarImg = document.getElementsByClassName("slide-bar-img");
let play = setInterval(autoPlay, 50);

function slideLeft(){
  let slider = globalThis.document.getElementById("slider");
  let sliderBasket = globalThis.document.getElementById("slider-basket");
  slider.scrollLeft -= 125;
  sliderBasket.scrollLeft -= 125;
}
function slideRight(){
  let slider = globalThis.document.getElementById("slider");
  let sliderBasket = globalThis.document.getElementById("slider-basket");
  slider.scrollLeft += 125;
  sliderBasket.scrollLeft += 125;
}

function autoPlay(){
  let slider = globalThis.document.getElementById("slider");
  let sliderBasket = globalThis.document.getElementById("slider-basket");
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
  const basketMaxScrollLeft = sliderBasket.scrollWidth - sliderBasket.clientWidth;
  if(slider.scrollLeft > (maxScrollLeft-2)){
    slider.scrollLeft -= maxScrollLeft;
  }else{
    slider.scrollLeft += 1;
  }
  if(sliderBasket.scrollLeft > (basketMaxScrollLeft-2)){
    sliderBasket.scrollLeft -= basketMaxScrollLeft;
  }else{
    sliderBasket.scrollLeft += 1;
  }
}

function init() {
  createCartsForDishes();
  showAllDishes();
}

function createCartsForDishes(){
  for (let index = 0; index < foods[0].mainDish.length; index++) {
    document.getElementById('foods-container').innerHTML += createInnerHtmlMainDish(index+1); 
  }
  for (let index = 0; index < foods[0].desserts.length; index++) {
    document.getElementById('desserts').innerHTML += createInnerHtmlDesserts(index+1+foods[0].mainDish.length); 
  }
}

function showAllDishes() {
  showMainDishes();
  showDesserts();
}

function showMainDishes(){
  for (let index = 0; index < foods[0].mainDish.length; index++) {
    let dishName = document.getElementById(`title_${index + 1}`);
    let priceContainer = document.getElementById(`price${index + 1}`);
    let mainDish = foods[0].mainDish[index];
    let price = `${mainDish.price.toFixed(2)}`;
    price = price.replace('.', ',');
    dishName.innerHTML = `${mainDish.name}`;
    priceContainer.innerHTML =  `${price}€`;
    showIngredients(mainDish, index);
  }
}

function showDesserts(){
  for (let index = 0; index < foods[0].desserts.length; index++) {
    let dishName = document.getElementById(`title_${index + 1 + foods[0].mainDish.length}`);
    let priceContainer = document.getElementById(`price${index + 1 + foods[0].mainDish.length}`);
    let dessert = foods[0].desserts[index];
    let price = `${dessert.price.toFixed(2)}`;
    price = price.replace('.', ',');
    dishName.innerHTML = `${dessert.name}`;
    priceContainer.innerHTML =  `${price}€`;
  }
}

function showIngredients(mainDish, i) {
  let ingredients = document.getElementById(`Ingredients_${i + 1}`);
  ingredients.innerHTML += `mit `;
  let separation = "";
  for (let index = 1; index <= mainDish.mainIngredients.length; index++) {
    if (index == mainDish.mainIngredients.length - 1) {
      separation = " und ";
    } else if (index == mainDish.mainIngredients.length) {
      separation = ".";
    } else {
      separation = ",";
    }
    ingredients.innerHTML += `${mainDish.mainIngredients[index - 1]}${separation}`;
  }
}

function basketGetReadyToAddElements() {
  let emptyBasketContainer = document.getElementById("shopping-basket-empty");
  let costsContainer = document.getElementById("costs");
  let orderBtn = document.getElementById("order-btn");
  costsContainer.style.display = "flex";
  emptyBasketContainer.style.display = "none";
  orderBtn.style.display = "flex";
}

function addDessertToBasket(genre, title){
  let shoppingBasket = document.getElementById("basket-elements");
  let dishName = document.getElementById(title);
  let price = `${foods[genre].desserts[title.slice(6) - 1-foods[0].mainDish.length].price.toFixed(2)}`;
  price = price.replace('.', ',');
  if (!basketElementsCounter) {
    basketGetReadyToAddElements();
  }
  addDessertOrChangeAmount(title, genre, shoppingBasket, dishName, price);
}

function  addDessertOrChangeAmount(title, genre, shoppingBasket, dishName, price){
  if (!foods[genre].desserts[title.slice(6) - 1 -foods[0].mainDish.length].clicked) {
    shoppingBasket.innerHTML += createInnerHtml(dishName, title, price);
    foods[genre].desserts[title.slice(6) - 1 -foods[0].mainDish.length].clicked = 1;
    basketElementsCounter++;
    calculateCosts();
  } else {
    let amount = document.getElementById(`amount${title}`);
    amount.innerHTML = Number(amount.innerHTML) + 1;
    calculateCosts();
  }
}

function addMainDishToBasket(genre, title){
  let shoppingBasket = document.getElementById("basket-elements");
  let dishName = document.getElementById(title);
  let price = `${foods[genre].mainDish[title.slice(6) - 1].price.toFixed(2)}`;
  price = price.replace('.', ',');
  if (!basketElementsCounter) {
    basketGetReadyToAddElements();
  }
  addMainDishOrChangeAmount(title, genre, shoppingBasket, dishName, price);
}

function  addMainDishOrChangeAmount(title, genre, shoppingBasket, dishName, price){
  if (!foods[genre].mainDish[title.slice(6) - 1].clicked) {
    shoppingBasket.innerHTML += createInnerHtml(dishName, title, price);
    foods[genre].mainDish[title.slice(6) - 1].clicked = 1;
    basketElementsCounter++;
    calculateCosts();
  } else {
    let amount = document.getElementById(`amount${title}`);
    amount.innerHTML = Number(amount.innerHTML) + 1;
    calculateCosts();
  }
}


function changeAmount(operator, title) {
  let amount = document.getElementById(`amount${title}`);

  if (operator == "+") {
    amount.innerHTML = Number(amount.innerHTML) + 1;
  } else {
    if (amount.innerHTML != "1") {
      amount.innerHTML = Number(amount.innerHTML) - 1;
    } else {
      deleteElementFromBaket(title);
    }
  }
  calculateCosts();
}

function deleteElementFromBaket(title) {
  let element;
  if(document.getElementById(`element-${title}-in-basket`)){
    element = document.getElementById(`element-${title}-in-basket`);
  }else{
    return 0;
  }
  element.remove();
  basketElementsCounter--;
  enableAddToBasketBtn(title.slice(6))
  switchToEmptyBasket();
  calculateCosts();
}

function enableAddToBasketBtn(titleNumber){
  if(titleNumber > foods[0].mainDish.length){
    foods[0].desserts[titleNumber - 1 -  foods[0].mainDish.length].clicked = 0;
  }else{
    foods[0].mainDish[titleNumber - 1].clicked = 0;
  }
}

function switchToEmptyBasket(){
  if (!basketElementsCounter) {
  let emptyBasketContainer = document.getElementById("shopping-basket-empty");
    let costsContainer = document.getElementById("costs");
    let orderBtn = document.getElementById("order-btn");
    emptyBasketContainer.style.display = "flex";
    costsContainer.style.display = "none";
    orderBtn.style.display = "none";
  }
}

function calculateCosts() {
  let result = 0;
  for (let index = 1; index <= foods[0].mainDish.length + foods[0].desserts.length; index++) {
      let amount = document.getElementById(`amounttitle_${index}`);
      let price = document.getElementById(`pricetitle_${index}`);
    if(price&&amount){
      price = price.innerHTML.replace("€", "");
      price = price.replace(',', '.');
      result += Number(amount.innerHTML) * Number(price);
    }
  }
  showCosts(result);
}

function windowWidthChangedFunction(){
  let windowWidth = window.innerWidth;
  if(windowWidth > 530){
    document.getElementById("shopping-basket-container").style.display = "flex";
    document.getElementById("foods").style.height = 'unset';
  }else{
    document.getElementById("shopping-basket-container").style.display = "none";
  }
}

function showCosts(result){
  result = Number(result).toFixed(2);
  document.getElementById("costs-without-delevery-charges").innerHTML =
    result.replace('.', ',') + "€";
    if(isDelevery){
      result = (Number(result) +5).toFixed(2);
    }
  document.getElementById("costs-with-delevery-charges").innerHTML =
    result.replace('.', ',') + "€";
}

function openBasket() {
  if (document.getElementById("shopping-basket-container").style.display == "flex") {
    document.getElementById("foods").style.overflow = 'auto';
    document.getElementById("shopping-basket-container").style.display = "none";
    document.getElementById("foods").style.height = 'unset';
  } else {
    document.getElementById("shopping-basket-container").style.display = "flex";
    document.getElementById("foods").style.overflow = 'hidden';
    document.getElementById("foods").style.height = '100px';
  }
}

function deliveryPickUpSwitch(){
  let delevery = document.getElementById("delivery-btn");
  let pickUp = document.getElementById("pick-up-btn");
  delevery.style.backgroundColor = "transparent";
  pickUp.style.backgroundColor = "white";
  isDelevery = 0;
  document.getElementById('delevery-costs').style.display = 'none';
  document.getElementById('delevery-costs-2').style.display = 'none';
  calculateCosts();
}

function pickUpDeliverySwitch(){
  let delevery = document.getElementById("delivery-btn");
  let pickUp = document.getElementById("pick-up-btn");
  delevery.style.backgroundColor = "white";
  pickUp.style.backgroundColor = "transparent";
  isDelevery = 1;
  document.getElementById('delevery-costs').style.display = 'flex';
  document.getElementById('delevery-costs-2').style.display = 'flex';
  document.getElementById('delevery-costs-2').style.justifyContent = 'flex-end';
  calculateCosts();
}

function cleanBasket(){
  for (let index = 1; index < foods[0].mainDish.length+foods[0].desserts.length; index++) {
    deleteElementFromBaket(`title_${index}`);
    
  }
}

function orderIsOut(){
  cleanBasket();
  document.getElementById("notification").style.display = 'flex';
  document.getElementById("notification").innerHTML += 'Ihre Bestellung ist in 40min bei Ihnen';
  const myTimeout = setTimeout(deleteNotification, 3000);
}

function deleteNotification(){
  document.getElementById("notification").style.display = 'none';
}