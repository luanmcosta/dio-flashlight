import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerDark: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    flexDirection: 'column',
  },
  containerWhite: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    flexDirection: 'column',
  },
  imageDio: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain'
  },
  imageFlashlight:{
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: '300',
    marginVertical: 10
  }
});