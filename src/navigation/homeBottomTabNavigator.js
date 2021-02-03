import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator ();

const HomeBottomTabNavigator =() => {
    return (
        <Tab.Navigator>
            <Tab.Screen />
        </Tab.Navigator>
    );
}

export default HomeBottomTabNavigator;