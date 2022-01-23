let areaconteudo = document.getElementById("conteudo")
let input = document.getElementById("criarAmpulheta")
let graosDeAreia = 0

function graosDaAmpulheta(){
    graosDeAreia = Number(input.value)
    areaconteudo.innerHTML = ""
    if(graosDeAreia < 20) {
        alert('Colocar um valor acima de 20')
        return
    }else{
        exibirAmpulhetas(graosDeAreia)
        console.log(graosDeAreia)
    }
}

function exibirAmpulhetas(n) {

    let html = "";
    let contador = 0;
    
    for (let i = 0; i <= n; i++) {
       
        contador++
        if(i == 0){
            html +=`<pre>${"#".repeat(n)}</pre>`
        }else if(i == 1){
            html +=`<pre>#${"#" +" ".repeat(n-4)}##</pre>`
        }else if(i ==2){
            html +=`<pre># ${"#" +" ".repeat(n-4-i)}# #</pre>`
        }else if(contador%2==0 && contador < n-3){
            html +=`<pre>#${" ".repeat((contador/2)) + "#" + " ".repeat(n-4-contador)+"#"+ " ".repeat((contador/2))}#</pre>`
        }
             
    }

    for (let i = n; i>=0; i--){
        contador--
        if(i == 0){
            html +=`<pre>${"#".repeat(n-i)}</pre>`
        }else if(i == 1){
            html +=`<pre>${"#".repeat(n)}</pre>`
        }else if(i ==2){
            html +=`<pre># ${" ".repeat((i/2)-1) + "#".repeat(n-i-2)} #</pre>`
        }else if(i%2==0 && i < n-3){
            html +=`<pre>#${" ".repeat((contador/2)) + "#".repeat((n-contador-2))+ " ".repeat((contador/2))}#</pre>`
        }
    }
    
    let ampulheta2 = document.getElementById("conteudo")
    ampulheta2.innerHTML = html	
}
