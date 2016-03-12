'use strict';
import React, {
  StyleSheet, Image, Dimensions, Text, TouchableHighlight, ScrollView, View ,ListView, Component
} from 'react-native';
var windowSize = Dimensions.get('window');

var Timeline = React.createClass({
  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: function(r1, r2){

    }});
    return {
      dataSource: ds.cloneWithRows([
        {
          name:"小白菜爱种花",
          avatar: '../img/data/avatar-sample.jpg',
          content:"bla~bla~bla,bla~bla~blabla~bla~blabla~bla~blabla~bla~blabla~bla~blabla~bla~bla,bla~bla~blabla~bla~blabla~bla~bla",
          images: ['../img/data/merchant-sample.jpg','../img/data/merchant-sample.jpg','../img/data/merchant-sample.jpg']
        },
        {
          name:"小白菜爱种花",
          avatar: '../img/data/avatar-sample.jpg',
          content:"bla~bla~bla,bla~bla~blabla~bla~blabla~bla~blabla~bla~blabla~bla~blabla~bla~bla,bla~bla~blabla~bla~blabla~bla~bla",
          images: ['../img/data/merchant-sample.jpg','../img/data/merchant-sample.jpg','../img/data/merchant-sample.jpg']
        },
        {
          name:"小白菜爱种花",
          avatar: '../img/data/avatar-sample.jpg',
          content:"bla~bla~bla,bla~bla~blabla~bla~blabla~bla~blabla~bla~blabla~bla~blabla~bla~bla,bla~bla~blabla~bla~blabla~bla~bla",
          images: ['../img/data/merchant-sample.jpg','../img/data/merchant-sample.jpg','../img/data/merchant-sample.jpg']
        },
        {
          name:"小白菜爱种花",
          avatar: '../img/data/avatar-sample.jpg',
          content:"bla~bla~bla,bla~bla~blabla~bla~blabla~bla~blabla~bla~blabla~bla~blabla~bla~bla,bla~bla~blabla~bla~blabla~bla~bla",
          images: ['../img/data/merchant-sample.jpg','../img/data/merchant-sample.jpg','../img/data/merchant-sample.jpg']
        },
        {
          name:"小白菜爱种花",
          avatar: '../img/data/avatar-sample.jpg',
          content:"bla~bla~bla,bla~bla~blabla~bla~blabla~bla~blabla~bla~blabla~bla~blabla~bla~bla,bla~bla~blabla~bla~blabla~bla~bla",
          images: ['../img/data/merchant-sample.jpg','../img/data/merchant-sample.jpg','../img/data/merchant-sample.jpg']
        }
      ])
    }
  },
  render: function(){
    return (
      <ScrollView style={styles.wrapper}>
        <ListView contentContainerStyle={styles.listStyle} dataSource={this.state.dataSource}
        renderRow={function(rowData){
          return (
            <View style={styles.itemStyle}>
              <View style={styles.avatarStyle}>
                <Image source={require('../img/data/avatar-sample.jpg')} style={{width: 40, height: 40, borderRadius: 20}} />
                <Text style={{flex:1,paddingLeft: 10, paddingRight: 10, color: '#3c4144'}} >{rowData.name}</Text>
              </View>
              <View style={styles.contentStyle}>
                <Text style={{}}>{rowData.content}</Text>
              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 10, paddingBottom: 10, paddingRight: 10}}>
                <Image style={styles.imageStyle} resizeMode="contain" source={require('../img/data/merchant-sample.jpg')} />
                <Image style={styles.imageStyle} resizeMode="contain" source={require('../img/data/merchant-sample.jpg')} />
                <Image style={styles.imageStyle} resizeMode="contain" source={require('../img/data/merchant-sample.jpg')} />
              </View>
            </View>
          )
        }}
        ></ListView>
      </ScrollView>
    )
  }

});
var styles = StyleSheet.create({
  wrapper:{
    backgroundColor:"#f4f4f4"
  },
  listStyle: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 5
  },
  itemStyle: {
    backgroundColor:'#fff',
    marginBottom:10
  },
  avatarStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent:'center',
    padding: 10
  },
  contentStyle:{
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent:'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  imageStyle: {
    margin :5,
    width: 100,
    height: 100
  }
})

module.exports = Timeline;
