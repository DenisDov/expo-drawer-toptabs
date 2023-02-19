import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import OnboardingItem from './OnboardingItem';
import { data } from './data';

const OnboardingSlider = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const renderItem = ({ item }) => <OnboardingItem item={item} />;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < data.length - 1) {
        flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        setCurrentIndex(currentIndex + 1);
      } else {
        flatListRef.current.scrollToIndex({ index: 0 });
        setCurrentIndex(0);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      bounces={false}
      onMomentumScrollEnd={event => {
        const index = Math.round(
          event.nativeEvent.contentOffset.x /
            event.nativeEvent.layoutMeasurement.width,
        );
        setCurrentIndex(index);
      }}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
  },
});

export { OnboardingSlider };
