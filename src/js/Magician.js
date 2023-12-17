import Stoned from './Stoned.js';

export default class Magician extends Stoned {
  constructor(name) {
    super(name, 'Magician');
    this.stoned = false;
    this.attack = 100;
    this.defence = 40;
    this.distance = 2;
  }
}