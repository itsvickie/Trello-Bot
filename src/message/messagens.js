module.exports = {
    async bot(message){
        message.channel.send(`${message.author}, copie abaixo o comando desejado e substitua os campos com suas informações!\n\n**Relatórios:** !relatorios\n**Cards em Andamento:** !seunomeaqui\n**Criar um Ticket:** !ticket (Título) (Descrição)`);
    },
    async relatorios(message){
        message.channel.send(`${message.author}, olá!\nLista de Relatorios:\n\n!diarios - Relatorio Diario`);
    }
}