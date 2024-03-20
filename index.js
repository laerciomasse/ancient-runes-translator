import _ from 'lodash';

class AncientRunesTranslator {
  constructor() {
    this.runeAlphabet = {
      'a': 'ᚨ', 'b': 'ᛒ', 'c': 'ᚲ', 'd': 'ᛞ', 'e': 'ᛖ',
      'f': 'ᚠ', 'g': 'ᚷ', 'h': 'ᚺ', 'i': 'ᛁ', 'j': 'ᛃ',
      'k': 'ᚲ', 'l': 'ᛚ', 'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᛟ',
      'p': 'ᛈ', 'q': 'ᛩ', 'r': 'ᚱ', 's': 'ᛋ', 't': 'ᛏ',
      'u': 'ᚢ', 'v': 'ᚹ', 'w': 'ᚹ', 'x': 'ᛪ', 'y': 'ᛦ', 'z': 'ᛎ',
      ' ': ' ', '.': '᛫', ',': '᛬', '?': '᛭', '!': 'ᛮ'
    };
  }

  translateToRunes(text) {
    return _.chain(text)
      .toLower()
      .split('')
      .map(char => this.runeAlphabet[char] || char)
      .join('')
      .value();
  }
}

export default AncientRunesTranslator;
