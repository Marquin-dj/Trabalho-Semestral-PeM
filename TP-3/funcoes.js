// Variavel que armazena a quantidade restante de digitações
var digitacoes = 8

// variavel usada como indice de maneira manual para inserção dos dados no vetor 'v1'
var i = 0
// Vetor para armazenar os valores digitados
var v1 = []
// Vetor para armazenar os valores positivos
var vp = []
// vetor para armazenar os valores negativos
var vn = []

var c = 0

// A cada click no botao ele executará essa função
function Processar1(){
    if(i < 8){
        // Mosrará na tag "contador" a quantidade restantes de digitações. De inicio já mostrará 8,
        // e em seguida, mostrará a mensagem "Digitações restantes" e concatena com o valor de 
        // digitações DECREMENTADO, ou seja, decrementa a variavel de fato e depois de decrementar
        // exibe ela.
        document.getElementById("contador").innerHTML = "Digitações restantes: " + --digitacoes

        // capta o valor do campo "n1"
        let valor = document.getElementById("n1").value
        // e insere no vetor, no indice de "i"
        v1[i] = valor
        // incrementa "i" para que na proxima clicada no botao, insira em uma posição acima da anterior
        i++
        // as 2 linhas acima poderia ser feita assim= v1[i++] = valor, pois ele insere na posição de i
        // e depois INCREMENTA

        // aqui apenas limpa o campo do input
        document.getElementById("n1").value = null

        // IMPORTANTE
        // quando i for == 8, ou seja, na ultima execução, ele executa a função Processar() forçadamente aqui mesmo, pra nao ter
        // que digitar dnv
        if (i == 8){
            Processar1()
        }
        
    }else if (i == 8){
        // i++ pra nao executar mais nada após o click, ou seja, i valerá 9 e nao entrará em nenhum dos if, nao fznd nada
        i++
        //-------------------------------------------------
        // acima daqui é toda a parte de entrada de dados, porém o usuario só pode entrar com 8 valores
        // Então por causa disso tem esse if(i < 8)
        // quando i for igual a 8, significa que o usuario digitou os 8 numeros e então cairá no else que só executará uma vez!.

        // agora um for para carregar os vetores positivo e negativo (vp e vn)
        for(var j = 0; j < 8; j++){
            // verificação de positivo e negativo
            if(v1[j] < 0){
                // se for negativo:
                vn.push(v1[j])
            }else{
                // se for 0 ou positivo:
                vp.push(v1[j])
            }
        }
        // exibição do vetor positivo
        document.getElementById("resposta").innerHTML += "Valores positivos: " + vp.toString() + "<br><br>"
        // exibição do vetor negativo
        document.getElementById("resposta").innerHTML += "Valores negativos: " + vn.toString() + "<br><br>"
    }
    
    
    
}

function Processar2(){
    
    if(i < 8){
    document.getElementById("contador").innerHTML = " Entradas restantes: " + --digitacoes

    let valor = Number(document.getElementById("n1").value)

    v1[i] = valor

    i++

    document.getElementById("n1").value = null

    if(i == 8){
        Processar2()
    }

    }else if(i == 8){

        i++

        for(var j = 0; j < 8; j++){
            if(v1[j] < 50){
                c++

            }
                vp.push(v1[j])

                       
        }
        if(c == 8){
            document.getElementById("resposta").innerHTML = "Não há valores superiores a 50"
        }else{
            for(var l = 0; l < vp.length;l++){
                if(vp[l] > 50){
                    document.getElementById("resposta").innerHTML += "Valor superior a 50: " + vp[l]+ ", na posição: " + l +"<br>"
        }
    }
    }
    }
}

