'use strict';
import React, {
  StyleSheet, Image, Dimensions, Text, TouchableHighlight, ScrollView, View ,ListView, Component
} from 'react-native';
var windowSize = Dimensions.get('window');

var Com = React.createClass({

  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: function(r1, r2){

    }});
    return {
      dataSourceChat: ds.cloneWithRows([{
          peer: true,
          content:"亲在吗"
        },
        {
          peer: true,
          content:"在的已经帮你在看了"

        }
      ])
    }
  },
  render: function(){
    var self = this;
    return (
      <ScrollView style={styles.wrapper}>


      </ScrollView>
    );
  }
});


var styles = StyleSheet.create({
  wrapper:{
    backgroundColor:"#f4f4f4"
  }
})

module.exports = Com
