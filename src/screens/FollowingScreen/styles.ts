import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  following: {
    fontSize: 33,
    marginLeft: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    marginLeft: 15,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 8,
  },
  liveChannel: {
    fontSize: 16,
    marginLeft: 12,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
  },
  barraNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#DCDCDC', 
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    color: '#6440a0'
  },
  label: {
      fontSize: 12,
      color: '#000000',
      marginTop: 4,
  },
  followingText: {
    color: '#6440a0',
  },
});