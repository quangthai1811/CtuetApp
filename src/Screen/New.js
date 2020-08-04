import React from 'react';
import {FlatList, Image, Linking, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";
//

export default class New extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],

        }
    }

    handlePress = async () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson,
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.handlePress();
    }
    render(){
        return (
            <FlatList
                data={this.state.dataSource}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    let urls = item.url
                    return (
                        <View style={{
                            marginTop:20,
                            backgroundColor:'#f5fcff'
                        }}>
                            <TouchableOpacity onPress={ ()=> Linking.openURL(urls) } style={{
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
                                    source={{uri:  item.thumbnailUrl}} />

                                <Text
                                    style={
                                        {
                                            textAlign:"center",
                                            padding: 10,
                                            fontSize: 16
                                        }
                                    }>

                                    {item.title}

                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        );
    }
}