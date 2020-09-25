# Serverless Text Snippets

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Paypal](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.me/GuepardoApps)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

 A simple HTML website to visualize frequently used text snippets, store them in json format and easily copy them to the clipboard. All without a server.

## Screenshots

| Light | Dark |
| ----- | ---- |
| ![light](./screenshots/light.jpg) | ![dark](./screenshots/dark.jpg) |

## Usage

- Clone this into your preferred folder/directory
- open the website by double clicking on index.html
    - this opens your default browser (IE and Firefox are not supported)
- if you want to change some entries, edit the file `snippets.js`

```javascript
const snippets = [
  {
    "Project": "An awesome project",
    "Tag": "Out of office note",
    "Value": "Dear customers, unfortunately I am out of office until 31.12.2020. Your mails will not be read. Regards Jonas Schubert"
  },
  {
    "Project": "Internal project",
    "Tag": "Out of office note",
    "Value": "Dear colleagues, I am out of office until 31.12.2020. Regards Jonas Schubert"
  },
  {
    "Project": "Another new project",
    "Tag": "Another new tag",
    "Value": "Another new value"
  }
]
```

## Contributors

| [<img alt="JonasSchubert" src="https://avatars0.githubusercontent.com/u/21952813?v=4&s=117" width="117"/>](https://github.com/JonasSchubert) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
| [Jonas Schubert](https://github.com/JonasSchubert) |

## License

Text Snippets is distributed under the MIT license. [See LICENSE](LICENSE) for details.

```
MIT License

Copyright (c) 2020 Jonas Schubert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
