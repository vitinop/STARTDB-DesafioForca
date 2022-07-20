class Forca {
  constructor(palavraRandom) {
    this.letrasChutadas = [];
    this.letrasCorretas = [];
    this.letrasErradas = [];
    this.vidas = 6;
    this.palavraRandom = palavraRandom;
    this.palavraOculta = [];
  }

  chutar(letra) {
    const letraTratada = letra.toLowerCase();
    if (!this.isCaracterValido(letraTratada)) {
      return console.log("Você insiriu um ou mais cateres inválidos. \n  Tente novamente inserindo apenas uma letra")
    }
    if (this.letrasChutadas.includes(letraTratada)) {
      return console.log("A Letra já foi inserida, insira outro caracter")
    }
    if (this.palavraRandom.includes(letraTratada)) {
      this.letrasCorretas.push(letraTratada)
      this.letrasChutadas.push(letraTratada)
    } else {
      this.vidas -= 1
      this.letrasErradas.push(letraTratada)
      this.letrasChutadas.push(letraTratada)
    }
  }

  isCaracterValido(input) {
    return input.length === 1 && input.match(/[a-z]/i);
  }

  buscarEstado() {
    if (this.palavraOculta.join("") === this.palavraRandom) {
      return "ganhou"
    }
    if (this.vidas > 0) {
      return "aguardando chute"
    } else {
      return "perdeu"
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    const palavra = this.palavraRandom.split("")
    this.palavraOculta = palavra.map(letra => {
      if (this.letrasCorretas.includes(letra)) {
        return letra
      }
      return "_"
    })
    return {
      letrasErradas: this.letrasErradas,
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavraOculta // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;