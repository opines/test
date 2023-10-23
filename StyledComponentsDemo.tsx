import React from 'react';
import {
    StyleSheet,
    Button,
    View,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
  `;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  `;

const StyledButton = styled(Button)`
    background-color: #007AFF;
    color: #fff;
  `;

const StyledComponentsDemo = () => {
    return (
        <Container>
            <Title>Styled-Components Demo</Title>
            <StyledButton title="Click Me" onPress={() => alert('Button Clicked')} />
        </Container>
    );
};

function App(): JSX.Element {
    return (
        <View style={styles.container}>
            <StyledComponentsDemo />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
