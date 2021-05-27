let clinicas = []

function ordem(){
            clinicas.sort(comparar)
            let li = document.getElementsByTagName("li")
            let ul = document.getElementsByTagName("ul")
            var contadorul = 0
            var contadoril = 0
            for( var i = 0; i < clinicas.length;i++){
                var clin = clinicas[i]
                for(var f in clin){
                    pased =`${f}: ${clin[f]}`             
                        if(f == 'id'){ 
                            ul[contadorul].innerHTML = pased
                            contadorul = contadorul +1            
                        }  
                        else {
                            li[contadoril].innerHTML = pased
                            contadoril = contadoril +1
                        }
                    }
                }
    }
            
function inicia(){
        clinicas = JSON.parse(sessionStorage.getItem("clinicas"))
        mostrarClinicas()
    }
    window.addEventListener("load",inicia)

function mudarPagina(){
    window.location.assign("cadastro.html") 
    /* Faz com quem o contador fosse visto de forma persistente  e mantido na storage para acesso futuro em outra página    
    var contadorPosição = Number(sessionStorage.contadorPosição)
    sessionStorage.contadorPosição = contadorPosição + 1
    */
}

function comparar(a, b){
        console.log(a)
        console.log(b)
        console.log(clinicas)
        if( a.nome < b.nome) return -1;
    else return 0;
    }
    
  function mostrarClinicas(){
    for( var i = 0; i < clinicas.length;i++){
        var clin = clinicas[i]
        for(var f in clin){
            var listaClinicas = document.getElementById('listaClinicas')
            pased =`${f}: ${clin[f]}`
                if(f == 'id'){ 
                    var criaul = document.createElement("ul")
                    criaul.appendChild(document.createTextNode(pased))
                    listaClinicas.appendChild(criaul)   
                }  
                else {
                    var criali = document.createElement("li")
                    criali.appendChild(document.createTextNode(pased))
                    listaClinicas.appendChild(criali)
                }
            }
        }
    }