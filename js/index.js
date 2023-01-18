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

  //LOGIN
 if(document.getElementById('access')) document.getElementById('access').innerHTML=data.access;
 if(document.getElementById('firstName')) document.getElementById('firstName').innerHTML=data.firstName.textLabel;
 if(document.getElementById('firstName')) document.getElementById('firstName').placeHolder=data.firstName.placeholder;
 if(document.getElementById('lastName')) document.getElementById('lastName').innerHTML=data.lastname.textLabel;
 if(document.getElementById('lastName')) document.getElementById('lastName').placeHolder=data.lastname.placeHolder;
 if(document.getElementById('usuari')) document.getElementById('usuari').innerHTML=data.usuari.textLabel;
 if(document.getElementById('usuari')) document.getElementById('usuari').placeHolder=data.usuari.placeHolder;
 if(document.getElementById('mail')) document.getElementById('mail').innerHTML=data.mail.textLabel;
 if(document.getElementById('mail')) document.getElementById('mail').placeHolder=data.mail.placeHolder;
 if(document.getElementById('passwd')) document.getElementById('passwd').innerHTML=data.passwd.textLabel;
 if(document.getElementById('passwd')) document.getElementById('passwd').placeHolder=data.passwd.placeHolder;
 if(document.getElementById('btn')) document.getElementById('btn').innerHTML=data.btn;

  //INDEX
  if(document.getElementById('linkInici')) document.getElementById('linkInici').innerHTML=data.linkInici;
  if(document.getElementById('linkCompra')) document.getElementById('linkCompra').innerHTML=data.linkCompra;
  if(document.getElementById('linkLogin')) document.getElementById('linkLogin').innerHTML=data.linkLogin;
  if(document.getElementById('linkAbout')) document.getElementById('linkAbout').innerHTML=data.linkAbout;
  //COMPRA

  //ABOUT
  if(document.getElementById('rip')) document.getElementById('rip').innerHTML=data.rip;

}