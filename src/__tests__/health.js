import caracterHealth from '../character_health';

test.each([
  { name: 'Маг', health: 90, expected: 'healthy' },
  { name: 'Дракон', health: 45, expected: 'wounded' },
  { name: 'Злодей', health: 5, expected: 'critical' },
])(
  ('determine level of health for %s name with %i value'),
  ({ name, health, expected }) => {
    const result = caracterHealth({ name, health });
    expect(result).toBe(expected);
  },
);
