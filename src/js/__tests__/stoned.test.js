import Bowman from '../Bowman.js';
import Swordsman from '../Swordsman.js';
import Magician from '../Magician.js';
import Daemon from '../Daemon.js';
import Undead from '../Undead.js';
import Zombie from '../Zombie.js';
import Stoned from '../Stoned.js';


test('magician attack with stoned test', () => {
  const magician = new Magician('Magician');
  magician.stoned = true

  expect(magician.attack).toBe(85);
});

test('magician attack without stoned test', () => {
  const magician = new Magician('Magician');
  magician.stoned = false

  expect(magician.attack).toBe(90);
});

test('magician stoned test', () => {
  const magician = new Magician('Magician');
  magician.stoned = true

  // const correct = {
  //   name: 'Magician',
  //   type: 'Magician',
  //   health: 100,
  //   level: 1,
  //   defence: 40,
  //   attackChatacter: 100,
  //   distance: 2,
  //   stonedBollean: true,
  // }
  expect(magician.stoned).toBe(true);
});