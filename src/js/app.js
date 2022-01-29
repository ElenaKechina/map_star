const DEFAULT_SETTINGS = {
  theme: 'dark',
  music: 'trance',
  difficulty: 'easy',
};

const ALLOWED_WALUES = {
  theme: ['dark', 'light', 'gray'],
  music: ['trance', 'pop', 'rock', 'chillout', 'off'],
  difficulty: ['easy', 'normal', 'hard', 'nightmare'],
};

class Settings {
  constructor() {
    this.defaultSettings = new Map(Object.entries(DEFAULT_SETTINGS));
    this.userSettings = new Map();
  }

  setSetting([key, value]) {
    if (!ALLOWED_WALUES[key].includes(value)) {
      throw new Error('Недопустимое значение параметра');
    }

    this.userSettings.set(key, value);
  }

  get settings() {
    const resultSettings = new Map(this.defaultSettings);

    this.userSettings.forEach((value, key) => {
      resultSettings.set(key, value);
    });

    return resultSettings;
  }
}

export default Settings;
