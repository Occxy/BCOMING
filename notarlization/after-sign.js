module.exports = async () => {
  if (process.platform === 'darwin') {
    console.log(`公証通過申請中...`)
    try {
      await notarize({
        appBundleId,
        appPath,
        appleId,
        appleIdPassword,
        ascProvider
      })
      console.log('公証通過完了')
    } catch (error) {
      console.log('公証通過失敗: ', error)
    }
  }
}