import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CirclesDemo = () => {
  const circlesData = [
    { cx: 30, cy: 30, r: 20, stroke: 'black', strokeWidth: 2, fill: 'red' },
    { cx: 80, cy: 60, r: 30, stroke: 'blue', strokeWidth: 1.5, fill: 'yellow' },
    { cx: 50, cy: 90, r: 15, stroke: 'green', strokeWidth: 3, fill: 'none' },
  ];

  const circles = circlesData.map((circle, index) => (
    <Circle
      key={index}
      cx={circle.cx}
      cy={circle.cy}
      r={circle.r}
      stroke={circle.stroke}
      strokeWidth={circle.strokeWidth}
      fill={circle.fill}
    />
  ));

  return (
    <View style={styles.container}>
      <Svg height="120" width="120">
        {circles}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CirclesDemo;
