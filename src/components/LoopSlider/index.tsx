import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const data = [
  { key: '1', color: '#FF5733', title: 'Slide 1' },
  { key: '2', color: '#FFC300', title: 'Slide 2' },
  { key: '3', color: '#DAF7A6', title: 'Slide 3' },
  { key: '4', color: '#C70039', title: 'Slide 4' },
];

const ITEM_WIDTH = 200;
const ITEM_HEIGHT = 200;
const AUTO_SCROLL_INTERVAL = 500; // in milliseconds

const LoopSlider = () => {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (index + 1) % data.length;
      setIndex(newIndex);
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  const onScroll = event => {
    const { contentOffset } = event.nativeEvent;
    const newIndex = Math.floor(contentOffset.x / ITEM_WIDTH);
    setIndex(newIndex);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: item.color }]}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        snapToInterval={ITEM_WIDTH}
        snapToAlignment="start"
        contentContainerStyle={styles.contentContainer}
        initialScrollIndex={index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: (ITEM_WIDTH - ITEM_HEIGHT) / 2,
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default LoopSlider;
