import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';

const EllipsesDemo = () => {
  const ellipsesData = [
    { cx: 50, cy: 30, rx: 40, ry: 20, stroke: 'black', strokeWidth: 2, fill: 'red' },
    { cx: 100, cy: 80, rx: 20, ry: 30, stroke: 'blue', strokeWidth: 1.5, fill: 'yellow' },
    { cx: 70, cy: 120, rx: 30, ry: 15, stroke: 'green', strokeWidth: 3, fill: 'none' },
  ];

  const ellipses = ellipsesData.map((ellipse, index) => (
    <Ellipse
      key={index}
      cx={ellipse.cx}
      cy={ellipse.cy}
      rx={ellipse.rx}
      ry={ellipse.ry}
      stroke={ellipse.stroke}
      strokeWidth={ellipse.strokeWidth}
      fill={ellipse.fill}
    />
  ));

  return (
    <View style={styles.container}>
      <Svg height="150" width="150">
        {ellipses}
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

export default EllipsesDemo;
