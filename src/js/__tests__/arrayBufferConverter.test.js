import getBuffer from '../getBuffer.js';
import ArrayBufferConverter from '../ArrayBufferConverter.js';

const arrayBufferConverter = new ArrayBufferConverter();

arrayBufferConverter.load(getBuffer())


test('arrayBuffer test', () => {
  const correct = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
  expect(arrayBufferConverter.toString()).toEqual(correct);
});