# 🔎 WhatsOnThisSite

⚠️ _This is still a work in progress_ ⚠️

An NPM package enabling the quick, easy, and reliable detection of technologies on a website.

Just like Wappalyzer, it uses a long list of [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to identify technologies on web pages. WhatsOnThisSite inspects HTML code, JavaScript variables, response headers, and more!

---

## Background

[Wappalyzer](https://www.wappalyzer.com/) is the main inspiration behind this project. You will see much of the core logic comes from their open source repository before it was deleted.

_I felt like [AliasIO](https://github.com/AliasIO) taking [Wappalyzer](https://www.wappalyzer.com/) private was a great move on their part (💰) but it left a gap in the ecosystem. #NothingGoodLastsForever_

---

## Prerequisites

- A computer with an entry level understanding of JavaScript 🤣
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) version 18 or higher
- [NPM](https://www.npmjs.com) or [Yarn](https://yarnpkg.com)

## Installation

```
git clone https://github.com/SundownProjects/WhatsOnThisSite.git --recurse-submodules
cd WhatsOnThisSite
npm i
```

## Usage

### Example

An example can be found under `example.js` in the root directory.

### Events

Listen to events with `site.on(eventName, callback)`. Use the `page` parameter to access the Puppeteer page instance ([reference](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#class-page)).

| Event      | Parameters                                                                                  | Description                              |
| ---------- | ------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `log`      | `message`, `source`                                                                         | Debug messages                           |
| `error`    | `message`, `source`                                                                         | Error messages                           |
| `request`  | `page`, `request`                                                                           | Emitted at the start of a request        |
| `response` | `page`, `request`                                                                           | Emitted upon receiving a server response |
| `goto`     | `page`, `url`, `html`, `cookies`, `scriptsSrc`, `scripts`, `meta`, `js`, `language` `links` | Emitted after a page has been analyzed   |
| `analyze`  | `urls`, `technologies`, `meta`                                                              | Emitted when the site has been analyzed  |

### Updating Definitions

```
git submodule update --init --recursive
```

---

## A Note For Hackers

While I can't stop you, I hope whoever uses this program with malicious intent steps on a lego barefoot every time they use it.
