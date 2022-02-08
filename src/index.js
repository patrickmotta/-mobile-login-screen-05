import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,KeyboardAvoidingView,Text, View, TouchableOpacity } from 'react-native';
import { } from 'react-native-paper';
import styles from './styles';
import colors from './colors';

import TextInput from './components/TextInput';
import Button from './components/Button'

export default function App() {
  return (
   //<SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"} 
          style={styles.background}>
        <View style={styles.container}>

            <View style={styles.titleContainer}>
              <Text style={styles.title}> Welcome Back!</Text>
              <Text style={styles.subTitle}>Please sign in to your account</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput placeholder={'Email'}/>
              <TextInput placeholder={'Password'} icon='eye-outline'/>
            </View>
            <View style={styles.forgotPassContainer}>
              <TouchableOpacity style={styles.forgotPassButton}>
                <Text style={styles.forgotPassText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
              <Button 
                text="Sign in" 
                color={colors.secondary}
                textColor={'white'}
                />
                <Button 
                text="Sign in whith Google" 
                color={'white'}
                textColor={'black'}
                icon={'https://cdn-icons-png.flaticon.com/512/300/300221.png'}
                />
            </View>
            <View style={styles.dontHaveAcContainer}>
              <Text style={styles.dontHaveAcText}>Don't have an Account? </Text>
              <TouchableOpacity>
                <Text style={styles.dontHaveAcButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
        </View>
      </KeyboardAvoidingView>
    //</SafeAreaView>
  );
}