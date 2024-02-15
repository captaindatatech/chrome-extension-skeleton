# Chrome Extension Skeleton

Welcome to this skeleton repository.

The code provided here is meant to kick-start the development of your own Chrome Extension to start building with Captain Data.

Remember that a Chrome Extension always needs to be approved by Google, so don't add anything that you don't need: simplicity is key here.

Also, remember that the less code you have on the extension, the easier it'll be to debug and ship to production. Debugging a Chrome Extension is not always a piece of cake and you don't necessary want to wait for approval of your new release each time.

That being said, let's cover the basics.

# First things first

### 0. Load the unpacked extension

Head over chrome://extensions/ and click "Load unpacked" to start development.

### 1. Upload your images

Start by changing the icons in the `images` folder.

Respect the square size, starting by 16px up to 128lx.

### 2. Update the manifest.json

Make sure you update the following:

- We've added "Acme" everywhere, change this for the name of your app/company.
- Make sure to update the URL inside `matches` in the `externally_connectable`; we've provided a few examples depending on how you intend to use the extension
- We've only added the minimum required `permissions` to make sure everything runs smoothly

### 3. Update the source service code

The service background task is working like this:

- Set an alarm to update the cookies on an API
- Respond to messages from your client app
- Stores the `integrations` object in the Chrome Local Storage

The `integrations` object is constructed as is:

```json
{
  "account_uid": {
    "integration": "linkedin",
    "baseUrl": "https://www.linkedin.com/",
    "requestedCookies": {},
    "cookies": {}
  }
  ... // potentially more account_uid
}
```

This object is compatible with multiple accounts and integrations should you need to fetch cookies from more than one source.
We'll take `LinkedIn` in all of our examples to simplify.

### 4. Update your API code

You'll need a route to update cookies, for example `${apiURL}/accounts/update`

Note that we've created an `alarm` called `updateToken` to make sure to refresh to token every 2 hours.

# Deploy

### 1. Switch variables

Make sure to uncomment production variables and to comment Local variables.

### 2. Adapt your code :)

You should probably remove the "settings" folder as it's mostly useless, you just want cookies to be up-to-date.

If you don't need it, remove it from the `manifest.json` file too.

### 3. Zip & publish!
