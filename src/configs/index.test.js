import { getEnv } from './index';


test('get env settings and return evn value as string first',
() => {
  expect(getEnv('', 'yes')).toBe('yes')
})


