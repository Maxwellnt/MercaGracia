// Obtenir l'idioma de la URL si existeix i executar la funció "changeLanguage"
const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')){
  const lang = urlParams.get('lang');
  changeLanguage(lang);
}

async function changeLanguage(lang) {
  // Guardar l'idioma a la URL
  const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
  window.history.replaceState({}, '', newURL);

  // Obtenir el fitxer json corresponent
  const response = await fetch(`../i18n/${lang}.json`);
  const data = await response.json();

  // Canviar els texts (Aquesta és la part que heu de modificar)
  // document
  // console.log('Hola');
  // console.log(document);
  // document.getElementById('').innerHTML='testing';

  document.getElementById('access').innerHTML=data.access;
  document.getElementById('firstName').innerHTML=data.firstName.textLabel;
  document.getElementById('firstName').placeHolder=data.firstName.placeholder;
  document.getElementById('lastName').innerHTML=data.lastname.textLabel;
  document.getElementById('lastName').placeHolder=data.lastname.placeHolder;
  document.getElementById('usuari').innerHTML=data.usuari.textLabel;
  document.getElementById('usuari').placeHolder=data.usuari.placeHolder;
  document.getElementById('mail').innerHTML=data.mail.textLabel;
  document.getElementById('mail').placeHolder=data.mail.placeHolder;
  document.getElementById('passwd').innerHTML=data.passwd.textLabel;
  document.getElementById('passwd').placeHolder=data.passwd.placeHolder;
  document.getElementById('btn').innerHTML=data.btn;
}