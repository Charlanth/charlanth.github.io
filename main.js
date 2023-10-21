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

function showLanguageOptions() {
  var languageOptions = document.getElementById('language-options');
  if(languageOptions.classList.contains("hidden")) {
    languageOptions.classList.remove("hidden");
  } else {
    languageOptions.classList.add("hidden");
  }
}

var translations = {}; //Store translations
var currentLanguage = "EN"; //Default Language

function changeLanguage(newLanguage) {
  var currentLanguageElement = document.getElementById('current-language');
  currentLanguageElement.textContent = newLanguage;
  console.log("language switched");
  loadTranslations(newLanguage).then(function () {
    console.log("loading translations");
    updatePageContent(newLanguage);
  });
  showLanguageOptions();
}

function loadTranslations(language) {
  console.log("trying to fetch JSON file");
  return new Promise((resolve, reject) => {
    fetch('translations.json')
    .then(response => response.json())
    .then(data => {
      console.log("JSON file loaded");
      translations[language] = data[language];
      updatePageContent(language);
    })
    .catch(error => console.error('An error occurred', error));
  })
}

function updatePageContent(language) {
  var elements = document.querySelectorAll('[data-translation]');
  elements.forEach(function (element) {
    var key = element.getAttribute('data-translation');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[language][key];
    }
  });
}

// Default translation
loadTranslations(currentLanguage).then(function () {
  updatePageContent(currentLanguage);
});