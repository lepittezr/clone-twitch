import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  liveChannel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
  },
  text: {
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  image: {
    width: 140,
    height: 80,
    marginRight: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888888',
  },
  game: {
    fontSize: 14,
    color: '#888888',
  },
  tagContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 8,
    borderRadius: 10,
    marginRight: 5,
    marginTop: 5,
    fontSize: 10,
  },
});


export default styles;