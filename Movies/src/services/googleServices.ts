import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

const googleSignIn = async (setUser, setError, setIsLoading) => {
  try {
    setIsLoading(true);
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    setUser(userInfo.user);
  } catch (error) {
    setError({error});
    console.log('asdasdasdasd');
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
