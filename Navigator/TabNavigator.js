import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createNativeStackNavigator();
/*
HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Section") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    ),
  };
};*/

const CoursesStack = createNativeStackNavigator();
/*
CoursesStack.navigationOptions = {
  tabBarLabel: "Course",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-albums"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};*/

const ProjectsStack = createNativeStackNavigator();

/*
ProjectsStack.navigationOptions = {
  tabBarLabel: "Projects",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-folder"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};*/

const Tab = createBottomTabNavigator();

function TabNavigator() {
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
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#4775f2",
        inactiveTintColor: "#b8bece",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={SectionScreen} />
      <Tab.Screen name="Projects" component={SectionScreen} />
    </Tab.Navigator>
  );
}
export default TabNavigator;
