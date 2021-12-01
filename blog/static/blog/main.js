var i;
var divs = document.getElementById('#article_length');
for(i=0;i<divs.length;i++) {
  if(divs[i].className == 'myclass') {
    divs[i].innerHTML = divs[i].innerHTML.substring(0,300);
  }
}