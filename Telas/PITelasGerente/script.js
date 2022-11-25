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
