fetchExtensionId();
fetchCookiesViaExtension();
updateCookies();

async function fetchExtensionId() {
  try {
    chrome.runtime.sendMessage(
      "jdeppenejblgegpfgdmndabjeccdabhk",
      {
        message: "msg_fetch_extensionId",
      },
      (res) => {
        if (res && res.extensionId) {
          document.querySelector(
            "#extensionId"
          ).innerHTML = `Extension ID is ${res.extensionId}`;
          return res.extensionId;
        }
      }
    );
  } catch (err) {
    console.log("Error fetching extensionId:", err);
  }
}

function removeExtensionAccount(account) {
  try {
    chrome.runtime.sendMessage(
      "jdeppenejblgegpfgdmndabjeccdabhk",
      {
        message: "msg_remove_account",
        account_uid: account.uid,
      },
      (res) => {}
    );
  } catch (err) {}
}

async function fetchCookiesViaExtension() {
  try {
    chrome.runtime.sendMessage(
      "jdeppenejblgegpfgdmndabjeccdabhk",
      {
        message: "msg_fetch_cookies",
        integration: "linkedin",
        requestedCookies: { li_at: null, li_a: null },
        cookies: {},
        baseUrl: "https://www.linkedin.com/",
        account_uid: "b86f2078-dbc9-4b29-a504-d3bbdd3c13fb",
      },
      async (res) => {
        let msg = "";
        if (res) {
          if (res.cookies) {
            msg = JSON.stringify(res.cookies);
          } else if (res.error) {
            msg = res.error;
          }
        } else {
          msg = JSON.stringify(res);
        }

        return (document.querySelector("#linkedin").innerHTML = msg);
      }
    );
  } catch (err) {
    console.log("Error fetching cookies:", err);
  }
}

async function updateCookies() {
  try {
    chrome.runtime.sendMessage(
      "jdeppenejblgegpfgdmndabjeccdabhk",
      {
        message: "msg_update_cookies",
      },
      async (res) => {
        let msg = "";
        if (res) {
          if (res.success) {
            msg = JSON.stringify(res);
          } else if (res.error) {
            msg = res.error;
          }
        } else {
          msg = JSON.stringify(res);
        }

        return (document.querySelector("#update").innerHTML = msg);
      }
    );
  } catch (err) {
    console.log("Error updating cookies:", err);
  }
}
