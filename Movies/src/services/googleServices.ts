import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

const googleSignIn = async (setUser, setError, setIsLoading) => {
  try {
    setIsLoading(true);
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();
    console.log('asdasdasd', {userInfo});
    setUser({userInfo});
  } catch (error) {
    setError({error});
  }
  setIsLoading(false);
};

const googleSignOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (error) {}
};

export {googleSignIn, googleSignOut};
