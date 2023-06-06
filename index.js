const pacients = ["Letícia", "Murillo", "Victor"];
    
for(let i = 0; i < pacients.length; i++){
    let list = pacients[i]
    alert("Paciente Número: "+ i + " " + list)
}

let menu = prompt("Menu interativo, escolha uma opção: " + "\n\n" +
            "1 - Novo Paciente" + "\n" +
            "2 - Consultar Paciente" + "\n" +
            "3 - Sair"
)

switch (menu){
    case "1":
        let pacient = prompt("Digite o nome do paciente: ")
        pacients.push(pacient)
        break
    case "2":
        alert("Paciente " + pacients[0])
        pacients.shift()
    case "3":
        alert("Encerrando...")
        break
}


