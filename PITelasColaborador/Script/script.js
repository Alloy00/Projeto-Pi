
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


var yourbuttons = document.getElementsByClassName('classenothave');
var idThis;
const id1 = "gerente";
const id2 = "colaborador";
var highlightIni = 0;
var idIni = document.getElementById('colaborador');
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
          if (idThis === id2){MostraElemento('botaog'); EscondeElemento('botaoc');}
          if (idThis === id1){MostraElemento('botaoc'); EscondeElemento('botaog');}
    }

};


src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossorigin="anonymous" 