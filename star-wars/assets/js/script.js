
/**
 *
 * This file is part of <santanamic/css-animation>
 * Created by WILLIAN SANTANA <https://github.com/santanamic>
 *
 * For the information of copyright and license you should read the file
 * LICENSE which is distributed with this source code.
 *
 * Para a informaçao dos direitos autorais e de licença voce deve ler o arquivo
 * LICENSE que é distribuído com este código-fonte.
 *
 * Para obtener la información de los derechos de autor y la licencia debe leer
 * el archivo LICENSE que se distribuye con el código fuente.
 *
 * @author @santanamic
 *
 */ 

var byline = document.getElementById('byline'); 
bylineText = byline.innerHTML;
bylineArr = bylineText.split('');
byline.innerHTML = '';

var span;
var letter;

for(i=0;i<bylineArr.length;i++){
  span = document.createElement("span");
  letter = document.createTextNode(bylineArr[i]);
  if(bylineArr[i] == ' ') {
    byline.appendChild(letter);
  } else {
        span.appendChild(letter);
    byline.appendChild(span);
  }
}