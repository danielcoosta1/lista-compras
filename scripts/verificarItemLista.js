const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarItemLista(listaDeCompras){
    const listaDeComprasArray = listaDeCompras.querySelectorAll("li");
    if(listaDeComprasArray.length === 0){
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}


export default verificarItemLista;