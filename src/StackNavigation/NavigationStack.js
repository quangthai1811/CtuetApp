import React, { Compoment } from 'react';

import { createNativeStackNavigator } from "react-native-screens/native-stack";
import DetailBMWs1000 from "../Screen/DetailBMWs1000";
import News from "../Screen/News";

const Stack = createNativeStackNavigator();
export const StackContent = () => (
    <Stack.Navigator initialRoutName="Home">
        <Stack.Screen name="Detail" component={DetailBMWs1000} />
        <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
)

