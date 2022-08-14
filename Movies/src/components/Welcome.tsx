import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {setHeight, setWidth} from '../helpers/screenSize';

const Welcome = ({icon, userName, applicationName}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.upperText}>Welcome {userName} !</Text>
      <Image
        source={{
          uri: icon,
        }}
        style={styles.icon}
      />
      <Text style={styles.bottomText}>
        Please log in to continue to the {applicationName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  icon: {
    width: setWidth(30),
    height: setHeight(15),
    borderRadius: 60,
    resizeMode: 'contain',
  },
  bottomText: {
    textAlign: 'center',
    width: setWidth(50),
    color: 'black',
    fontSize: 15,
    // fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Welcome;
