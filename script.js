const btn = document.querySelector(".btn")

const [input1, input2] = document.querySelectorAll("input")

function alterar (){
 if(input1.value && input2.value.length >= 8){
btn.removeAttribute("disable")
btn.classList.add("ativo")

}else{
    btn.setAttribute("disable","disable")
    btn.classList.remove("ativo")
}
}

input2.addEventListener("input",alterar)
