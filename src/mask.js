module.exports={
    cleanMask(value) {
        return value
        .replace(/[()]/g, '') //Substitui qualquer caracter que não seja numero ou letra por nada
    }
}