import React from 'react';
import ProductResult from './components/ProductResult';
import ProductSearchBox from './components/ProductSearchBox';
import {Keyboard,ScrollView, View } from 'react-native';
import styles from './styles/styles';
var data = require('./data/products.json')

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listofNames:[],
      isSearched:false
    };
  }
  componentDidMount(){
  
    this.setState({
    dataSource: data
  });
  }

  _onSearch = () =>{ 
    Keyboard.dismiss()
    if(this.state.text!==undefined){
      var listofNames  = this.state.dataSource.ProductCollection.filter(i=>i.Name.toLowerCase().indexOf(this.state.text.toLowerCase())===0)
     
        this.setState({
          listofNames,
          isSearched:true
        })
      
    }
    else{
      this.setState({
        listofNames: []
      })
    }
  }
  
  
  render() {
   const {listofNames,text,isSearched } = this.state 
    return (
      <ScrollView style={styles.scrollView}> 
      <View style={styles.container}>
          <ProductSearchBox  _onSearch={this._onSearch} onChangeText={text => this.setState({ text })} 
          text={text} styles={styles}/>
          <ProductResult listofNames={listofNames} styles={styles} isSearched = {isSearched}/>
      </View>
      </ScrollView>
    );
  }

  
}


