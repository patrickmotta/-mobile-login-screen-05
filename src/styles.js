import { StyleSheet } from 'react-native';
import colors from './colors';



export default styles = StyleSheet.create({
   safe:{
      flex: 1,
 
   },
   background: {
      flex: 1,
      backgroundColor: `${colors.background}`,
      alignItems: 'center',
      justifyContent: 'center',
   },
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
   },
   titleContainer:{
      alignItems: 'center',
      marginBottom: 35,

   },
   title:{
      color: `${colors.textWhite}`,
      fontSize: 25,
      marginBottom: 15,
      fontWeight: 'bold'
   },
   subTitle:{
      color: `${colors.subText}`,
      fontSize: 16
   },
   inputContainer:{
      width: '100%',
      justifyContent: 'center'
   },
   forgotPassContainer:{
      marginTop: 20,
      marginBottom: 40,
      width: '100%',
      alignItems:'flex-end',
   },
   forgotPassButton:{
      
   },
   forgotPassText:{
      color: `${colors.subText}`
   },
   buttonsContainer:{
      width: '100%'
   },
   dontHaveAcContainer:{
      flexDirection: 'row',
      marginTop: 25,
      alignItems: 'center'
   },
   dontHaveAcButton:{

   },
   dontHaveAcText:{
      color: 'white'
   },
   dontHaveAcButtonText:{
      color: `${colors.secondary}`
   }
 });