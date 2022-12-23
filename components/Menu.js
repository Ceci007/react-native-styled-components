import React from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MenuItem from "./MenuItem";

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU",
      }),
  };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: new Animated.Value(screenHeight),
    };
  }

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 54,
        useNativeDriver: false,
      }).start();
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Welcome {this.props.name}</Title>
          <Subtitle>Designer at design + code</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1,
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={34} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Container = styled.View`
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: #000;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: ${screenHeight}px;
  background: #f0f3f5;
  padding: 50px;
`;

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings",
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "payments",
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "start course",
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!",
  },
];
