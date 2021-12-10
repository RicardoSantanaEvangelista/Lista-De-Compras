import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AppList from './AppList';
import AppForm from './AppForm';
 
const {Navigator, Screen} = createBottomTabNavigator();

function AppTab(){
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="AppList"
                tabBarOptions={{
                    style: {
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 64,
                    },
                    tabStyle: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    labelStyle: {
                        fontSize: 13,
                        marginLeft: 16,
                    },
                    inactiveBackgroundColor: '#fafafc',
                    activeBackgroundColor: '#ebebf5',
                    inactiveTintColor: '#090808',
                    activeTintColor: '#090808',
                }}
            >
                <Screen name="AppList" component={AppList}
                    options={{
                        tabBarLabel: "Comprar"
                    }}
                />
                <Screen name="AppForm" component={AppForm}
                    options={{
                        tabBarLabel: "Adicionar"
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppTab;