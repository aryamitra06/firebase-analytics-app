import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'firebase-analytics-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
