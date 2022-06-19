function palindromo(ref){
    let tamanho = ref.length;
    let i = tamanho - 1;
    let reescrita = ""
    while (i >= 0){
        reescrita += ref[i];
        i--
    } let teste = reescrita === ref;
    if(reescrita){
        console.log(`A palavra ${ref} é um palíndromo`)
    } else {
        console.log(`A palavra ${ref} não é um palíndromo`)
    }
}

palindromo("ana")

