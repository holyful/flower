'use strict';
import React, {
  StyleSheet, Image, Dimensions, Text, TouchableHighlight, ScrollView, View ,ListView, Component
} from 'react-native';
var windowSize = Dimensions.get('window');
var SearchBar = require('react-native-search-bar');
var Merchant = React.createClass({

  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: function(r1, r2){

    }});
    return {
      dataSource: ds.cloneWithRows([{
        price: "￥18.9",
        description: "金鱼草为多年生草本，常作一、二年生花卉栽培。株高20～70厘米，叶片长圆状披针形。有白、淡红、深红、肉色、深黄、浅黄、黄橙等色。",
        distance: "10km",
        when: "刚刚"
      },{
        price: "￥18.9",
        description: "金鱼草为多年生草本，常作一、二年生花卉栽培。株高20～70厘米，叶片长圆状披针形。有白、淡红、深红、肉色、深黄、浅黄、黄橙等色。",
        distance: "10km",
        when: "刚刚"
      },
      {
        price: "￥18.9",
        description: "金鱼草为多年生草本，常作一、二年生花卉栽培。株高20～70厘米，叶片长圆状披针形。有白、淡红、深红、肉色、深黄、浅黄、黄橙等色。",
        distance: "10km",
        when: "刚刚"
      },
      {
        price: "￥18.9",
        description: "金鱼草为多年生草本，常作一、二年生花卉栽培。株高20～70厘米，叶片长圆状披针形。有白、淡红、深红、肉色、深黄、浅黄、黄橙等色。",
        distance: "10km",
        when: "刚刚"
      }])
    }
  },
  render: function(){
    var self = this;
    return (
      <ScrollView style={styles.wrapper}>
        <SearchBar
          ref='searchBar'
          placeholder='搜索花商'
          onChangeText={function(){

          }}
          onSearchButtonPress={function(){

          }}
          onCancelButtonPress={function(){

          }}
          />
        <ListView
          contentContainerStyle={styles.listStyle}
          dataSource={this.state.dataSource}
          renderRow={function(rowData){
            return (
              <TouchableHighlight style={styles.itemStyle} onPress={function(){

              }}>
              <View >
                <Image style={styles.itemImageStyle} source={require('../img/data/merchant-sample.jpg')} />
                <View style={styles.itemTextStyle}><Text style={styles.priceTextStyle}>{rowData.price}</Text></View>
                <View style={styles.itemContentStyle}><Text numberOfLines={7} style={styles.contentTextStyle}>{rowData.description}</Text></View>
                <View style={styles.itemOtherStyle}>
                  <Text numberOfLines={1} style={styles.distanceTextStyle}>{rowData.distance}</Text>
                  <Text numberOfLines={1} style={styles.whenTextStyle}>{rowData.when}</Text>
                </View>
              </View>
              </TouchableHighlight>

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
    backgroundColor:"#f4f4f4",
    margin: 0
  },
  listStyle:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5
  },
  itemStyle:{
    margin: 5,
    width:(windowSize.width - 30) /2
  },
  itemImageStyle:{
    width: (windowSize.width - 30) / 2 ,
    height: (windowSize.width - 30) / 2,
    borderRadius: 5
  },
  itemTextStyle: {
    height: 30,
    backgroundColor: "rgba(0,0,0,.5)",
    marginTop: -30,
    paddingRight: 5
  },
  priceTextStyle: {
    textAlign: "right",
    color: "#fff",
    height: 30,
    lineHeight: 25
  },
  itemContentStyle:{
    backgroundColor:'#fff',
    padding: 10
  },
  contentTextStyle:{
    color: '#8e8e8e',
    fontSize: 16
  },
  itemOtherStyle:{
    backgroundColor:'#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  distanceTextStyle:{
    color: '#cacaca',
    fontSize: 14,
    textAlign:"left",
    flex: 0.5
  },
  whenTextStyle:{
    color: '#cacaca',
    fontSize: 14,
    textAlign:"right",
    flex: 0.5
  }
})

module.exports = Merchant
