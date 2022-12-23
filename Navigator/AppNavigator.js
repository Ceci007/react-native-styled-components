import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{}} />
        <Stack.Screen name="Courses" component={SectionScreen} options={{}} />
        <Stack.Screen name="Projects" component={SectionScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator(TabNavigator);
