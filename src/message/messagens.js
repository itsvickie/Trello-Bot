module.exports = {
    async bot(message){
        message.channel.send(`${message.author}, olá!\nLista de Comandos:\n\n!relatorios - Relatórios\n!adicionar - Adicionar`);
    },
    async relatorios(message){
        message.channel.send(`${message.author}, olá!\nLista de Relatorios:\n\n!diarios - Relatorio Diario`);
    }
}