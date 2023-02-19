import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const OnboardingItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.illustration,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: '50%',
    width: '80%',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 16,
    color: '#1f2e47',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#5a6578',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});

export default OnboardingItem;
