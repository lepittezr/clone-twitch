import { StyleSheet, TextInput } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6440A0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '75%',
    height: 40,
    marginBottom: 30,
    padding: 10,
    borderWidth: 3,
    borderColor: '#917bb7',
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    color: 'purple',
  },
  placeholderText: {
    color: '#6440A0',
  },
  image: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: '#917bb7',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 250,
  },
  inputImg: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  inputImg2: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b2065',
    width: 150,
    height: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,

  },
});