var trEl = document.querySelectorAll(".fruits");
var cartEl = document.querySelector("#cart");
var itemEl = document.querySelector("#items");
var buttonEl = document.querySelectorAll("buttons");

var fruits = ["banana", "mango", "apple", "melon", "orange", "grapes", "plum", "strawberry", "papaya", "pomegranate"];
var pictures = [
                "banana.jpg",
                "mango.jpg",
                "apple.jpg",
                "melon.jpg",
                "orange.jpg",
                "grapes.jpg",
                "plums.jpg",
                "strawberry.jpg",
                "papaya.jpg",
                "pomegranate.jpg"
            ];


var index = 0;
var html = "";


fruits.forEach(function(fruit){
    // trEl[index].innerHTML = `<td>${fruit}</td><button>Add to Cart</button>`;
    trEl[index].innerHTML = `<div><img src="./images/${pictures[index]}"> ${fruit}</div><button>Add to Cart</button>`;
    index ++;
})

//*************************************** 


itemEl.addEventListener("click", function(){
    event.preventDefault();
    var target = event.target;
   

    if(target.matches("button")){
        
        html += `<div class="cart-item">${fruits[target.parentElement.id]}</div>`;
        
    }
    cartEl.innerHTML = html;
   
})

