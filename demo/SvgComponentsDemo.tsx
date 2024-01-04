import React from 'react';
import { View } from 'react-native';
import Svg, {
  Defs,
  Mask,
  Use,
  G,
  Path,
  Polygon,
  Circle,
  LinearGradient,
  Stop,
  Rect,
} from 'react-native-svg';

const SvgComponentsDemo = () => {
  return (
    <View>
      <Svg height="200" width="200">
        {/* 定义渐变 */}
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="rgb(255,0,0)" stopOpacity="0.7" />
            <Stop offset="1" stopColor="rgb(0,0,255)" stopOpacity="0.7" />
          </LinearGradient>
        </Defs>

        {/* 使用渐变的矩形 */}
        <Rect x="10" y="10" width="150" height="150" fill="url(#grad)" />

        {/* 使用 Mask 的圆形 */}
        <Mask id="mask" x="0" y="0" width="100%" height="100%">
          <Rect x="0" y="0" width="100%" height="100%" fill="white" />
          <Circle cx="100" cy="100" r="50" fill="black" />
        </Mask>
        <Circle cx="150" cy="150" r="75" fill="yellow" mask="url(#mask)" />

        {/* 使用其他图形元素 */}
        <Use href="#grad" />
        <G>
          <Path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent" />
        </G>
        <Polygon points="40,40 40,140 140,140" fill="lime" />
      </Svg>
    </View>
  );
};

export default SvgComponentsDemo;
