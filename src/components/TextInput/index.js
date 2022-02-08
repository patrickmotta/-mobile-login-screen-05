
import { SafeAreaView,KeyboardAvoidingView,Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import colors from '../../colors';

export default function InputText({placeholder, icon}) {
  
  
  if(icon == undefined){
    return (
      <TextInput 
        style={styles.input}
        mode='outlined'
        placeholder={placeholder}
        placeholderTextColor={colors.subText}
        activeOutlineColor={colors.secondary}
        theme={{roundness: 20}}
      />
  
  
    );
  }else{
    return (
      <TextInput 
        style={styles.input}
        mode='outlined'
        placeholder={placeholder}
        placeholderTextColor={colors.subText}
        theme={{roundness: 20}}
        activeOutlineColor={colors.secondary}
        right={<TextInput.Icon name={icon} color={colors.subText}/>}
        
      />
  
  
    );
  }
  
}