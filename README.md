# Ancient Runes Translator

The "ancient-runes-translator" library offers a simple and efficient way to translate modern English alphabets into ancient runic alphabets. Whether you're looking to add some mystical flair to your project or studying ancient scripts, this library has got you covered.

## Features

- **Easy to use**: Designed with simplicity in mind, translating text is straightforward.
- **Comprehensive**: Includes a wide range of characters, from basic alphabets to punctuation.
- **Dependency**: Utilizes Lodash for optimized string manipulation.

## Installation

To install the library, run the following command in your project directory:

```bash
npm install ancient-runes-translator
```

## Usage

Import the `AncientRunesTranslator` class from the library, create an instance, and use the `translateToRunes` method to translate your text.

Example:

```javascript
import AncientRunesTranslator from 'ancient-runes-translator';

const translator = new AncientRunesTranslator();
const text = "Hello, World!";
const translatedText = translator.translateToRunes(text);

console.log(translatedText); // Output will be the translated runes
```

## API

### `translateToRunes(text: string): string`

Translates the input text to ancient runes. The method accepts a string and returns the translated string in runes. Unrecognized characters are left unchanged.

## Contributing

Contributions to "ancient-runes-translator" are welcome. Please feel free to open an issue or pull request on our GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
