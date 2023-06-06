let row = []
let option = "" 

do{
    let pacients = ""
    for(let i = 0; i < row.length; i++){
        pacients += (i + 1) + "º - " + row[i] + "\n"
    }        
    option = prompt(
        "Pacientes: " + "\n" +
        pacients + "\n" + 
        "Escolha uma ação: " + "\n" + 
        "1 - Cadastrar Paciente" + "\n" +
        "2 - Consultar Pacientes" + "\n" +
        "3 - Sair"
    )

    switch(option){
        case "1":
            const newPacient = prompt("Qual o nome do paciente?")
            row.push(newPacient)
            break
        case "2":
            let consultPacient = row.shift()
            alert(consultPacient + " Foi removido da fila")
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida")
    }
        
} while (option !== "3")






