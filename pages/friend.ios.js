'use strict';
import React, {
  StyleSheet, Image, Dimensions, Text, TouchableHighlight, ScrollView, View ,ListView, Component
} from 'react-native';
var windowSize = Dimensions.get('window');
var SearchBar = require('react-native-search-bar');
var Firend = React.createClass({

  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: function(r1, r2){

    }});
    return {
      dataSource: ds.cloneWithRows([
        {
          name: '凋谢的花朵',
          solgon: '一花一世界，一树一如来'
        },
        {
          name: '凋谢的花朵',
          solgon: '一花一世界，一树一如来'
        },
        {
          name: '凋谢的花朵',
          solgon: '一花一世界，一树一如来'
        },
        {
          name: '凋谢的花朵',
          solgon: '一花一世界，一树一如来'
        },
        {
          name: '凋谢的花朵',
          solgon: '一花一世界，一树一如来'
        },
        {
          name: '凋谢的花朵',
          solgon: '一花一世界，一树一如来'
        },
        {
          name: '凋谢的花朵',
          solgon: '一花一世界，一树一如来'
        }
      ])
    }
  },
  render: function(){
    var self = this;
    return (
      <ScrollView style={styles.wrapper}>
        <SearchBar
          ref='searchBar'
          placeholder='添加好友'
          onChangeText={function(){

          }}
          onSearchButtonPress={function(){

          }}
          onCancelButtonPress={function(){

          }}
          />
        <ListView contentContainerStyle={styles.listStyle} dataSource={this.state.dataSource}
          renderRow={function(rowData){
            return (
              <View style={styles.avatarStyle}>
                <Image style={{width: 80, height: 80, borderRadius:40}} resizeMode="contain" source={require('../img/data/avatar-sample.jpg')} />
                <View style={styles.textStyle}>
                  <Text numberOfLines={1} style={styles.textTitleStyle}>{rowData.name}</Text>
                  <Text numberOfLines={3} style={styles.textContentStyle}>{rowData.solgon}</Text>
                </View>
                <TouchableHighlight onPress={function(){}} style={styles.buttonStyle}>
                  <Text numberOfLines={1} style={styles.buttonTextStyle} >关注TA</Text>
                </TouchableHighlight>
              </View>
            )

          }}
        >
        </ListView>
      </ScrollView>
    );
  }
});


var styles = StyleSheet.create({
  wrapper:{
    backgroundColor:"#f4f4f4"
  },
  listStyle: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: 10,
    borderTopWidth: 1,
    marginRight: 10,
    marginLeft: 10,
    borderTopColor: '#f4f4f4'
  },
  avatarStyle:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor:"#fff",

    paddingRight: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4'
  },
  textStyle:{
    flex: 0.5,
    padding:10
  },
  textTitleStyle:{
    fontSize: 16,
    color:'#595757',
    marginBottom: 10
  },
  textContentStyle:{
    fontSize: 14,
    color:'#c5c5c4'
  },
  buttonStyle:{
    width: 80,
    height: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#999997',
    borderRadius: 3,
    marginTop: 20
  },
  buttonTextStyle:{
    flex: 1,
    textAlign:'center',
    color: '#fff',
    fontSize: 14
  }
})

module.exports = Firend
