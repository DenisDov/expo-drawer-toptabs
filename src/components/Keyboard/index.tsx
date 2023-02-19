import { Text, Box } from '@app/theme';
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const Keyboard = ({ onKeyPress }) => {
  const handleKeyPress = (key: string) => {
    onKeyPress(key);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleKeyPress('1')}
          style={styles.key}>
          <Text style={styles.keyText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleKeyPress('2')}
          style={styles.key}>
          <Text style={styles.keyText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleKeyPress('3')}
          style={styles.key}>
          <Text style={styles.keyText}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleKeyPress('4')}
          style={styles.key}>
          <Text style={styles.keyText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleKeyPress('5')}
          style={styles.key}>
          <Text style={styles.keyText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleKeyPress('6')}
          style={styles.key}>
          <Text style={styles.keyText}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleKeyPress('7')}
          style={styles.key}>
          <Text style={styles.keyText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleKeyPress('8')}
          style={styles.key}>
          <Text style={styles.keyText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleKeyPress('9')}
          style={styles.key}>
          <Text style={styles.keyText}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleKeyPress('*')}
          style={styles.key}>
          <Text style={styles.keyText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleKeyPress('0')}
          style={styles.key}>
          <Text style={styles.keyText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleKeyPress('#')}
          style={styles.key}>
          <Text style={styles.keyText}>#</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  key: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export { Keyboard };
