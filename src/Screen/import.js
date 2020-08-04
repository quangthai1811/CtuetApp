import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


//
//const arlert = Alert.alert("The film at 2nd:  " + responseJson.movies[1].title);

export default class FirstScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            dataMovie: '',
            dataMovieYear: ''
        }
    }
    componentDidMount() {
        this.handlePress();
    }
    
    handlePress = async () => {
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson,
                    dataMovie: responseJson.movies[1].title,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }   

    showAlert = () => {
        Alert.alert(
            this.state.dataMovie, 
            this.state.dataMovieYear,
            );
        // Alert.alert(this.state.dataMovieYear);
    }
    render(){
        return (
            <View>
                {/* <Button style={{
                    marginTop: 27,
                }}
                onPress={() => this.props.navigation.navigate('ViewTab') } >
                    <Image source={require("../IMG/download.png")} style={{height:100,}}/>
                    <Text></Text>
                </Button> */}

                <View style={{
                    marginTop:20,
                    backgroundColor:'#f5fcff'
                }}>
                    <TouchableOpacity onPress={this.showAlert} style={{
                        backgroundColor:'#fff',
                        marginBottom:10,
                        marginLeft:'2%',
                        width:'96%',
                        shadowColor:'#000',
                        shadowOpacity:0.2,
                        shadowRadius: 1,
                        shadowOffset:{
                            width:3,
                            height: 3
                        }
                    }}
                    //onPress={() => this.props.navigation.navigate('Detail_BMWs1000') }
                    >
                        <Image 
                            style={
                                {
                                width: '100%',
                                height: 200,
                                resizeMode:"cover"
                                }
                            } 
                            source={{uri: item.thumbnailUrl}} />

                            <Text 
                                style={
                                    {
                                    textAlign:"center", 
                                    padding: 10,
                                    fontSize: 16
                                    }
                                }>

                                    BWM S100rr
                                    
                            </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}