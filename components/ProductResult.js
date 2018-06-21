import React from 'react';
import {  Text, View } from 'react-native';


export default class ProductResult extends React.Component {
 
render() {
    const {listofNames,isSearched,styles } = this.props 
     return (
       <View>
         {listofNames.length>0?listofNames.map((item,key)=>
         <Text style={styles.resultItem} key={key}>
            <Text style={styles.productName}>{item.Name}{"\n"}</Text>
            <Text style={styles.productDesc}>{item.Description}</Text>
        </Text>):isSearched &&<Text style= {styles.noResult}>No such product</Text>}
       </View>
     );
   }
 }   
