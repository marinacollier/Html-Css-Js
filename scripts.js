function addItem() {
  var novoItem = document.getElementById("novo-item");
  
  if (novoItem.value.trim() != "") {
    var item = document.createElement("li");

    item.innerText = novoItem.value.toUpperCase();
    document.getElementById("lista-itens").appendChild(item);
  } else {
    alert("Informe o novo item a ser adicionado!");
  }

  novoItem.value = "";
}

function ordenarItens() {
  var itens = document.getElementById("lista-itens").getElementsByTagName("li");
  var lista = [];

  for (var i = 0, total = itens.length; i < total; i++) {
    lista.push(itens[i].innerText);
  }

  lista.sort();
  
  for (var i = 0, total = itens.length; i < total; i++) {
    itens[i].innerText = lista[i];
  }
}

function onLoadExemplo2() {
  var icones = document.getElementsByClassName("icon-delete");

  for (var i = 0, total = icones.length; i < total; i++) {
    icones[i].addEventListener('click', function() {
      this.parentElement.parentElement.remove();
    }, false);
  }
}

function onLoadExemplo3() {
  document.getElementById("imagem-esquerda").addEventListener("click", function () {
    document.getElementById("imagem-direita").appendChild(
      this.getElementsByClassName("box-imagem")[0]
    );
  }, false);
}
