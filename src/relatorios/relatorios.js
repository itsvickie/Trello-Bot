module.exports = {
    async diario(message){
        return message.channel.send(`${message.author}, copie abaixo o relatório e substitua os campos com suas informações!\n\n**RELATÓRIO DIÁRIO - {SEU NOME}**\n• O que foi feito?\n• Dificuldades?\n• Ajuda?`);
    }
}