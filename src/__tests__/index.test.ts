import { pack } from '../index';

import {resolve} from 'path';

test('example_input', async () => {

  expect(await pack(resolve(__dirname, './example_input'))).toBe('Hello');
});