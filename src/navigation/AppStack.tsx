import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import appRouters from './app.routers';

const Stack = createStackNavigator();

const AppStack = ({initRouteName = 'HomeScreen'}) => {
  return (
    <Stack.Navigator
      initialRouteName={initRouteName}
      screenOptions={{presentation: 'card', headerShown: false}}>
      {Object.keys(appRouters).map((screenName: string) => {
        const screenChild = appRouters[screenName];
        const {options = {}, component = undefined} = screenChild;
        if (component) {
          return (
            <Stack.Screen
              options={{...options}}
              key={screenName}
              name={screenName}
              component={component}
            />
          );
        }
        return (
          <Stack.Screen
            options={{...options}}
            key={screenName}
            name={screenName}
            component={screenChild}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AppStack;
