import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, G, Path } from 'react-native-svg';

const HueColorCircle = ({ size, onColorChange, initialColor }) => {
  const radius = size / 2;
  const strokeWidth = 10;
  const cx = radius + strokeWidth / 2;
  const cy = radius + strokeWidth / 2;

  const colors = [
    '#ff0000', // red
    '#ffff00', // yellow
    '#00ff00', // green
    '#00ffff', // cyan
    '#0000ff', // blue
    '#ff00ff', // magenta
    '#ff0000', // red (again)
  ];

  const colorToPath = (color, index) => {
    const angle = (index / colors.length) * Math.PI * 2;
    const x = Math.cos(angle) * radius + cx;
    const y = Math.sin(angle) * radius + cy;
    return `M ${cx} ${cy} L ${x} ${y}`;
  };

  const onCirclePress = event => {
    const x = event.nativeEvent.locationX;
    const y = event.nativeEvent.locationY;
    const distance = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
    const angle = Math.atan2(y - cy, x - cx);
    const index =
      Math.round((angle / Math.PI / 2 + 0.25) * colors.length) % colors.length;
    const color = colors[index];
    onColorChange && onColorChange(color);
  };

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        <Circle
          cx={cx}
          cy={cy}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          stroke="black"
        />
        <G onPress={onCirclePress}>
          {colors.map(colorToPath).map((path, index) => (
            <Path
              key={index}
              d={path}
              stroke={colors[index]}
              strokeWidth={strokeWidth}
            />
          ))}
        </G>
      </Svg>
    </View>
  );
};

export default HueColorCircle;
