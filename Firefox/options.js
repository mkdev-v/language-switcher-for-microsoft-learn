function Save() {
  try {
    const lang = document.getElementById("lang").value;
    const enableNewTab = document.getElementById("enableNewTab").checked;

    browser.storage.local.set(
      {
        "usersettings":
        {
          "lang": lang,
          "enableNewTab": enableNewTab
        }
      }
    );

    alert("Saved Successfully!")
  } catch (e) {
    console.log(e.message);
  }
}

function Load() {
  const defaultLang = "ja-jp"
  const defaultEnableNewTab = true;

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

    document.getElementById("lang").value = lang;
    document.getElementById("enableNewTab").checked = enableNewTab;
  });
}

document.addEventListener("DOMContentLoaded", Load);
document.getElementById("saveBtn").addEventListener("click", Save);