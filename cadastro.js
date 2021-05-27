var txtnome = window.document.getElementById('nome')
var txtend = window.document.getElementById('end')
var contadorPosição = 0

let clinicas = []

if(sessionStorage.contadorPosição){
    contadorPosição = Number(sessionStorage.contadorPosição)
 }else{
     contadorPosição = 0
 }

 if(sessionStorage.clinicas){
    clinicas = JSON.parse(sessionStorage.getItem("clinicas"))
 }

 console.log(clinicas)

function cadastrar(){

    if(txtnome.value.length == 0 || txtend.value.length == 0){
        alert('Por favor, preencha todos os dados')
    }else{
   
        id = getRandomIntInclusive(1000,9999)
        nome = txtnome.value
        end = txtend.value
        
        clinicas[contadorPosição] = {id,nome,end}
        contadorPosição += +1
        sessionStorage.contadorPosição = contadorPosição
        alert("Clínica cadastrada com sucesso")
        //Zera os campos e coloca o foco 
        txtnome.value = ""
        txtend.value = "" 
        txtnome.focus()       
    }}     


function mudarPagina(){
    sessionStorage.setItem("clinicas",JSON.stringify(clinicas))
    window.location.assign("visualizador.html") 
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



