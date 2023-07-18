import { pack } from '../index';
import { resolve } from 'path';

test('example_input', async () => {
  expect(await pack(resolve(__dirname, './fixtures/example_input'))).toStrictEqual([4, 3, 1]);
});

test('should throw an error if capacity is < 0', async () => {
  expect(async () => await pack(resolve(__dirname, './fixtures//invalid_input'))).rejects.toThrow('APIException');
});

test('should throw an error if no. of weights are not equal to number of costs', async () => {
  expect(async () => await pack(resolve(__dirname, './fixtures//invalid_input'))).rejects.toThrow('APIException');
});
