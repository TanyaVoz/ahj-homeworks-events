export default class LogicGame {
  constructor() {
    this.lossClickGoblin = 0;
    this.hitClickGoblin = 0;
  }

  goblinClick() {
    if (this.lossClickGoblin === 5) {
        alert(`Вы проиграли ! \n\nПопаданий: ${this.hitClickGoblin} \nПромахов: ${this.lossClickGoblin}`); 
      this.lossClickGoblin = 0;
    }
  }
}
