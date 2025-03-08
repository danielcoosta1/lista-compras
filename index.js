import verificarItemLista from "./scripts/verificarItemLista.js";


const inputDigitaItem = document.getElementById("input-item");
const btnSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

let checkbox = 0;

verificarItemLista(listaDeCompras);

btnSalvarItem.addEventListener("click",(e)=>{
    
    e.preventDefault();
   

   const item = inputDigitaItem.value;
   

   listaDeCompras.innerHTML += `
        <li>
            <div class="lista-item-container">
              <input type="checkbox" id="${"checkbox-" + checkbox++}" class="input-checkbox" />
              <p class="nome-item">${item}</p>
            </div>
            <p class="texto-data">Segunda-feira (31/10/2022) às 08:30</p>
          </li>
   `;
   
   
    const inputCheckBox = document.querySelector(".input-checkbox");
    const nomeItem = document.querySelector(".nome-item");

   inputCheckBox.addEventListener("click",()=>{
    if(inputCheckBox.checked){
        nomeItem.style.textDecoration = "line-through";
    } else {
        nomeItem.style.textDecoration = "none";
    }
   })


   verificarItemLista(listaDeCompras);
   
})






