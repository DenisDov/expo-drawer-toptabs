import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const images = [
  { id: 1, source: require('./assets/1.jpg') },
  { id: 2, source: require('./assets/2.jpg') },
  { id: 3, source: require('./assets/3.jpg') },
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = React.useRef(({ viewableItems, changed }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <Image source={item.source} style={styles.image} resizeMode="cover" />
        )}
      />
      <View style={styles.pagination}>
        {images.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === currentIndex ? styles.activeDot : null]}
          />
        ))}
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: 200,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#c4c4c4',
  },
});
