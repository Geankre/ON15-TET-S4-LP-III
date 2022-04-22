let data = [
    {
      titulo: "us",
      genero: "terror",
      ano: "2019", 
    },
    {
      titulo: "transformers: O Lado Oculto da Lua",
      genero: ["ação", "sci-fi"],
      ano: "2011", 
    },
    {
      titulo: "moonfall - ameaça lunar",
      genero: ['Aventura', "sci-fi"],
      ano: "2022", 
    },
    {
      titulo: "casa gucci",
      genero: "drama",
      ano: "2021", 
    },
    {
      titulo: "encanto",
      genero: ["animação", "musical"],
      ano: "2021", 
    },
    {
      titulo: "Demon Slayer - Mugen Train",
      genero: ["ação", "fantasia"],
      ano: "2019", 
    },
    {
      titulo: "O Último Suspiro",
      genero: ["drama", "sci-fi"],
      ano: "2019", 
    },
    {
      titulo: "Suspiria",
      genero: "terror",
      ano: "1977", 
    },
    {
      titulo: "Corpo Elétrico",
      genero: ["drama", "ficção"],
      ano: "2017", 
    },
    {
      titulo: "Amour",
      genero: ["drama", "romance"],
      ano: "2012", 
    },
    {
      titulo: "Ninho de Musaranho",
      genero: "terror",
      ano: "2014", 
    },
    {
      titulo: "Colonia",
      genero: "suspense",
      ano: "2015", 
    },
    {
      titulo: "Homem-Aranha: Sem Volta para Casa",
      genero: ["ação", "aventura"],
      ano: "2021", 
    }]

    function buscarFilmes (dadosDeEntrada) {
        if (typeof(dadosDeEntrada) == "string"){

            let buscarPorTitulo = data.filter(itemTitulo => 
                itemTitulo.titulo.toLowerCase().includes(dadosDeEntrada.toLowerCase())
            )

            let buscarPorGenero = data.filter(itemGenero => 
                itemGenero.genero.includes(dadosDeEntrada.toLowerCase())
            )

            if(buscarPorTitulo != 0 && buscarPorGenero != 0) {
                console.log(">>>>>>>>>> Filmes encontrados por título <<<<<<<<<<")
                console.log(buscarPorTitulo)
                console.log("--------------------------------------")
                console.log(">>>>>>>>>> Filmes encontrados por gênero <<<<<<<<<<")
                console.log(buscarPorGenero)
                console.log("--------------------------------------")
            } else if (buscarPorTitulo != 0) { //fiquei na dúvida aqui, não funcionou com >0 e teoricamente não é a mesma coisa que !=0 ?
                console.log(">>>>>>>>>> Filmes encontrados por título <<<<<<<<<<")
                console.log(buscarPorTitulo)
                console.log("--------------------------------------")
            } else if (buscarPorGenero != 0) {
                console.log(">>>>>>>>>> Filmes encontrados por gênero <<<<<<<<<<")
                console.log(buscarPorGenero)
                console.log("--------------------------------------")
            } else {
                console.log("Não foi encontrado no catálogo nenhum filme ou dado com o valor digitado")
            }    
        } else {
            console.log('Dado inválido')
        }
    }
    
    
    buscarFilmes("susp")