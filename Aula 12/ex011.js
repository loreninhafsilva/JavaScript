        var idade = 17;
        if (idade < 16){
            console.log('Não vota');
        } else {
            if(idade < 16 || idade > 68){
                console.log('Voto opcional');
            } else{
                console.log('Voto obrigatório')
            }
        }