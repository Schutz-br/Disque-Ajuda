function ligar() {
    let op, result;
    op = parseInt(document.getElementById("sel").value);

    switch (op) {
        case 1:
            result = "Disque 190 para acionar a Polícia Militar"; break;
        case 2:
            result = "Disque 193 para acionar os Bombeiros"; break;
        case 3:
            result = "Disque 192 para acionar o SAMU"; break;
        case 4:
            result = "Disque 199 para acionar a Defesa Civil"; break;
        case 5:
            result = "Disque 197 para acionar a Polícia Civil"; break;
        case 6:
            result = "Disque (21) 2332-2924 para acionar a Delegacia do Turista (DEAT)"; break;
        case 7:
            result = "Disque (21) 2253-1177 para acionar o Disque Denúncia"; break;
        case 8:
            result = "Disque 180 para acionar a Central de Atendimento à Mulher"; break;
        case 9:
            result = "Disque 100 para acionar os Direitos Humanos"; break;
        case 10:
            result = "Disque 151 para acionar o Procon"; break;
        case 11:
            result = "Disque (21) 2332-8611 para acionar o HemoRio"; break;
        case 12:
            result = "Disque (21) 3460-4040 para acionar o Detran"; break;
        case 13:
            result = "Disque (21) 2334-7910  para acionar o Disque Ambiente"; break;
        default:
            alert("Opção inválida!"); break;
    }
    document.getElementById("res").innerText = result;
}