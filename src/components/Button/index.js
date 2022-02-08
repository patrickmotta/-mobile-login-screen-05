
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import colors from '../../colors';

export default function InputText({text,textColor,icon,color}) {
  
  
  if(icon == undefined){
    return (
      <TouchableOpacity style={{backgroundColor: color, padding: 25, borderRadius: 20, alignItems: 'center', marginBottom: 10}}>
         <Text style={{color: textColor, fontSize: 16}}>{text}</Text>
      </TouchableOpacity>
  
  
    );
  }else{
    return (
      <TouchableOpacity style={{
            backgroundColor: color, 
            padding: 25, 
            borderRadius: 20, 
            alignItems: 'center', 
            marginBottom: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '500'
         
         }}>
         <Image source={{uri: icon}} style={styles.icon}/>
         <Text style={{color: textColor, fontSize: 16, fontWeight: '500'}}>{text}</Text>
      </TouchableOpacity>
  
  
    );
  }
  
}