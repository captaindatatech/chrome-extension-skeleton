fetchExtensionId();
fetchCookiesViaExtension();

async function fetchExtensionId() {
  try {
    chrome.runtime.sendMessage(
      "jdeppenejblgegpfgdmndabjeccdabhk",
      {
        message: "msg_fetch_extensionId",
      },
      (res) => {
        console.log("Extension ID:", res.extensionId);
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
        requestedCookies: { li_at: null },
        cookies: {},
        baseUrl: "https://www.linkedin.com/",
        account_uid: "b86f2078-dbc9-4b29-a504-d3bbdd3c13fb",
      },
      async (res) => {
        let msg = "";
        console.log(res);
        if (res) {
          if (res.cookies) {
            console("Cookies: ", res.cookies);
          } else if (res.error) {
            msg = res.error;
            console.log(res.error);
          } else {
            reject(null);
            return true;
          }
        }

        msg = JSON.stringify(res);
        document.querySelector("#linkedin").innerHTML = msg;
      }
    );
  } catch (err) {
    console.log("Error fetching cookies:", err);
  }
}
