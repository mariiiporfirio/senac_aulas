//funções

function minhaFuncao(){
    console.log("Teste de Função");
    }
    
    minhaFuncao();
    minhaFuncao(); //reaproveitamento
    
    //Função na variável
    const minhaFuncaonaVariavel = function(){
        console.log("Teste de função na variável");
    }
    
    minhaFuncaonaVariavel();
    
    //Função por parâmetro
    function funcaonoParametro(txt){
        console.log(`Exibindo ${txt}`);
    }
    
    funcaonoParametro("Teste de Função no Parâmetro");
    
    
    //return
    const a = 5;
    const b = 6;
    const c = 10;
    const d = 40;
    
    function soma(n1, n2){
        return n1 + n2;
    }
    
    const resultado = soma (a,b);
    console.log(resultado);
    
    console.log(soma(c,d));
    
    //escopo aninhado
    let m = 15;
    
    function escopoAninhado(){
        let m = 30;
    
        if(true){
            let m = 35;
    
            if(true){
                let m = 40;
                console.log(m);
            }
    
            console.log(m);
        }
        console.log(m);
    }
    
    escopoAninhado();
    console.log(m);
    
    //arrow function
    const quadrado = (numero) => numero * numero;
    
    console.log(quadrado(5));
    
    //mais uma arrow function
    const raizQuadrada = (x) => {
        return x * x;
    }
    
    console.log(raizQuadrada(4));
    
    
    const raizQuadrada2 = (x) => x * x;
    console.log(raizQuadrada2(5));
    console.log(raizQuadrada2(12));