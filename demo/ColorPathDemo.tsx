import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ColorPathDemo = () => {
    const [pathColor, setPathColor] = useState('red');
    const [pathData, setPathData] = useState("M10 80 Q 52.5 10, 95 80 T 180 80 V 160 Q 137.5 230, 95 160 T 10 160 Z");

    const changeColor = () => {
        const newColor = pathColor === 'red' ? 'blue' : 'red';
        setPathColor(newColor);
    };

    const changePath = () => {
        const newPathData =
            pathData === "M10 80 Q 52.5 10, 95 80 T 180 80 V 160 Q 137.5 230, 95 160 T 10 160 Z"
                ? ''
                : "M10 80 Q 52.5 10, 95 80 T 180 80 V 160 Q 137.5 230, 95 160 T 10 160 Z";
        setPathData(newPathData);
    };

    return (
        <View style={{ alignItems: 'center' }}>
            <Svg height="200" width="200" color={pathColor}>
                <Path
                    d={pathData == '' ? undefined : pathData}
                    fill="currentColor"
                    stroke="black"
                    strokeWidth="2"
                />
            </Svg>
            <TouchableOpacity onPress={changeColor}>
                <View style={{ padding: 10, backgroundColor: 'lightgray', marginTop: 20 }}>
                    <Text>Change Path Color</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={changePath}>
                <View style={{ padding: 10, backgroundColor: 'lightgray', marginTop: 20 }}>
                    <Text>Change Path Shape</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ColorPathDemo;
