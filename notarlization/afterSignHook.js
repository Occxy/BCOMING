require('dotenv').config();
const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;  
  if (electronPlatformName !== 'darwin') {
    return;
  }

  const appName = context.packager.appInfo.productFilename;

  return await notarize({
    appBundleId: 'eu.ebo-sursy.appname',
    appPath: './dist/mac/BCOMING.app',
   	appleId: 'rosset_bruno@hotmail.com',
   	appleIdPassword: 'szrn-hdlr-waxb-hdek',
  });
};