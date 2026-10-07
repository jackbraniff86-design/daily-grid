# The Daily Grid — App Store notes

- Bundle id uk.co.thedailygrid.app (bundle id record 7DLRNZW2JV), team 8759KGVN28.
- App Store Connect app record: not created yet (the API cannot create apps; Jack creates it at appstoreconnect.apple.com → My Apps → + → iOS, pick the bundle id above).
- Signing: Apple Distribution cert 529GT85345 whose key lives in ~/Library/Keychains/mf-dist.keychain-db (password mfpass). App Store profile "The Daily Grid App Store" (F8AQCQ2V7T), installed under ~/Library/Developer/Xcode/UserData/Provisioning Profiles.
- The web files are the ones at the repo root; `npm run sync` copies them into www/ and the Xcode project.

## Build and upload
    npm run sync
    cd ios/App && xcodebuild -project App.xcodeproj -scheme App -configuration Release -destination 'generic/platform=iOS' -archivePath /tmp/dg.xcarchive -derivedDataPath /tmp/dg-derived archive -allowProvisioningUpdates -authenticationKeyPath ~/.appstoreconnect/private_keys/AuthKey_DQ5S795352.p8 -authenticationKeyID DQ5S795352 -authenticationKeyIssuerID 69a6de79-7454-47e3-e053-5b8c7c11a4d1
    security unlock-keychain -p mfpass ~/Library/Keychains/mf-dist.keychain-db
    xcodebuild -exportArchive -archivePath /tmp/dg.xcarchive -exportPath /tmp/dg-export -exportOptionsPlist store/export.plist
    xcrun altool --upload-app -f /tmp/dg-export/App.ipa -t ios --apiKey DQ5S795352 --apiIssuer 69a6de79-7454-47e3-e053-5b8c7c11a4d1
Bump CURRENT_PROJECT_VERSION in ios/App/App.xcodeproj/project.pbxproj before each upload.

Simulator: `xcodebuild ... -configuration Debug -destination 'platform=iOS Simulator,name=iPhone 17 Pro' -derivedDataPath /tmp/dg-derived build`, then install /tmp/dg-derived/Build/Products/Debug-iphonesimulator/App.app.
