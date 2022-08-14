import {StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Background = props => {
  return (
    <LinearGradient
      colors={['#000000', '#000011', '#434343']}
      style={styles.linearGradient}
      children={props.children}
    />
  );
};

export default Background;

const styles = StyleSheet.create({linearGradient: {flex: 1}});
