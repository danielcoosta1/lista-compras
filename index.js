const inputDigitaItem = document.getElementById("input-item");
const btnSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");


let checkbox = 0;




btnSalvarItem.addEventListener("click",(e)=>{
e.preventDefault();

   const item = inputDigitaItem.value;
   checkbox++;

   listaDeCompras.innerHTML += `
        <li>
            <div class="lista-item-container">
              <input type="checkbox" id="${checkbox}" />
              <p>${item}</p>
            </div>
            <p class="texto-data">Segunda-feira (31/10/2022) às 08:30</p>
          </li>
   `

})


