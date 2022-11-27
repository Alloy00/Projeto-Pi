
function toggleButton() {
  
  let checkbox2 = document.getElementById('flexCheckDefault2');
  let checkbox = document.getElementById('flexCheckDefault1');

  
if(checkbox2.checked) {
  document.querySelector('#btn5').disabled = false;
  return
} else {
  document.querySelector('#btn5').disabled = true;
}

  
if(checkbox.checked) {
  document.querySelector('#btn5').disabled = false;
  return
} else {
  document.querySelector('#btn5').disabled = true;
}
}


function MostraElemento(idelemento)
{
 var elemento = document.getElementById(idelemento);

elemento.style.display = 'block';
}
function EscondeElemento(idelemento)
{
 var elemento = document.getElementById(idelemento);

elemento.style.display = 'none';
}




var yourbuttons = document.getElementsByClassName('btncolab');
var idThis;
const id2 = "colab2";
const id3 = "colab3";
var highlightIni = 0;
var idIni = document.getElementById('colab2');
for (var i = yourbuttons.length - 1; i >= 0; i--) {
    var currentbtn;
    yourbuttons[i].onclick=function(){
        if (highlightIni == 0)
        {
            idIni.classList.remove("highlight");
            highlightIni = 1;
        }
         if(currentbtn){
             currentbtn.classList.remove("highlight");
          }
          this.classList.add("highlight");
          currentbtn=this;
          idThis = this.id;
          if (idThis === id2){MostraElemento('divcolab2');EscondeElemento('divcolab3');}
          if (idThis === id3){MostraElemento('divcolab3');EscondeElemento('divcolab2');}
    }

};
