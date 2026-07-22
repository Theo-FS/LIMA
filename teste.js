function jogoadivinhar() {
    let seu_animal = "";
    let animal_correto = "leão";

    // Usa != para comparar se é diferente
    while (seu_animal != animal_correto) {
        seu_animal = prompt("Digite seu animal aqui: ").toLowerCase();

        if (seu_animal == animal_correto) {
            console.log("Boaaa! Você acertou!");
        } else {
            console.log("O loop segue, vai tentando!");
        }
    }
}

jogoadivinhar();