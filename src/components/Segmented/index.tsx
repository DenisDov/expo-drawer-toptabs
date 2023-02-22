import { Box, Text } from '@app/theme';
import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const segments = [
  { count: 1, label: 'month' },
  { count: 6, label: 'months' },
  { count: 12, label: 'months' },
];

const SegmentedControl = () => {
  const [selectedSegment, setSelectedSegment] = useState(1);

  const handleSegmentSelect = index => {
    setSelectedSegment(index);
  };

  return (
    <View style={styles.segmentControl}>
      {segments.map((segment, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.segmentButton,
            index === selectedSegment && styles.selectedSegmentButton,
          ]}
          onPress={() => handleSegmentSelect(index)}>
          <Text style={styles.segmentCount}>{segment.count}</Text>
          <Text style={styles.segmentLabel}>{segment.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  segmentControl: {
    flexDirection: 'row',
    height: 100,
    borderRadius: 16,
    // overflow: 'hidden',
    backgroundColor: 'hsl(211, 100%, 50%)',
    alignItems: 'center',
  },
  segmentButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    // backgroundColor: 'red',
    padding: 16,
    borderRadius: 16,
  },
  selectedSegmentButton: {
    backgroundColor: '#007aff',
    borderWidth: 6,
    borderColor: 'yellow',
    height: 130,
    // marginTop: -12,
    // marginBottom: -12,
    // transform: [{ scale: 1.2 }],
  },
  segmentCount: {
    fontSize: 34,
    color: '#ffc96c',
  },
  segmentLabel: {
    color: '#F0F2F3',
  },
});

export default SegmentedControl;
