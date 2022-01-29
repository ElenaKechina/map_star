import Settings from '../app';

describe('Class Settings:', () => {
  const settings = new Settings();

  // beforeEach(() => {
  //   team = new Team();
  // });

  test('should return settings', () => {
    let obj = {
      theme: 'dark',
      music: 'trance',
      difficulty: 'easy',
    };

    let result = new Map(Object.entries(obj));

    expect(settings.settings).toEqual(result);

    settings.setSetting(['music', 'chillout']);

    obj = {
      theme: 'dark',
      music: 'chillout',
      difficulty: 'easy',
    };

    result = new Map(Object.entries(obj));

    expect(settings.settings).toEqual(result);
  });

  test('should return Error', () => {
    expect(() => settings.setSetting(['music', 'Leps'])).toThrow();
    expect(() => settings.setSetting(['test', 'test'])).toThrow();
  });
});
