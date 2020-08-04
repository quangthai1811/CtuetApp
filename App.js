// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Header, Left, Right, Container, Body } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Social from './src/Screen/Social';
import FirstScreen from './src/Screen/FirstScreen';
import MyNews from "./src/Screen/MyNews";

const TabTop = createMaterialTopTabNavigator();
const Bottom = createBottomTabNavigator();

export default class App extends React.Component {

  render(){
    return (
      <NavigationContainer>
        
        <Header style={{
          backgroundColor:'#fff',
          height: 70,
          borderBottomWidth: 1,
          borderBottomColor: '#dfe6e9'
        }}>
            
          <Left>
            <View>
              <Image style={styles.Image} source = { require ('./src/IMG/download.png')} />
            </View>
          </Left>

          <Body></Body>

          <Right>
          </Right>

        </Header>

          <Bottom.Navigator
            initialRouteName="FirstScreen"
            tabBarOptions={{

            labelStyle: { fontSize: 12 },
            style: {
              backgroundColor: '#dfe6e9',
              paddingBottom:'1%',
              height: 55,
            },
            }}
          >
          <Bottom.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{
              tabBarLabel: 'Trang Nhất',
              tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="home" color="#B53471" size={30} />
              ),

            }}
          />
          <Bottom.Screen
            name="ViewTab"
            component={MyNews}
            options={{
              tabBarLabel: 'Tin Của Tôi',
              tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="user" color="#B53471" size={30} />
              ),
            }}
          />
          <Bottom.Screen
            name="Social"
            component={Social}
            options={{
              tabBarLabel: 'Cộng Đồng',
              tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="group" color="#B53471" size={30} />
              ),
            }}
          />
          </Bottom.Navigator>

      </NavigationContainer>
    );
  }
  
}

const styles = StyleSheet.create({
  Image:{
    width: 190,
    height: 40,
    resizeMode: 'cover',
}
});
