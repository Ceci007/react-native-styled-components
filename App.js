import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import CoursesScreen from "./screens/CoursesScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import SectionScreen from "./screens/SectionScreen";

const initialState = {
  action: "",
  name: "",
};

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/s3yfkrzw80jy",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer qqGfkHQ_cymHKorv4ty9MX99ydg8GxDqjPlOccIjgbc`,
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return state;
  }
};

const store = createStore(reducer);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Courses") {
            iconName = focused ? "ios-albums" : "ios-albums-outline";
          } else if (route.name === "Projects") {
            iconName = focused ? "ios-folder" : "ios-folder-outline";
          }
          return <Ionicons name={iconName} size={26} color={color} />;
        },
        tabBarActiveTintColor: "#4775f2",
        tabBarInactiveTintColor: "#b8bece",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CoursesScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
    </Tab.Navigator>
  );
}

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home Tabs" component={HomeTabs} />
          <Stack.Screen
            /*options={{ presentation: "modal" }}*/
            name="Section"
            component={SectionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </ApolloProvider>
);

export default App;
