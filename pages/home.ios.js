'use strict';
import React, {
  StyleSheet, Image, Text, TouchableHighlight, ScrollView, View ,ListView, Component
} from 'react-native';

var Merchant = require('./merchant.ios');
var Plant = require('./plant.ios');
var Com = require('./com.ios');
var Garden = require('./garden.ios');
var Friend = require('./friend.ios');
var Home = React.createClass({

  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: function(r1, r2){

    }});

    return {
      dataSourceLevel1: ds.cloneWithRows([{title:'花商', component: Merchant },{title:'栽培', component: Plant},{title:'沟通', component: Com}]),
      dataSourceLevel2: ds.cloneWithRows([{title:'上传照片', component: Merchant},{title:'我的花草', component: Garden},{title:'好友列表', component: Friend}]),
      dataSourceLevel3: ds.cloneWithRows([{title:'行业咨询', component: Merchant},{title:'反馈意见', component: Merchant},{title:'关于我们', component: Merchant}])
    }
  },
  render: function(){
    var self = this;
    return (
      <ScrollView style={styles.wrapper}>
        <ListView
          style={styles.listStyle}
          dataSource={this.state.dataSourceLevel1}
          renderRow={(rowData) => <TouchableHighlight onPress={function(){
            self.props.navigator.push(rowData);
          }}><View style={styles.linkStyle}><Text>{rowData.title}</Text></View></TouchableHighlight>}
          ></ListView>
        <ListView
          style={styles.listStyle}
          dataSource={this.state.dataSourceLevel2}
          renderRow={(rowData) => <TouchableHighlight onPress={function(){
            self.props.navigator.push(rowData);
          }}><View style={styles.linkStyle}><Text>{rowData.title}</Text></View></TouchableHighlight>}
          ></ListView>
        <ListView
          style={styles.listStyle}
          dataSource={this.state.dataSourceLevel3}
          renderRow={(rowData) => <TouchableHighlight onPress={function(){
            self.props.navigator.push(rowData);
          }}><View style={styles.linkStyle}><Text >{rowData.title}</Text></View></TouchableHighlight>}
          ></ListView>
        <TouchableHighlight style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor:'#e4e4e4',
            margin: 20,
            height: 40

          }} onPress={function(){
        }}>
            <Text>退出当前账号</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: '#f4f4f4',
    marginTop: 0
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  listStyle:{
    margin:20,
    marginBottom:0,
    borderTopWidth: 1,
    borderTopColor: 'rgba( 0, 0, 0, 0.1 )'
  },
  linkStyle:{
    padding: 15,
    borderLeftColor: 'rgba( 0, 0, 0, 0.1 )',
    borderLeftWidth: 1,
    borderRightColor: 'rgba( 0, 0, 0, 0.1 )',
    borderRightWidth: 1,
    borderBottomColor: 'rgba( 0, 0, 0, 0.1 )',
    borderBottomWidth: 1,
    backgroundColor:'#fff'
  }
});

module.exports = Home;
