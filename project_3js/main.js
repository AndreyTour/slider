// var btn = document.querySelector("#btn");
// var text = document.querySelector("#text-block");
// var color = document.querySelector("#color-block");
// var container = document.querySelector("#block-list");
 
// function removes () {
// this.parentNode.remove();
// }

// btn.onclick = function () {

//     var block = document.createElement("p");
//     var remove = document.createElement("span");
//     remove.innerHTML = "x";

//     remove.onclick = removes;


//     block.innerHTML = text.value;
//     block.appendChild(remove);

//     block.style.backgroundColor = color.value;

//     container.appendChild(block);
    
// }


// var lists = document.querySelectorAll("h1");

// var myClick = function () {
//     alert(this.innerHTML)
// }

// lists.forEach(function(e) {
//     e.onclick = myClick;
// });


var show = function () {
    alert("hi")
}

var cart = function(x) {
    x();
}
cart(show);






