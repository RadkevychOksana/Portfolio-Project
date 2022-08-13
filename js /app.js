//HTML tag 'Select' (Language change)
const select = document.querySelector("select");
const allLang = ["en", "ua", "de"];
select.addEventListener("change", changeUrlLanguage);

//return return current Url + #ua,en,de
function changeUrlLanguage() {
  // HTML tag select<option<value (en,ua,de)
  let lang = select.value;

  //current url =  current Url + #ua,en,de
  window.location.href = window.location.pathname + "#" + lang;
  changeLanguage();
}

//
function changeLanguage() {
  // return hash in cuurent url + #ua,en,de
  let hash = window.location.hash;

  // return hash in cuurent url + #ua,en,de without #
  hash = hash.substr(1);

 //verify object allLang(lang,js) includes hash
  if (!allLang.includes(hash)) {

    //current url = url + #en (default)
    window.location.href = window.location.pathname + "#en";
    window.location.reload();
  }

  //value select option  = hash from url
  select.value = hash;

  // translate title: value of title = data from lang.js (props in object)
  document.querySelector("title").innerHTML = langArr["unit"][hash];

  // loop for all props in object (lang.js)
  for (let key in langArr) {

// select elements with ".lng-" for every key (example: unit, name, about ...)
    let elem = document.querySelector(".lng-" + key);
    
    //verify elem . If true elem = content 
    if (elem) {
      elem.innerHTML = langArr[key][hash];
      console.log(langArr[key][hash]);
    }
  }
}
changeLanguage();
