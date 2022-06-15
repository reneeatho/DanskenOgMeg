function Header() {
    return `
         <h1 class="header">Dansken og meg - Vintage Julefinger</h1>
         `
}
 
//Søkefelt
function searchfield(){
    return `
    <div><b>Søk etter varer her:</b> <input type="text" oninput="searchCatalog()"/></div>
    `
}


// let dropDown = '';
// function dropdownListe(){
// for (let i = 0; i < model.categories.length; i++) {
//     dropDown += /*html*/`
//     <div class="drit" onclick="showCategories(${i})">${model.categories[i].name }</div>
//     <div>${faen}</div>
//     `
// }
//}

function showCategories(index) {
    let subLister = '';
     for (let i = 0; i < model.categoriesSub.length; i++){
          for (let a = 0; a < model.categories.length; a++){
                 if(model.categoriesSub[i].parentId == index ){
                    subLister += '<ul>' + '<li class="sublist" onclick="${model.categoriesSub[i].id}">' + model.categoriesSub[i].categoriName + '</li>' + '</ul>';
                    showSubLister = subLister;
                    
                    //  x = subLister ;
                    //     if(x == ''){
                    //         subLister = model.categoriesSub[i].categoriName;
                    //     } else {
                    //         subLister = '';
                    //     }
                    }
                } 
            }
        console.log('sub', subLister)
        console.log('x', x)
    updateView();
}

// function make(index){

// let html = "";
// model.fuckLister0 = "";
// let liste =[];
// model.activeSubCategory[index] = !model.activeSubCategory[index];
// model.wasActiveSubCategory[index] = !model.wasActiveSubCategory[index];
// // let filter = model.categoriesSub.filter(id => model.categories.id)
// if(index < 1000 ){
// for (let i = 0; i < model.categoriesSub.length; i++){
//     if(model.categoriesSub[i].parentId == model.categories[index].id){
//         liste.push(model.categoriesSub[i]);
//     }
//  }
// }

//     for (let i = 0; i < model.categories.length; i++){
//         let lengthOfSubCatecory = []; 
//         if(model.categoriesSub[i].parentId == model.categories[i].id){
//             lengthOfSubCatecory.push(model.categoriesSub[i]);
//         }
//     if(model.activeSubCategory[i] == true){
//      html += `<div class="dropDownList" onclick="make(${i});">${model.categories[i].name}</div>`
     
   
//      for(let j = 0; j < liste.length;j++){
     
//          if(model.wasActiveSubCategory[i] != model.activeSubCategory[i] && liste.length <= lengthOfSubCatecory.length  ){
//             html += `<div class="sublist"  onclick="updateViewFront()">${liste[j].categoriName}</div>`
//          }
//          else{
//             html += `<div class="sublist"  onclick="updateViewFront()">${lengthOfSubCatecory[j].categoriName}</div>`
//          }
//      }
    
//     }
//     else{
//         html += `<div class="dropDownList"  onclick="make(${i})">${model.categories[i].name}</div>`
//     }
//     }
//     model.fuckLister0 = html;
//    updateView();
// }

function make(index){

    let html = "";
    model.fuckLister0 = "";
    model.activeSubCategory[index] = !model.activeSubCategory[index];
    model.wasActiveSubCategory[index] = !model.wasActiveSubCategory[index];
    
    for(let i = 0; i < model.categories.length; i++){      
        if(model.activeSubCategory[i] == true && index < 1000){
            html += `<div class="dropDownList" onclick="make(${i});">${model.categories[i].name}</div>`
         for(let j = 0; j <model.categories[i].sub.length; j++){
            html += `<div class="sublist"  onclick="updateViewFront()">${model.categories[i].sub[j].categoriName}</div>`
            }
        }
        else{
            html += `<div class="dropDownList" onclick="make(${i});">${model.categories[i].name}</div>`
        }

    }
    model.fuckLister0 = html;
    updateView();
       
      
    }
function addCategory(){
    // legg til verdier for å lage kategori (Id og navn på kategori)

    model.activeSubCategory.push(false) 
    model.wasActiveSubCategory.push(false) 
    //update view
}


    // if (index == model.categories[0].id) {
    //     subLister = `<div id='subListe'>${model.categoriesSub[0].categoriName}</div>`
   
    // console.log('er', subLister)
    // console.log('er',model.categories[index].id)
    // if(model.categories[index].id == 1){ faen = model.categoriesSub[0].categoriName}
    // console.log('er:', faen)

  
function visListe(fucka){
    let x = subLister;
    if(x == ''){
        subListe = `
        <ul>
            <li class="A1">1</li>
            <li class="A1">2</li>
            <li class="A1">3</li>
        </ul>
    `
    } else {
        subLister = ''
    }
}


// function SC() { 
//     let toggle = () => {
//     let element = document.getElementById('Sub-cat');
//         let hidden = element.getAttribute('hidden');
            
//         if (hidden) { 
//             element.removeAttribute('hidden');
//         }
//         else {
//             element.setAttribute('hidden', 'hidden');
//         }
//     }
// <button onclick="toggle();">My button</button>
//}
    