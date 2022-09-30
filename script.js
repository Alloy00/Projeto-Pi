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





src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossorigin="anonymous" 