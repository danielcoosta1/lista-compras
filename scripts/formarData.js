
function formatarDataHora(){
    const data = new Date(); // Captura a data e hora atuais

    // Formata o dia da semana (ex: "Segunda-feira")
    const diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'long' });
  
    // Formata a data (ex: "31/10/2022")
    const dataFormatada = data.toLocaleDateString('pt-BR');
  
    // Formata a hora (ex: "08:30")
    const horaFormatada = data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Usar formato 24 horas
    });
  
    // Combina tudo em uma string
    return `${diaSemana} (${dataFormatada}) às ${horaFormatada}`;
}

export default formatarDataHora;