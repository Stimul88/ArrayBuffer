import Character from './Character.js';

export default class Stoned extends Character{
  constructor(name, type) {
    super(name, type);
    // this.distance = 1;
    // this.attackChatacter = 0;
    // this.stonedBollean = false;
  }

  get attack() {
    const damageObj = {
      '5': 60,
      '4': 70,
      '3': 80,
      '2': 90,
      '1': 100,
    }
    if (this.stonedBollean) {
      return Math.round(this.attackChatacter * damageObj[this.distance]/100 - Math.log2(this.distance) * 5);
    } else {
      return this.attackChatacter * damageObj[this.distance]/100;
    }
  }

  set attack(attack) {
    this.attackChatacter = attack;
  }

  get stoned() {
    return this.stonedBollean
  }

  set stoned(stoned) {
    this.stonedBollean = stoned;
  }
}