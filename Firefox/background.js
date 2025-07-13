const PARENT_MENU_ID = "language-switcher-root";
const MENU_TITLE = "Language Switcher";

function switchLangCode(tabUrl) {
  var url = new URL(tabUrl);
  const defaultLang = "ja-jp"
  const defaultEnableNewTab = true;

  if (url.href.includes("://learn.microsoft.com/")) {
    browser.storage.local.get("usersettings").then(result => {
      let lang;
      let enableNewTab;

      if (result.usersettings !== undefined) {
        const usersettings = result.usersettings;

        lang = usersettings.lang === undefined
          ? defaultLang
          : usersettings.lang;

        enableNewTab = usersettings.enableNewTab === undefined
          ? defaultEnableNewTab
          : usersettings.enableNewTab;

      } else {
        lang = defaultLang;
        enableNewTab = defaultEnableNewTab;
      }

      if (url.pathname.indexOf("/" + lang) == 0) {
        var reg = new RegExp("/" + lang);
        url.pathname = url.pathname.replace(reg, "/en-us");
      } else {
        url.pathname = url.pathname.replace(/\/[a-z][a-z]-[a-z][a-z]/, "/" + lang);
      }

      if (enableNewTab) {
        browser.tabs.create({
          url: url.href
        });
      }
      else {
        browser.tabs.update({
          url: url.href
        });
      }
    });
  }
}

browser.runtime.getPlatformInfo().then(info => {
  if (info.os === "android") {
    browser.contextMenus.create({
      id: "mobile-switch-language-code",
      title: "Switch Language Code",
      documentUrlPatterns: ["*://learn.microsoft.com/*"]
    });
  } else {
    browser.contextMenus.create({
      id: PARENT_MENU_ID,
      title: MENU_TITLE,
      documentUrlPatterns: ["*://learn.microsoft.com/*"]
    });

    browser.contextMenus.create({
      id: "switch-language-code",
      parentId: PARENT_MENU_ID,
      title: "Switch Language Code",
      contexts: ["all"]
    });

    browser.contextMenus.create({
      id: "separator-1",
      parentId: PARENT_MENU_ID,
      type: "separator",
      contexts: ["all"]
    });

    browser.contextMenus.create({
      id: "open-options",
      parentId: PARENT_MENU_ID,
      title: "Options",
      contexts: ["all"]
    });
  }
});

browser.action.onClicked.addListener((tab) => {
  switchLangCode(tab.url);
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open-options") {
    browser.runtime.openOptionsPage();
    return;
  }

  if (info.menuItemId === "switch-language-code") {
    switchLangCode(tab.url);
    return;
  }

  if (info.menuItemId === "obile-switch-language-code") {
    switchLangCode(tab.pageUrl);
    return;
  }
});