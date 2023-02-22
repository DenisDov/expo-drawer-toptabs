import { Box, Text } from '@app/theme';
import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Pressable } from 'react-native';

const segments = [
  { count: 1, label: 'month' },
  { count: 6, label: 'months' },
  { count: 12, label: 'months' },
];

const RIPPLE_CONFIG = {
  color: 'hsl(211, 100%, 40%)',
  borderless: false,
  foreground: true,
};

const SegmentedControl = () => {
  const [selectedSegment, setSelectedSegment] = useState(1);

  const handleSegmentSelect = index => {
    setSelectedSegment(index);
  };

  return (
    <View style={styles.segmentControl}>
      {segments.map((segment, index) => (
        <Pressable
          android_ripple={RIPPLE_CONFIG}
          key={index}
          style={[
            styles.segmentButton,
            index === selectedSegment && styles.selectedSegmentButton,
          ]}
          onPress={() => handleSegmentSelect(index)}>
          <Text style={styles.segmentCount}>{segment.count}</Text>
          <Text style={styles.segmentLabel}>{segment.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  segmentControl: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    borderRadius: 16,
    backgroundColor: 'hsl(211, 100%, 40%)',
  },
  segmentButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    padding: 16,
    borderRadius: 16,
    // overflow: 'hidden',
    backgroundColor: 'hsl(211, 100%, 40%)',
  },
  selectedSegmentButton: {
    borderWidth: 6,
    borderColor: 'white',
    height: 130,
    shadowColor: '#2e2e2e',
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    elevation: 2,
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
