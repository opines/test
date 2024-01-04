import React from 'react';
import { View } from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Circle,
  Rect,
  Path,
  G,
  Text,
  Mask,
  Use,
  Polygon,
} from 'react-native-svg';

const ComplexSvgDemo = () => {
  return (
    <View>
      <Svg height="300" width="300">
        {/* 定义渐变 */}
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="rgb(255,0,0)" stopOpacity="0.7" />
            <Stop offset="1" stopColor="rgb(0,0,255)" stopOpacity="0.7" />
          </LinearGradient>
        </Defs>

        {/* 添加一个带有渐变的矩形 */}
        <Rect x="10" y="10" width="200" height="100" fill="url(#grad)" />

        {/* 添加一个带有蒙版的圆形 */}
        <Mask id="mask" x="0" y="0" width="100%" height="100%">
          <Rect x="0" y="0" width="100%" height="100%" fill="white" />
          <Circle cx="100" cy="100" r="50" fill="black" />
        </Mask>
        <Circle cx="150" cy="150" r="75" fill="yellow" mask="url(#mask)" />

        {/* 添加一组旋转的星形图案 */}
        <G>
          <Use href="#star" x="50" y="50" fill="purple" />
          <Use href="#star" x="150" y="50" fill="orange" />
          <Use href="#star" x="50" y="150" fill="green" />
          <Use href="#star" x="150" y="150" fill="red" />
        </G>

        {/* 定义星形图案 */}
        <Defs>
          <Polygon
            id="star"
            points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"
            fill="yellow"
          />
        </Defs>

        {/* 添加一条曲线 */}
        <Path d="M10 200 Q 95 250, 200 200" fill="none" stroke="blue" strokeWidth="5" />

        {/* 添加一个文本元素 */}
        <Text x="10" y="280" fontSize="20" fill="black">
          Hello, SVG!
        </Text>
      </Svg>
    </View>
  );
};

export default ComplexSvgDemo;
