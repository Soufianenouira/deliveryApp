function createInnerHtml(dishName, title, price){
let innerHTMLString = `<div id="element-${title}-in-basket">
                            <span class="text-align-left">${dishName.innerHTML}</span>
                            <div class="shopping-basket-elements">
                                <button onclick="changeAmount('-', '${title}')" class="amount-btn">-</button>
                                <small id="amount${title}">1</small><small>x</small>
                                <button onclick="changeAmount('+', '${title}')" class="amount-btn">+</button>
                                <small id="price${title}">${price}€</small>
                                <button onclick="deleteElementFromBaket('${title}')" class="amount-btn">
                                    <img class="delete-img" src="./img/clear-1727486_1280 (1).png">
                                </button>
                            </div>
                        </div>`;
return innerHTMLString;

}
function createInnerHtmlMainDish(index){
    let innerHTMLString = `<div class="card mb-2">
                                <div class="btn-div">
                                    <button onclick="addMainDishToBasket(0, 'title_${index}')" class="btn btn-primary">
                                        +
                                    </button>
                                </div>
                                <div class="card-body">
                                    <h2 id="title_${index}"></h2>
                                    <small class="price-small" id="price${index}"></small>
                                    <p id="Ingredients_${index}"></p>
                                </div>
                            </div>`;
    return innerHTMLString;
}

function createInnerHtmlDesserts(index){
    let innerHTMLString = `<div class="card mb-2">
                                <div class="btn-div">
                                    <button onclick="addDessertToBasket(0, 'title_${index}')" class="btn btn-primary">
                                        +
                                    </button>
                                </div>
                                <div class="card-body">
                                    <h2 id="title_${index}"></h2>
                                    <small class="price-small" id="price${index}"></small>
                                </div>
                            </div>`;
    return innerHTMLString;
}