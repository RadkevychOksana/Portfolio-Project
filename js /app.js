const select = document.querySelector("select");
const allLang = ["en", "ua", "de"];
select.addEventListener("change", changeUrlLanguage);

function changeUrlLanguage() {
  let lang = select.value;
  window.location.href = window.location.pathname + "#" + lang;
  changeLanguage();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    window.location.href = window.location.pathname + "#en";
    window.location.reload();
  }
  select.value = hash;
  document.querySelector('title').innerHTML = langArr['unit'][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();
