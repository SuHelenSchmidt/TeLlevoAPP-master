import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'practicaionic',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000',
      GOOGLE_MAPS_ANDROID_API_KEY: 'AIzaSyAX_BrAyqjXCvp1PBNb1LoMlMhD3jXB1gk',
      GOOGLE_MAPS_IOS_API_KEY: 'AIzaSyAX_BrAyqjXCvp1PBNb1LoMlMhD3jXB1gk'
    }
  }
};

export default config;
