#!/bin/bash

rm -rf android/app/build/outputs/apk/debug/
rm -rf android/app/build/generated/assets/createBundleDebugJsAndAssets/
cd android || exit
serializer=$1 ./gradlew assembleDebug
cd ../ 
adb uninstall com.esbuildttitestapp
adb install android/app/build/outputs/apk/debug/app-debug.apk
adb shell monkey -p com.esbuildttitestapp 1
yarn exec react-native start --config metro.config.js
