let caixaPecas = [];
let opcao = 's'

while (opcao == 's' || opcao == 'S') 
{
    let nomedapeca = prompt("Digite o nome da peça: ");
    if (nomedapeca.length >= 3) {
        let pesoPeca = prompt ("Digite o peso da peça (em gramas): ");
        if (pesoPeca > 100) {
            if (caixaPecas.length <= 10) {
                caixaPecas.push (nomedapeca)
                alert ("Cadastro da peça realizado com sucesso!");
                } else {
                    alert ("A caixa atingiu o limite de peças!")
                    break
                }
            } else {
                alert ("O peso da peça dever ser maior que 100 gramas!");
            }
        } else {
            alert ("O nome da peça deve possuir pelo menos 3 caracteres!")
            }
    opcao = prompt ("Deseja cadastrar uma nova peça? S / N")
    while (opcao != 'S' && opcao != 's' && opcao != 'N' && opcao != 'n') {
        alert ("Comando inválido, digite somente S ou N!")
        opcao = prompt ("Deseja cadastrar uma nova peça? S / N")
    }
}
alert(caixaPecas)
