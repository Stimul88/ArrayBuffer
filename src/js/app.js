import Bowman from './Bowman.js';
import Swordsman from './Swordsman.js';
import Magician from './Magician.js';
import Daemon from './Daemon.js';
import Undead from './Undead.js';
import Zombie from './Zombie.js';
import getBuffer from './getBuffer.js';
import ArrayBufferConverter from './ArrayBufferConverter.js';

const bowman = new Bowman('Bowman');
const swordsman = new Swordsman('Swordsman');
const magician = new Magician('Magician');
const daemon = new Daemon('Daemon');
const undead = new Undead('Undead');
const zombie = new Zombie('Zombie');
const arrayBufferConverter = new ArrayBufferConverter();



function getInfo(hero) {
  const tag = document.querySelector('body');

  const addTag = `<ul class="hero"> 
                    <li class="decimal">healt: ${hero.health}</li>
                    <li class="decimal">level: ${hero.level}</li>
                    <li class="decimal">Атака/защита:
                      <ul>
                        <li class="lower-roman"> ${bowman.type}: ${bowman.attack}/${bowman.defence }</li>
                        <li class="lower-roman"> ${swordsman.type}: ${swordsman.attack}/${swordsman.defence }</li>
                        <li class="lower-roman"> ${magician.type}: ${magician.attack}/${magician.defence }</li>
                        <li class="lower-roman"> ${undead.type}: ${undead.attack}/${undead.defence }</li>
                        <li class="lower-roman"> ${zombie.type}: ${zombie.attack}/${zombie.defence }</li>
                        <li class="lower-roman"> ${daemon.type}: ${daemon.attack}/${daemon.defence }</li>
                      </ul>
                 </ul>`

  tag.insertAdjacentHTML('beforebegin', addTag)
}



getInfo(daemon)


console.log(daemon.attack)
console.log(magician.stoned)


console.log('the app is running');


arrayBufferConverter.load(getBuffer())

console.log(arrayBufferConverter.toString())
