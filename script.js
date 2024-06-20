document.addEventListener("DOMContentLoaded", function() {
    var cadastroLink = document.getElementById("cadastro-link");
    if (cadastroLink) {
        cadastroLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "cadastro.html";
        });
    }

    var esqueciSenhaLink = document.getElementById("esqueci-senha-link");
    if (esqueciSenhaLink) {
        esqueciSenhaLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "senha.html";
        });
    }

    var loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = "categoria.html";
        });
    }

    var finalizarBtn = document.getElementById("finalizar-btn");
    if (finalizarBtn) {
        finalizarBtn.addEventListener("click", function(event) {
            event.preventDefault();
            console.log("O botão 'Finalizar' foi clicado!");
            window.location.href = "perfil.html";
        });
    }
});

function dragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }
  
  function dragEnterHandler(event) {
    document.getElementById("drop-area").classList.add("hover");
  }
  
  function dragLeaveHandler(event) {
    document.getElementById("drop-area").classList.remove("hover");
  }
  
  function dropHandler(event) {
    event.preventDefault();
    document.getElementById("drop-area").classList.remove("hover");
  
    var files = event.dataTransfer.files;
    for (var i = 0; i < files.length; i++) {
      console.log("Nome do arquivo:", files[i].name);
      console.log("Tipo do arquivo:", files[i].type);
      console.log("Tamanho do arquivo:", files[i].size, "bytes");
    }
  }

  var botao = document.getElementById('meuBotao');

  botao.addEventListener('click', function() {
      window.location.href = 'carregar.html';
  });

  function dragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
}

function dropHandler(event) {
    event.preventDefault();

    var files = event.dataTransfer.files;
    for (var i = 0; i < files.length; i++) {
        console.log("Nome do arquivo:", files[i].name);
        console.log("Tipo do arquivo:", files[i].type);
        console.log("Tamanho do arquivo:", files[i].size, "bytes");
    }
}

function enviarArquivo() {
    alert("Seu arquivo foi enviado com sucesso!");
}