import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";

class ProjectsScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Text>Projects screen</Text>
      </Container>
    );
  }
}

export default ProjectsScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
