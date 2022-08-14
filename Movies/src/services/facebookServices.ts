import {LoginManager} from 'react-native-fbsdk-next';

const facebookSignIn = (setUser, setError) => {
  LoginManager.logInWithPermissions(['public_profile']).then(
    result => {
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        setUser(true);
      }
    },
    error => {
      console.log('Login fail with error: ' + error);
      setError(error);
    },
  );
};

export {facebookSignIn};
