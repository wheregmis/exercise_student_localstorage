import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentListScreen from "./Screen/StudentListScreen";
import StudentInfoInputScreen from "./Screen/StudentInfoInputScreen";
import ProgramInfoInputScreen from "./Screen/ProgramInfoInputScreen";
import ChoiceInfoInputScreen from "./Screen/ChoiceInfoInputScreen";
import StudentDetailScreen from "./Screen/StudentDetailScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StudentListScreen">
        <Stack.Screen
          name="StudentListScreen"
          component={StudentListScreen}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StudentDetailScreen"
          component={StudentDetailScreen}
          options={
            {
              // headerBackVisible: false,
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="StudentInfoInputScreen"
          component={StudentInfoInputScreen}
          options={
            {
              // headerBackVisible: false,
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="ProgramInfoInputScreen"
          component={ProgramInfoInputScreen}
          options={
            {
              // headerBackVisible: false,
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="ChoiceInfoInputScreen"
          component={ChoiceInfoInputScreen}
          options={
            {
              // headerBackVisible: false,
              // headerShown: false,
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
