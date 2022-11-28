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

function showButton()
{
    let checkbox1 = document.getElementById('Check1');
    let checkbox2 = document.getElementById('Check2');
    let btn = document.getElementById('btnRoxo');

    if (checkbox1.checked)
    {
        btn.style.display = 'block';
    }
    if (checkbox2.checked)
    {
        btn.style.display = 'block';
    }
}


var yourbuttons = document.getElementsByClassName('btncolab');
var idThis;
const id1 = "colab1";
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
          if (idThis === id1){MostraElemento('divcolab1'); EscondeElemento('divcolab2'); EscondeElemento('divcolab3');}
          if (idThis === id2){MostraElemento('divcolab2'); EscondeElemento('divcolab1'); EscondeElemento('divcolab3');}
          if (idThis === id3){MostraElemento('divcolab3'); EscondeElemento('divcolab1'); EscondeElemento('divcolab2');}
    }

};