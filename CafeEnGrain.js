

$(document).ready(function () {
var cafe = [

{id : 1 ,name :"cofe1",  prix :10 , categorie : "gafeEnGrain" , marque :"Dolce vita"  , src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/n/e/nespresso-dolce-vita-10-nocciolino-0001.jpg"},
{id : 1 ,name :"cofe2",  prix :22 , categorie : "gafeEnGrain" , marque :"Kaffekapslen classique" ,  src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/c/b/cb-kaffekapslen-1000g-classic-02.jpg" },
{id : 1 ,name :"cofe3",  prix :12 , categorie : "gafeEnGrain" , marque :"Lavazza" ,  src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/c/b/cb-lavazza-1000g-qualita-oro-001.jpg" },
{id : 1 ,name :"cofe1",  prix :8 , categorie : "gafeEnGrain" , marque :"illy Ethiopia"  , src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/c/b/cb-illy-250g-etiopia-0001.jpg"},

{id : 1 ,name :"cofe4",  prix :7 , categorie : "gafeEnGrain" , marque :"Lavazza"  , src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/c/b/cb-lavazza-1000g-espresso-barista-perfetto-001.jpg"},
{id : 1 ,name :"cofe1",  prix :13 , categorie : "gafeEnGrain" , marque :"Lavazza"  , src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/c/b/cb-lavazza-1000g-crema-e-aroma-0001.jpg"},

{id : 1 ,name :"cofe1",  prix :9 , categorie : "gafeEnGrain" , marque :"Garibaldi Espresso Bar"  , src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/c/b/cb-garibaldi-1000g-espresso-bar-0001.jpg"},
{id : 1 ,name :"cofe1",  prix :11 , categorie : "gafeEnGrain" , marque :"Segafredo Intermezzo"  , src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/c/b/cb-segafredo-1000g-intermezzo-0001.jpg"},
{id : 1 ,name :"cofe1",  prix :6 , categorie : "gafeEnGrain" , marque :"Gimoka Supremo"  , src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/c/b/cb-gimoka-1000g-supremo-0001.jpg"},
{id : 1 ,name :"cofe1",  prix :14 , categorie : "gafeEnGrain" , marque :"Carte Noire Classique"  , src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/c/b/cb-carte-noire-1000g-grains-classique-0011.jpg"},

{id : 1 ,name :"cofe1",  prix :8 , categorie : "gafeEnGrain" , marque :"illy Classico"  , src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/c/b/cb-illy-250g-classico-0001.jpg"},
{id : 1 ,name :"cofe1",  prix :7 , categorie : "gafeEnGrain" , marque :"Crema Mild - Schwiizer Schüumli"  , src :"https://kaffekapslen.media/media/catalog/product/cache/8d51d2c841b39efc432b4cec618b425d/6/0/602004-1000g-crema-mild-01.jpg"},


]
function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }


function CafeByCategorie(array, params) {

var CafeByCategorie=  filter(array ,function (elemnt) {

    return elemnt.categorie === params
    
})
 return CafeByCategorie
    
}




let showInfo= "";
$.each(CafeByCategorie(cafe ,"gafeEnGrain" ), function(index, value){

   
    showInfo += `

  
     <div class="col-md-2">
      
    
       <div class="container_main">
          <img src="${value.src}"  alt="Avatar" class="image">
        
          <div >
          <p  style="text-align: center;" >${value.marque}  </p>
         
          <button  style="text-align: center;" id="prix"  value="${value.prix} ,${value.marque}, ${value.src} " onClick="ajouter(this)"  class="btn btn-danger">+ ajouter ${value.prix} $</button></span>
          </div>
       </div>
    </div>
  
            
        `;

        $("#display").html(`<div class="row">${showInfo}</div> `);
       // document.getElementById("display").innerHTML=showInfo;

       


});







});


let listAchat = []
let listAchats = []

       function ajouter(e){
       console.log(e.value)
       split = e.value
       listAchat= split.split(',')
       

       added = { prix : listAchat[0] , name : listAchat[1] , src :listAchat[2] }
       listAchats.push(added)
      
          console.log(listAchats)
          return listAchats ;
         
      }
      var select = document.getElementById("achats");
   function showListe(){
    console.log("hello")
    console.log(listAchats)
  
   for(var i =0 ; i<listAchats.length ; i++ ){

    var opt = listAchats[i];
    var el = document.createElement("a");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
   }

 

   } 