# Meal-Suggestion
Meal Suggestion Project for SysEngMeetsLifeScience 2020


## MealSuggestionApp
This is a react-native application (without expo). You need to setup some things to run it locally:
1. Download any Editor for Java Script. I suggest using Visual Studio code since it is extendable so it can be used specifically for react native
2. download node.js from here: https://nodejs.org/de/download/. This is used for managing third party packages
3. Download Android Studio: https://developer.android.com/studio since it comes with the Android SDK.
4. Setting up your physical device:
	- Plug in your smartphone
	- On Android, if not already happened: Activate _developer settings_. You can do this by going into your settings -> Device information -> Click on _Build Number_ many times until you see the notification that your developer settings are enabled
	- Go to your developer settings and activate USB-Debugging
5. Setting up an emulator:
	- Within Android Studio, open AVD Manager and select an appropriate Emulator.
	- Run the emulator
6. When having either a device plugged in or an emulator running, open any bash script (e.g. Git Bash) inside of the MealSuggestionApp root folder and type in `react-native run-android`. Some additional windows will open before the app starts running on your device.

For a more detailed explanation see https://reactnative.dev/docs/environment-setup 