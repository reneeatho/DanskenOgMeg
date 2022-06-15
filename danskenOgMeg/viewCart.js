
function updateViewCart(){
    var result = '';
for (let i = 0; i < model.shoppingCart.length;) {
    const product = model.shoppingCart.cartProducts[i];
    const productImg = model.shoppingCart.productImg;
    const price = model.products.price;

    result += `<div class="product">${productImg} ${product} - Pris: ${price} </div>
    
    `
}
    html =
    `
    


<div class="pageCart">

    <div class="header">${Header()}</div>
    <div class="liteFelt">
            <ul>
                <li class="liteFeltLi">${searchfield()}</li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button></li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'LoginMail';updateView()">Logg inn</button></li>
            </ul>
    </div>

    <div class="product" >
    <img class="productImg" src="${model.shoppingCart.productImg}"> 
    ${model.shoppingCart.cartProducts} "Navn på produkt"
    </div>

    <div class="price">
    ${model.shoppingCart.productPrice} Kr 
    </div>

    
    <div class="quantity">
    <input class="quantityInput" type="number" value=${model.shoppingCart.cartProducts}>
    </div>

    <div class="removeBtn">
    <button class="removeBtn" onclick="removeCart()" >REMOVE</button>
    </div>

    <div class="product">${result}</div>

    <div class="buyBtn">
    <button class="buyBtn" onclick="purchase()"> Kjøp</button>
    </div>

    <div class="footer"> Footer </div>


</div>


    ` 
    return html;
};

