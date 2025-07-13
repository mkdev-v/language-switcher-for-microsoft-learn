# language-switcher-for-microsoft-learn
Language Switcher for Microsoft Learn Chrome and Firefox extension.  
**Language Switcher for Microsoft Learn** is a browser extension that allows users to quickly switch languages on [Microsoft Learn](https://learn.microsoft.com/) pages.  
It supports Chrome, Edge (via Chrome Web Store), and Firefox (including Firefox for Android).

## 🚀 Features

- Quickly switch language on Microsoft Learn pages.
- Supported on Chrome / Edge (via Chrome Web Store) and Firefox (including mobile).
- Activated via the extension icon or context menu.
- Rewrites the language code in the URL (e.g., `en-us` → `ja-jp`) and redirects.
- If a page in a non-`en-us` language is opened, it automatically redirects to `en-us`.
- You can configure a target language to switch to from `en-us`.
  - Supported languages:
    - `ja-jp` (Japanese)
    - `zh-tw` (Traditional Chinese)
    - `ko-kr` (Korean)
    - `fr-fr` (French)
    - `ru-ru` (Russian)
    - `uk-ua` (Ukrainian)
- You can choose whether to open the new page in a **new tab** or replace the **current tab**.
- All settings are saved using the `storage` API.
- Works only on the domain `learn.microsoft.com`.
- This extension does not provide translation — it only switches between Microsoft's localized pages.

## 📦 Compatibility

| Browser   | Desktop | Mobile |
|-----------|---------|--------|
| Chrome    | ✅      | ❌     |
| Edge      | ✅      | ❌     |
| Firefox   | ✅      | ✅     |

> Note: Firefox for Android does not support context menu submenus. On mobile, only flat menus work.

## 📄 License

MIT License

## 🌐 Others

- Firefox Web Store: https://addons.mozilla.org/ja/firefox/addon/mymenu/
- Chrome Web Store: https://chromewebstore.google.com/detail/mymenu+/pboachocjagcpkcjapgdpjbkfogebied
