import {View, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Welcome from '../components/Welcome';
import {setHeight} from '../helpers/screenSize';
import {googleSignIn, googleSignOut} from '../services/googleServices';
import {facebookSignIn} from '../services/facebookServices';
import {useDispatch} from 'react-redux';
import {setUser} from '../features/userSlice';

export default function Login() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userState, setUserState] = React.useState();
  const [error, setError] = React.useState(null);
  const dispatch = useDispatch();

  const googleOnPress = () => {
    googleSignIn(setUserState, setError, setIsLoading);
    // googleSignOut();
    // console.log(userState);
    dispatch(setUser(userState));
  };
  const facebookOnPress = () => {
    facebookSignIn(setUserState, setError);
    dispatch(setUser(userState));
  };

  return (
    <View style={styles.container}>
      <Welcome
        userName={'Stranger'}
        icon={
          'https://i.pinimg.com/564x/bf/4f/cf/bf4fcfa30745e85971abbd9514eb9126.jpg'
        }
        applicationName={'awesomness'}
      />
      <View style={styles.loginButton}>
        <Button
          text={'or with Google'}
          icon={
            'https://github.com/safak/youtube/blob/react-social-login/client/src/img/google.png?raw=true'
          }
          style={styles.googleButton}
          onPress={googleOnPress}
        />
        <Button
          text={'login with Facebook'}
          icon={
            'https://github.com/safak/youtube/blob/react-social-login/client/src/img/facebook.png?raw=true'
          }
          onPress={facebookOnPress}
          style={styles.facebookButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  loginButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: setHeight(6),
    marginBottom: 10,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#df4930',
    borderRadius: 15,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  facebookButton: {
    flexDirection: 'row',
    backgroundColor: '#507cc0',
    borderRadius: 15,
    margin: 2,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
