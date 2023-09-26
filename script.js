// document.getElementById('orderButton').addEventListener('click', function() {
//     const container = document.getElementById('myBackdrop');
//     container.classList.remove('is-hidden');
// });

function openButFunction() {
  var element = document.getElementById("myBackdrop");
  element.classList.remove("is-hidden");
}

function closeButFunction() {
  var element = document.getElementById("myBackdrop");
  element.classList.add("is-hidden");
}

function openMenuFunction() {
  var element = document.getElementById("mobile_menu-id");
  element.classList.add("is-open");
}


function closeMenuFunction() {
  var element = document.getElementById("mobile_menu-id");
  element.classList.remove("is-open");
}


