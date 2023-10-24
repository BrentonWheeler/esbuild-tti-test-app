#!/bin/bash

rm -rf android/app/build/outputs/apk/release/
rm -rf android/app/build/generated/assets/createBundleReleaseJsAndAssets/
cd android || exit
serializer=$1 ./gradlew assembleRelease
cd ../ 
adb uninstall com.esbuildttitestapp
adb install android/app/build/outputs/apk/release/app-release.apk
adb shell monkey -p com.esbuildttitestapp 1
