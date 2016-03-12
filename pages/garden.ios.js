'use strict';
import React, {
  StyleSheet, Image, Dimensions, Text, TouchableHighlight, ScrollView, View ,ListView, Component
} from 'react-native';
var windowSize = Dimensions.get('window');
var Img = require('../lib/image');
var Friend = require('./friend.ios');
var Timeline = require('./timeline.ios');
var Garden = React.createClass({

  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: function(r1, r2){

    }});
    return {
      dataSource: ds.cloneWithRows([
        {
            title:'锦葵',
            description:'花高20-50厘米花高20-50厘米花高20-50厘米花高20-50厘米花高20-50厘米',
            image:"../img/data/merchant-sample.jpg",
            date:"2016-03-01",
            comment:"随风而去，轻旋起舞"
        },
        {
            title:'锦葵',
            description:'花高20-50厘米花高20-50厘米花高20-50厘米花高20-50厘米花高20-50厘米花高20-50厘米',
            image:"../img/data/merchant-sample.jpg",
            date:"2016-03-01",
            comment:"随风而去，轻旋起舞"
        }
      ])
    }
  },
  render: function(){
    var self = this;
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.avatarStyle} >
          <View  style={styles.avatarImage} ><Image style={{width: 80, height: 80, borderRadius:40}} resizeMode="contain" source={require('../img/data/avatar-sample.jpg')} /></View>
          <TouchableHighlight onPress={function(){}}style={styles.controllItemStyle}>
            <View>
              <Text style={styles.controllTitleStyle} >收藏</Text>
              <Text style={styles.controllNumberStyle}>999</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={function(){}}style={styles.controllItemStyle}>
            <View>
              <Text style={styles.controllTitleStyle}>提问</Text>
              <Text style={styles.controllNumberStyle}>999</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={function(){}}style={styles.controllItemStyle}>
            <View>
              <Text style={styles.controllTitleStyle}>转发</Text>
              <Text style={styles.controllNumberStyle}>999</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={function(){}} style={styles.controllItemStyle}>
            <View>
              <Text style={styles.controllTitleStyle}>关注</Text>
              <Text style={styles.controllNumberStyle}>999</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.actionStyle} >
          <TouchableHighlight onPress={function(){
              self.props.navigator.push({
                component: Friend,
                title:"花友"
              })
            }} style={styles.actionItemStyle}>
            <Text style={styles.actionTitleStyle} allowFontScaling={true}>我的好友</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={function(){
            self.props.navigator.push({
              component: Timeline,
              title:"花友动态"
            })
            }} style={styles.actionItemStyle}>
            <Text style={styles.actionTitleStyle}>好友动态</Text>
          </TouchableHighlight>
        </View>
        <ListView contentContainerStyle={styles.collectionListStyle} dataSource={this.state.dataSource}
          renderRow={function(rowData){
            return (
              <View>
                <View style={styles.collectionItemStyle}>
                  <View style={styles.collectionImageStyle}>
                    <Image source={require("../img/data/merchant-sample.jpg")} style={{width: 80, height: 80, borderRadius: 5}} resizeMode="contain"  />
                  </View>
                  <View style={styles.collectionTextStyle}>
                    <Text style={styles.collectionTitleStyle}>{rowData.title}</Text>
                    <Text numberOfLines={3} style={styles.collectionDescriptionStyle}>{rowData.description}</Text>
                  </View>
                </View>
                <View style={styles.collectionCommentStyle}>
                  <Text numberOfLines={3} style={styles.collectionCommentTextStyle}>“{rowData.comment}”</Text>
                </View>
                <View style={styles.doStyle}>
                  <TouchableHighlight style={styles.doImageStyle} onPress={function(){

                    }}>
                    <Image style={{width:25, height:25}} source={require('../img/chat.png')} resizeMode="contain" />
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.doImageStyle} onPress={function(){

                    }}>
                    <Image style={{width:25, height:25}} source={require('../img/like.png')} resizeMode="contain" />
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.doImageStyle} onPress={function(){

                    }}>
                    <Image style={{width:25, height:25}} source={require('../img/gift.png')} resizeMode="contain" />
                  </TouchableHighlight>
                </View>
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
  actionStyle:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor:"#fff",
    justifyContent:'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  avatarStyle:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor:"#fff",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    paddingRight: 10
  },
  controllListStyle:{
    flex: 0.7,
    flexDirection: 'row',
    backgroundColor:"#fff",
    flexWrap: 'wrap',
    justifyContent:'center',
    marginRight: 10
  },
  controllItemStyle:{
    flex:0.3,
    marginTop:30
  },
  controllTitleStyle:{
    color:'#666',
    textAlign:'center'
  },
  controllNumberStyle:{
    color:'#666',
    textAlign:'center'
  },
  avatarImage:{
    flex: 0.3,
    margin: 10
  },
  actionItemStyle:{
    backgroundColor:'#ddd',
    height: 30,
    flex: 0.5,
    margin: 10
  },
  actionTitleStyle:{
    justifyContent: 'center',
    textAlign:'center',
    color:'#666',
    fontSize:16,
    marginTop: 5
  },
  collectionListStyle:{
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  collectionItemStyle: {
    backgroundColor:"#fff",
    marginTop: 10,
    marginLeft: 10,
    marginRight:10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  collectionImageStyle:{
    margin: 10

  },
  collectionTextStyle:{
    flex:1
  },
  collectionTitleStyle:{
    color: '#3594c4',
    fontSize:16,
    height: 35,
    paddingTop: 10
  },
  collectionDescriptionStyle:{
    color: '#d2d2d1',
    fontSize:14,
    paddingRight: 10

  },
  collectionCommentStyle: {
    backgroundColor:"#fff",
    marginLeft: 10,
    marginRight: 10,
  },
  collectionCommentTextStyle:{
    fontSize:16,
    color: "#666",
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10
  },
  doStyle:{
    height:40,
    backgroundColor:'#dddddd',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 10,
    marginRight: 10
  },
  doImageStyle:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 20,
    marginRight: 20
  }
})

module.exports = Garden
