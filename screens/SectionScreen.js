import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";

class SectionScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Text>Section screen</Text>
        <Button
          title="close"
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
