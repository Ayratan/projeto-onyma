var nometxt = window.document.getElementById('nome')
var endtxt = window.document.getElementById('end')
var emailtxt = window.document.getElementById('email')
var whatstxt = window.document.getElementById('whatsapp')
var ceptxt = window.document.getElementById('cep')
var res = window.document.getElementById('res')

var exclinico = window.document.getElementsByName('exClinico')
var excomp = window.document.getElementsByName('exComplementares')
var ppra = window.document.getElementsByName('ppra')
var pcmso = window.document.getElementsByName('pcmso')

/*
let rescli = window.document.getElementById('rescli')
let rescom = window.document.getElementById('rescom')
let respcmso = window.document.getElementById('respcmso')
let resppra = window.document.getElementById('resppra')
*/

var clinicas = {
    nome: '',
    endereço: '',
    CEP: '',
    email: '',
    whatsapp: ''
}

function cadastrar() {
   
    if(nometxt.value.length == 0 || endtxt.value.length == 0 || ceptxt.value.length== 0 ||emailtxt.value.length == 0 || whatstxt.value.length == 0) { //testa se algum dos campos está em branco
        alert('Por favor , preencha todos os dados')
    }else{
        criaClinicas(nometxt.value,endtxt.value,ceptxt.value,emailtxt.value,whatstxt.value)
        alert('Cadastro Realizado com sucesso')
        nometxt.value = '' //zera o preenchimento do box de nome até whatsapp
        endtxt.value = ''
        ceptxt.value = ''
        emailtxt.value = ''
        whatstxt.value = ''
        nometxt.focus() //deixa o cursor dentro da caixa de nome
    }    
}
 
function criaClinicas(nome,end,cep,email,whats) { //Cria uma clinica nova de acordo com o que é preenchido no formulario de cadastro
    clinicas.nome = nome
    clinicas.endereço = end
    clinicas.cep = cep
    clinicas.email = email
    clinicas.whatsapp = whats
    let item = document.createElement('option') //cria um novo item do tipo select
    item.text = `${nome}, ${end} , ${cep}, ${email} e ${whats}`
    clinicass.appendChild(item)
}