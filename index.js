let screen = document.querySelector("#display_screen")
screen.addEventListener('click', function(){
  var id=document.getElementById('id');
  if (id.value.length == 0) {
    alert("Please enter a user ID!");
    return false;
}
return true;
})
;

let toggleMenu = document.querySelector('.place_order_btn');
toggleMenu.addEventListener('click', function(){
  var menuBox = document.getElementById('menubox');    
  var arrow = document.getElementById('arrow');
  var symbols=document.getElementById('symbols');
  if((menuBox.style.display == "flex")|| (symbols.value == "")){ 
    menuBox.style.display = "none";
    arrow.style.transform= "none";
  }
  else { 
    menuBox.style.display = "flex";
    arrow.style.transform= "rotateZ(90deg)";
    arrow.style.transition="all 0.3s ease";
  }
});

function validate(){
  var symbols=document.getElementById('symbols');
  if (symbols.value == "") {
    alert("Please select a symbol!");
    return false;
}
return true;
}

  let price = document.querySelector('#price');
  let quantity = document.querySelector('#quantity');
  let symbol = document.querySelector('#symbols');
    
  $(".bs").on('click', function() {
    alert("Order successfully placed to " + $(this).val() + " " + quantity.value +" quantity of " + symbol.options[symbol.selectedIndex].text + " @ Rs. " + price.value + "/- \nOrderID: ")
    });

    var user = document.querySelector(".enter_user").children[0];

// var input = document.querySelector("#id");
// input.addEventListener("keyup", (event) => {
//   if (event.key === "Enter" & input.value != "") {
// var h=document.createElement('h4')
// h.innerHTML="User ID: " + input.value;
//     user.replaceChild(h,input);
//     h.style.backgroundColor="#ffff44"
//     document.querySelector(".enter_user").style.backgroundColor="#ffff44";
//   }
// });
