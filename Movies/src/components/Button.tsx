import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

const Button = ({icon, text, style, onPress, isLoading = false}: any) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
      {icon && (
        <Image
          source={{
            uri: icon,
          }}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
  },
  icon: {
    marginLeft: 10,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default Button;
