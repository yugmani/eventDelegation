var trEl = document.querySelectorAll("tr");
var cartEl = document.querySelector("#cart");
var itemEl = document.querySelector("#items");
var buttonEl = document.querySelectorAll("buttons");

var fruits = ["banana", "mango", "apple", "melon", "orange"];
var index = 0;
var html = "";
console.log(trEl);

fruits.forEach(function(fruit){
    trEl[index].innerHTML = `<td>${fruit}</td><button>Add to Cart</button>`;
    index ++;
})

itemEl.addEventListener("click", function(){
    event.preventDefault();
    var target = event.target;
    console.log(target);

    if(target.matches("button")){
        html += `<div>${fruits[target.parentElement.id]}</div>`;
        console.log(html);
        
    }
    cartEl.innerHTML = html;
})
