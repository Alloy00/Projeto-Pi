function login()
{
    var email = document.getElementById('Email').value;
    var senha = document.getElementById('Senha').value;
    
    if(email == "admin@sidi.com" && senha == "admin"){
        alert('Verique seu email, a confirmação de login irá chegar :)')
    }
    else {
        alert('Email e/ou senhas incorreto(s)!!')
    }
    
}

window.onload = function () {
    var el = document.getElementById("agendar");
    el.onclick = sayHello;
}

function agendar()
{
    alert("Será redirecionado para página de agendamento")
}

function agendamentos()
{
    alert("Será redirecionado para página de meus agendamentos")
}

const date = new Date();


const renderCalendar = () => {

  const dia = String(date.getDate()).padStart(2,'0')
  const mes = String(date.getMonth() +1).padStart(2,'0')
  const ano = date.getFullYear()

  const DataAtual = `${dia}/${mes}/${ano}`

  const Atual = document.querySelector(".DataAtual")
  Atual.innerHTML = `${dia}/${mes}/${ano}`

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "Janeiro",
    "Feveiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();





src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossorigin="anonymous" 