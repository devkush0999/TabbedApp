# Three Tabs App

A simple React Native mobile application built with Expo that contains three tabs: Home, Profile, and Settings.

## Features

- **Home Tab:** Displays a welcome message and feature list
- **Profile Tab:** Shows profile information with avatar, stats, and details
- **Settings Tab:** Contains toggles and options for app configuration

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app installed on your mobile device (for testing)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/three-tabs-app.git
   cd three-tabs-app
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

## Running the App Locally

1. Start the development server:
   ```
   npx expo start
   ```

2. Scan the QR code using the Expo Go app on your Android or iOS device to run the application.

## Dependencies

- expo ~50.0.0
- expo-router ~3.4.0
- react 18.2.0
- react-native 0.73.0
- react-native-vector-icons ^10.0.0

## Building the APK

### Method 1: Using EAS Build (Recommended)
1. Install EAS CLI:
   ```
   npm install -g eas-cli
   ```

2. Log in to your Expo account:
   ```
   eas login
   ```

3. Configure the build:
   ```
   eas build:configure
   ```

4. Build the APK:
   ```
   npm run build:android
   ```
   or
   ```
   eas build -p android --profile preview
   ```

5. Follow the prompts and wait for the build to complete. Once finished, you can download the APK from the Expo dashboard or from the link provided in the terminal.

### Method 2: Building locally with Expo
1. Install the latest version of EAS CLI:
   ```
   npm install -g eas-cli
   ```

2. Generate the Android project files:
   ```
   npx expo prebuild --platform android
   ```

3. Navigate to the android directory:
   ```
   cd android
   ```

4. Build the debug APK:
   ```
   ./gradlew assembleDebug
   ```

5. Find the generated APK at:
   ```
   ./app/build/outputs/apk/debug/app-debug.apk
   ```

## Project Structure

```
app/
├── assets/
│   └── images/
│       └── profile-avatar.png
├── components/
│   └── TabBarIcon.js
├── (tabs)/
│   ├── index.js
│   ├── home.js
│   ├── profile.js
│   └── settings.js
├── _layout.js
├── index.js
├── package.json
├── app.json
├── babel.config.js
└── README.md
```

## Additional Notes

- This app uses Expo Router for navigation, which provides a file-system based routing system.
- The app demonstrates how to create a tab-based navigation structure, which is a common pattern in mobile applications.
- The Profile tab includes placeholder content that can be replaced with dynamic user data in a real application.
- The Settings tab includes functional toggle switches that maintain state during the current session.

## Future Improvements

- Add authentication functionality
- Implement dark mode theme that actually changes the app's appearance
- Add data persistence using AsyncStorage or a database
- Implement more interactive features and animations