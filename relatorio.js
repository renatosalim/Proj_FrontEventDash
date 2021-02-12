function carregaInfo() {

    var strUser = localStorage.getItem("userDASH"); //quero verificar se tem um usuario no cache

    //se não tiver esse usuário no localstorage, redirecionar para a pagina de login
    if (!strUser) {
        window.location = "index.html";
        return;
    }

    //se estixistir o usuário, segue o jogo
    var user = JSON.parse(strUser); //estou reconvertendo a string de usuário para um objeto 

    //substituir o texto da tag fotoUser por uma tag de imagem
    document.getElementById("fotoUser").innerHTML = `<img src="${user.linkFoto}" width="100%">`;
    document.getElementById("bioUser").innerHTML = `<h4>${user.nome}</h4>
                                                    <p><strong>Racf:</strong> ${user.racf}</p>
                                                    <p><strong>Email:</strong> ${user.email}</p>
                                                    <p><strong>Ramal:</strong> ${user.ramal}</p>`;
}

function logout() {
    localStorage.removeItem("userDASH");
    window.location = "index.html";
}