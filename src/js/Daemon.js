import Stoned from './Stoned.js';

export default class Daemon extends Stoned {
  constructor(name) {
    super(name, 'Daemon');
    this.stoned = true;
    this.attack = 100;
    this.defence = 40;
    this.distance = 5;
  }
}