import { StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical:24
      
    },
    appName:{
        fontSize:22,
        backgroundColor:'#af8eb5',
        textAlign:'left',
        color:'white',
        width:'100%', 
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal:5,
      
    },
    scrollView:{
        marginVertical:0,
        paddingVertical:0,
    },
    resultItem:{
      
      borderColor: "#af8eb5",
      backgroundColor: "#FFF",
      borderWidth: 1,
      borderRadius: 5,
      width: 300,
      paddingVertical:12,
      marginVertical: 10,
      textAlign: 'center',
  
  
    },
    noResult:{
      
      borderColor: "red",
      backgroundColor: "white",
      color:"black",
      borderWidth: 1,
      borderRadius: 5,
      width: 300,
      paddingVertical:12,
      marginVertical: 10,
      textAlign: 'center',
  
  
    },
    formInput: {
      height: 40,
      borderColor: "#af8eb5",
      backgroundColor: "#FFF",
      borderWidth: 1,
      borderRadius: 5,
      width: 300,
      paddingVertical:12,
      marginVertical: 20,
    },
    button: {
      width: 300,
      backgroundColor: "#af8eb5",
      borderRadius: 5,
      marginVertical: 5,
      paddingVertical: 12
    },
    buttonText: {
      color: "#fff",
      textAlign: "center",
      borderRadius: 25,
  
    },
    productName:{fontWeight:'bold',fontSize:15},
    productDesc:{fontWeight:'normal',fontSize:12}
  });