'use strict';
import React, {
  StyleSheet, Image, Dimensions, Text, TouchableHighlight, ScrollView, View ,ListView, Component
} from 'react-native';
var windowSize = Dimensions.get('window');
var SearchBar = require('react-native-search-bar');
var Plant = React.createClass({

  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: function(r1, r2){

    }});
    return {
      dataSourceWrapper: ds.cloneWithRows([
           ds.cloneWithRows([
              {
                image: null,
                title: '雏菊',
                rowSpan: 2
              },{
                image: null,
                title: '繁缕',
                rowSpan: 1
              },{
                image: null,
                title: '罂粟',
                rowSpan: 1
              },{
                image: null,
                title: '紫云英',
                rowSpan: 2
              }
            ]),
          ds.cloneWithRows([
              {
                image: null,
                title: '细叶亚菊',
                rowSpan: 2
              },{
                image: null,
                title: '金鱼草',
                rowSpan: 2
              },{
                image: null,
                title: '锦葵',
                rowSpan: 1
              },{
                image: null,
                title: '二月兰',
                rowSpan: 1
              }
          ])
      ])
    }
  },
  render: function(){
    var self = this;
    return (
      <ScrollView style={styles.wrapper}>
        <SearchBar
          ref='searchBar'
          placeholder='搜索'
          onChangeText={function(){

          }}
          onSearchButtonPress={function(){

          }}
          onCancelButtonPress={function(){

          }}
          />
      <ListView contentContainerStyle={styles.wrapperListStyle} dataSource={this.state.dataSourceWrapper}
        renderRow={function(rowData){
          return (

            <ListView contentContainerStyle={styles.listStyle} dataSource={rowData}
              renderRow={
                function(singleRowData){
                  return(
                    <TouchableHighlight style={styles.itemStyle} onPress={function(){

                    }}>
                    <View>
                      <Image style={[styles.itemImageStyle, {height: 100 * singleRowData.rowSpan + 5 * (singleRowData.rowSpan - 1)}]} source={require('../img/data/merchant-sample.jpg')} />
                      <View style={styles.itemTextStyle}><Text style={styles.nameTextStyle}>{singleRowData.title}</Text></View>
                    </View>
                    </TouchableHighlight>
                  )
                }
              }
            >
            </ListView>
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

  },
  wrapperListStyle:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5
  },
  listStyle:{
    width:(windowSize.width - 30) /2,

  },
  itemStyle:{
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    width:(windowSize.width - 30) /2
  },
  itemImageStyle:{
    width: (windowSize.width - 30) / 2 ,
    borderRadius: 5
  },
  itemTextStyle: {
    height: 30,
    marginTop: -30,
  },
  nameTextStyle: {
    textAlign: "left",
    color: "#fff",
    height: 30,
    lineHeight: 25,
    paddingLeft: 10
  }
})

module.exports = Plant
