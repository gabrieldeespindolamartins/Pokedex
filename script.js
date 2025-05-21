const botaoBuscar = document.getElementById("botao-buscar")
const campoEntrada = document.getElementById("entrada")

//evento ao clicar
botaoBuscar.addEventListener("click", async () => {
    const busca = campoEntrada.value.toLowerCase().trim();
    if(!busca) return;
    try{
        // faz a req
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${busca}`);
        if(!resposta.ok) throw new  Error('Pokemon nao encontrado')
            
        //    converter em JSON
        const dados = await resposta.json();

        document.getElementById('nome').textContent = dados.name;
        document.getElementById('numero').textContent = `#${dados.id}`;
        document.getElementById('imagem').src = dados.sprites.front_default;

    } catch (erro){
        alert(erro.message)
    }
});