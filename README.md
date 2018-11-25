# NEM Wallet #

### How to use NEM Wallet ? ###

After downloading the latest version here https://forum.nem.io/t/nano-wallet-beta-1-1-11-5-000-xem-bug-bounty/2791, extract the NEM Wallet folder from the archive, then you can simply click on start.html to open the app in your default browser. No installation or local server needed.

### How to import NCC wallet ? ###

Open NCC and your wallet, clicking on user icon should reveal a drop-down menu with "Export for Lightwallet".
Once your have your wallet (.json format), open NEM Wallet and import it from the login page. It'll ask for an upgrade and trigger the download of your updated wallet.
Do not delete your old NCC wallet and keep it safe somewhere.

### Imported accounts that are already harvesting using NCC ###

NCC is using a different way to generate the remote associated with an account. NEM Wallet uses BIP32 to generate it deterministically and make everything easier. In order to manage and monitor harvesting, you'll need to deactivate the old remote account from NCC and activate your new remote account from NEM Wallet. Alternatively you can use a custom delegated public key in NEM Wallet importance transaction page.

**/!\ Main network: Please note that if you are part of the Supernodes program you'll need to re-enroll your node using your new delegated public key.**

### How to update NEM Wallet ? ###

Before update make sure that you don't have any wallets stored into the NEM Wallet folder (you can place them anywhere you want). Then, just delete old version and unzip new version.

###  Dashboard is empty and no balance is showing ###

It is probably that the node you are connected to is down.
Look at the navigation bar, at the top of the page.
If the circle next to `Node` is red, click on it and select another node from the list.

# Developers #

### Build from source ###

1) Install gulp

<pre>npm install -g gulp-cli</pre>

2) Open a console to the path of the NEM Wallet folder and install all the needed dependencies

<pre>npm install</pre>

Dependencies nem-voting and nem-trezor are using outdated version of nem-library. Also, browserify, for some reason, is generating a code which creates two instances of nem-library, causing problems during NEMLibrary.bootstrap. To work around these issues, we can install the nem-library of desired version globally and symlink it from respective node_modules locations.

<pre>find . -type d -name nem-library -exec rm -rf {} \;</pre>

<pre>npm install -g nem-library@1.0.9</pre>

<pre>cd node_modules; npm link nem-library</pre>

<pre>cd node_modules/nem-voting/node_modules; npm link nem-library</pre>

<pre>cd node_modules/nem-trezor/node_modules; npm link nem-library</pre>

It is a bit complicated - please propose a better solution if you know one.

3) Build:

<pre>gulp</pre>

##### OR #####

4) Run NEM Wallet as App (packaged with chromium browser)

<pre>npm run devApp</pre>

##### OR #####

5) Build NEM Wallet apps, default set to : win64,osx64,linux64

<pre>gulp build-app</pre>

### Known issues ###

- Sometimes, depending the node used, unconfirmed data to sign is not incoming from websocket
