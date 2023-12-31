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
    marginBottom: 7,
    position: 'relative',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5,
    
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
    marginTop: 4,
    fontSize: 10,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },
  iconCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    marginRight: 4,
  },
  iconText: {
    color: 'white',
    fontSize: 10,
  },
  userImageContainer: {
    marginRight: 10,
    justifyContent: 'flex-start',
  },
  userImage: {
    width: 20,
    height: 20,
    borderRadius: 15,
    marginTop: 2,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 2,
    
  }
});

export default styles;
