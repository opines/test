import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const viewBoxValues = [
    "0 0 100 100",
    "5 5 100 100",
    "25 25 100 100",
    "10 10 50 50",
    "-50 -50 150 150",
    "0 0 150 150",
];

const RectanglesWithDifferentViewBoxes = () => {
    return (
        <View style={styles.container}>
            {viewBoxValues.map((viewBox, index) => (
                <View>
                    <Text>{viewBox}</Text>
                    <Svg
                        key={index}
                        width="100"
                        height="100"
                        viewBox={viewBox}
                        style={styles.svg}
                    >
                        <Path
                            d="M 50,10 L 90,90 L 10,90 Z"
                            fill="none"
                            stroke="blue"
                            strokeWidth="5"
                        />
                    </Svg>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        // justifyContent: 'space-around',
        // alignItems: 'center',
        marginTop: 50,
    },
    svg: {
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'red'
    },
});

export default RectanglesWithDifferentViewBoxes;
