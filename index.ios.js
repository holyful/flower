// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
// 'use strict';
// import React, {
//   StyleSheet, AppRegistry, Component, TabBarIOS, NavigatorIOS
// } from 'react-native';
// import Home from './pages/home.ios';
// import Image from './lib/image';
//
//
//
// class flower extends Component {
//   render() {
//     return (
//       <TabBarIOS tintColor="#74797a" >
//           <TabBarIOS.Item title="首页" selected={true} style={styles.itemStyle} resizeMode='contain' icon={{uri: Image.Home, scale: 8}}>
//             <NavigatorIOS style={styles.nav} initialRoute={{ component: Home, title: '首页' }} />
//           </TabBarIOS.Item>
//           <TabBarIOS.Item title="交流" selected={false} style={styles.itemStyle} resizeMode='contain' icon={{uri: Image.Com, scale: 8}}>
//             <NavigatorIOS style={styles.nav} initialRoute={{ component: Home, title: '交流' }} />
//           </TabBarIOS.Item>
//           <TabBarIOS.Item title="购物车" selected={false} style={styles.itemStyle} resizeMode='contain' icon={{uri: Image.Cart, scale: 8}}>
//             <NavigatorIOS style={styles.nav} initialRoute={{ component: Home, title: '购物车' }} />
//           </TabBarIOS.Item>
//           <TabBarIOS.Item title="个人中心" selected={false} style={styles.itemStyle} resizeMode='contain' icon={{uri: Image.My, scale: 8}}>
//             <NavigatorIOS style={styles.nav} initialRoute={{ component: Home, title: '个人中心' }} />
//           </TabBarIOS.Item>
//       </TabBarIOS>
//     );
//   }
// }
//
// var styles = StyleSheet.create({
//    itemStyle: {
//      height: 20
//    },
//    nav:{
//      flex: 1
//    }
// });
//
//
//
// AppRegistry.registerComponent('flower', () => flower
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  TabBarIOS,
  Text,
  View,
} = React;

var Image = require('./lib/image');
var Home = require('./pages/home.ios');

var flower = React.createClass ({
  render: function() {
    return (
      <TabBarIOS tintColor="#74797a">
        <TabBarIOS.Item title="首页" selected={true}  resizeMode='contain' icon={{uri: Image.Home, scale: 8}}>
          <NavigatorIOS
                style={styles.container}
                initialRoute={{
                  component: Home,
                  title: '个人中心',
                  passProps: { myProp: 'foo' },
          }}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="交流" selected={false} resizeMode='contain' icon={{uri: Image.Com, scale: 8}}>
          <NavigatorIOS
                style={styles.container}
                initialRoute={{
                  component: MyView,
                  title: '交流',
                  passProps: { myProp: 'foo' },
          }}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },
});



var MyView = React.createClass({
  render: function(){
    return (
        <View style={styles.wrapper}>
        <Text style={styles.welcome}>
          Hello there, welcome to My View
        </Text>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 80
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});


AppRegistry.registerComponent('flower', () => flower);
