import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src/index.js';

export default function Main() {
  return (
    <PaperProvider>
      <StatusBar style="light" />
      {/* <SafeAreaView> */}
        <App />
      {/* </SafeAreaView> */}

    </PaperProvider>
  );
}