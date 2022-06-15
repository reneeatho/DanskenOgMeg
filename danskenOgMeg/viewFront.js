function updateViewFront() {
    
    let html = '';
   
    html += /*html*/`
    <div class="page">
        <div class="header">${Header()}</div>
        <div class="liteFelt">
            <ul>
                <li class="liteFeltLi">${searchfield()}</li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'LoginMail';updateView()">Logg inn</button></li>
            <ul>
        </div>
        <div class="meny">
          ${model.fuckLister0}
        </div>
        <div class="innhold" onclick="addToCart()">${model.products.name}</div>
        <div class="footer">footer</div>
    </div>
  `

  return html;
}

function meny(){
    let html = "";
    let liste = '';
    // for (let i = 0; i < model.categories.length;i++){
    //     liste +=  '<ul>'+ `<li class="dropDownList" onclick='showCategories(${model.categories[i].id})'>`
    //     + model.categories[i].name + '</li>'+ '</ul>'
    // }
    for (let i = 0; i < model.categories.length;i++){
        html +=  `<div class="dropDownList" onclick='underkategori(${i})'>${model.categories[i].name}</div>`
        
    }
    

    html += ` 
              <div onclick="showSubCategories()">${showSubLister}</div>`
    return html;
}
function underkategori(index){
    let html = "";
    for (let i = 0; i < 2;i++){
    html +=  `<div class="dropDownList" >${model.categoriesSub[i].categoriName}</div>`
    }

    model.text1 = html
    updateViewFront()
}
// ------------------------- Login Mail ---------------------------
function updateViewLoginWithMail(){
    html = /*html*/`
    <div class="loginPage">
        <div class="headerL">${Header()}</div>
        <div  class="smalLinje">
            <ul>
                <li class="backLogin"><button onclick="model.app.currentPage='FrontPage';updateView()">Back to main</button></li>
                <li class="cartLogin"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li></li>
            </ul> 
        </div>
        <div class="menyL">
            <div><h2 class="h2Login">Logg inn..</h2></div>
            <div>
                <div> <p class="paragraphMail">E-MAIL</p>
                      <p class="paragraphLogin">OR</p>
                      <p onclick="model.app.currentPage = 'LoginPhone'; updateView()" class="Phone">PHONE</p></div>
                <div  class="usernamePosition">${mail()}</div>
                <div  class="passwordPosition">${password()}</div>
                <div> <button class="loginButton">Log inn</button></div>
                <div> <button class="forgotPasswordButton">Forgot your password?</button></div>
                <div> <p class="paragraphLogin"> Or, are you a new user?</p></div>
                <div> <button class="createUserButton">Create new account</button></div>
            </div>
        </div>
        <div class="innholdL"></div>
        <div class="innhold1L"></div>
        <div class="footerL">footer</div>
    </div>`
    return html;
}
// ------------------------- Login Phone ---------------------------

function updateViewLoginWithPhone(){
    html = /*html*/`
    <div class="loginPage">
        <div class="headerL">${Header()}</div>
        <div  class="smalLinje">
            <ul>
                <li class="backLogin"><button onclick="model.app.currentPage='FrontPage';updateView()">Back to main</button></li>
                <li class="cartLogin"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li></li>
            </ul> 
        </div>
        <div class="menyL">
            <div><h2 class="h2Login">Logg inn..</h2></div>
            <div>
                <div><p onclick="model.app.currentPage = 'LoginMail'; updateView()"  class="Phone">E- MAIL</p>
                <p class="paragraphLogin">OR</p>
                <p class="paragraphMail">PHONE</p></div>
                <div class="usernamePosition">${phone()}</div>
                <div class="passwordPosition">${password()}</div>
                <div><button class="loginButton">Log inn</button></div>
                <div><button class="forgotPasswordButton">Forgot your password?</button></div>
                <div><p class="paragraphLogin"> Or, are you a new user?</<p></div>
                <div><button class="createUserButton">Create new account</button></div>
            </div>
        </div>
        <div class="innholdL"></div>
        <div class="innhold1L"></div>
        <div class="footerL">footer</div>
    </div>`
    return html;

}
