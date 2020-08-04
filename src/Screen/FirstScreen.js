import React ,{Component} from 'react';
import {Content,Container,View,Button,CardItem,List,ListItem} from "native-base";
import {Image,Text, FlatList, ImageBackground, Linking} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import New from "./New";
import ViewTab from "./ViewTab";


const Tab = createMaterialTopTabNavigator();


//
export default class FeedScreen extends React.Component{

    render(){
        return(
            <Container>
                <Tab.Navigator
                    initialRouteName={"TabTop"}
                    tabBarOptions={{
                        labelStyle: ' ',
                        style: {
                            background: '#dfe6e9',
                            fontsize: 12,
                        },
                    }}
                >
                    <Tab.Screen
                        name="Mới Nhất"
                        component={New}
                        // options={{ tabBarLabel: 'Mới Nhất' }}
                    />
                    <Tab.Screen
                        name="Góc Nhìn"
                        component={ViewTab}
                        // options={{ tabBarLabel: 'Góc Nhìn' }}
                    />
                </Tab.Navigator>
            </Container>


        );
    }

}
