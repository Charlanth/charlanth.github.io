function displayMenu() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function displayDescription(hiddenElementID, elementID) {
  var element = document.getElementById(hiddenElementID);
  var elementToHide = document.getElementById(elementID);
  if(element.classList.contains("hidden")) {
    element.classList.remove("hidden");
    elementToHide.classList.add("hidden");
  } else {
    element.classList.add("hidden");
    elementToHide.classList.remove("hidden");
  }
}