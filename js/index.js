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
  if(document.getElementById('titleAlimentacio')) document.getElementById('titleAlimentacio').innerHTML=data.titleAlimentacio;
  if(document.getElementById('titleBazar')) document.getElementById('titleBazar').innerHTML=data.titleBazar;
  if(document.getElementById('descAlimentacio')) document.getElementById('descAlimentacio').innerHTML=data.descAlimentacio;
  if(document.getElementById('descBazar')) document.getElementById('descBazar').innerHTML=data.descBazar;
  if(document.getElementById('headerAlimentacio')) document.getElementById('headerAlimentacio').innerHTML=data.headerAlimentacio;
  if(document.getElementById('namePan')) document.getElementById('namePan').innerHTML=data.namePan;
  if(document.getElementById('ButtonPan')) document.getElementById('ButtonPan').innerHTML=data.ButtonPan;
  if(document.getElementById('buttonArroz')) document.getElementById('buttonArroz').innerHTML=data.buttonArroz;
  if(document.getElementById('nameArroz')) document.getElementById('nameArroz').innerHTML=data.nameArroz;
  if(document.getElementById('nameChoco')) document.getElementById('nameChoco').innerHTML=data.nameChoco;
  if(document.getElementById('buttonChoco')) document.getElementById('buttonChoco').innerHTML=data.buttonChoco;
  if(document.getElementById('titleAlimentacio')) document.getElementById('titleAlimentacio').innerHTML=data.titleAlimentacio;
  if(document.getElementById('titleAlimentacio')) document.getElementById('titleAlimentacio').innerHTML=data.titleAlimentacio;
  if(document.getElementById('buttonLlet')) document.getElementById('buttonLlet').innerHTML=data.buttonLlet;
  if(document.getElementById('buttonOran')) document.getElementById('buttonOran').innerHTML=data.buttonOran;
  if(document.getElementById('buttonSan')) document.getElementById('buttonSan').innerHTML=data.buttonSan;
  if(document.getElementById('nameLlet')) document.getElementById('nameLlet').innerHTML=data.nameLlet;
  if(document.getElementById('nameOran')) document.getElementById('nameOran').innerHTML=data.nameOran;
  if(document.getElementById('nameCalc')) document.getElementById('nameCalc').innerHTML=data.nameCalc;
  if(document.getElementById('buttonDes')) document.getElementById('buttonDes').innerHTML=data.buttonDes;
  if(document.getElementById('buttonLim')) document.getElementById('buttonLim').innerHTML=data.buttonLim;
  if(document.getElementById('buttonMaz')) document.getElementById('buttonMaz').innerHTML=data.buttonMaz;
  if(document.getElementById('buttonTaz')) document.getElementById('buttonTaz').innerHTML=data.buttonTaz;
  if(document.getElementById('buttonToa')) document.getElementById('buttonToa').innerHTML=data.buttonToa;
  if(document.getElementById('buttonCalc')) document.getElementById('buttonCalc').innerHTML=data.buttonCalc;
  if(document.getElementById('nameDes')) document.getElementById('nameDes').innerHTML=data.nameDes;
  if(document.getElementById('nameLim')) document.getElementById('nameLim').innerHTML=data.nameLim;
  if(document.getElementById('nameMaz')) document.getElementById('nameMaz').innerHTML=data.nameMaz;
  if(document.getElementById('nameTaz')) document.getElementById('nameTaz').innerHTML=data.nameTaz;
  if(document.getElementById('nameToa')) document.getElementById('nameToa').innerHTML=data.nameToa;
 
  //ABOUT
  if(document.getElementById('rip')) document.getElementById('rip').innerHTML=data.rip;

  //Header
  if(document.getElementById('Inici')) document.getElementById('Inici').innerHTML=data.inici;
  if(document.getElementById('sobreNosotros')) document.getElementById('sobreNosotros').innerHTML=data.sobreNosotros;
  if(document.getElementById('compraOnline')) document.getElementById('compraOnline').innerHTML=data.compraOnline;


  //Footer
  if(document.getElementById('client')) document.getElementById('client').innerHTML=data.client;
  if(document.getElementById('company')) document.getElementById('company').innerHTML=data.company;
  if(document.getElementById('follow')) document.getElementById('follow').innerHTML=data.follow;
  if(document.getElementById('contact')) document.getElementById('contact').innerHTML=data.contact;
  if(document.getElementById('compraonline')) document.getElementById('compraonline').innerHTML=data.compraonline;
  if(document.getElementById('FAQS')) document.getElementById('FAQS').innerHTML=data.FAQS;
  if(document.getElementById('supermercats')) document.getElementById('supermercats').innerHTML=data.supermercats;
  if(document.getElementById('trabaja')) document.getElementById('trabaja').innerHTML=data.trabaja;
  if(document.getElementById('franquicia')) document.getElementById('franquicia').innerHTML=data.franquicia;



}