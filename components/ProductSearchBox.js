import React from 'react';
import { Text, View,TextInput,TouchableOpacity } from 'react-native';


export default class ProductSearchBox extends React.Component {
 
render() {
    const {text,onChangeText,_onSearch,styles } = this.props 
     return (
       <View>
        <TextInput underlineColorAndroid='transparent'
            placeholder="Search Product"
            style={styles.formInput}
            onChangeText={onChangeText}
            value={text}
          />

          <TouchableOpacity onPress={_onSearch} style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
     );
   }
 }   
