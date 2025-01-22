function createInnerHtml(dishName, title, price, dish){
let innerHTMLString = `<div id="element-${title}-in-basket">
                            <span>${dishName.innerHTML}</span>
                            <div class="shopping-basket-elements">
                                <button onclick="changeAmount('-', '${title}')" class="amount-btn">-</button>
                                <small id="amount${title}">1</small><small>x</small>
                                <button onclick="changeAmount('+', '${title}')" class="amount-btn">+</button>
                                <small>${price}€</small>
                                <button onclick="deleteElementFromBaket('${title}')" class="amount-btn">
                                    <img class="delete-img" src="./img/clear-1727486_1280 (1).png">
                                </button>
                            </div>
                        </div>`;
return innerHTMLString;

}