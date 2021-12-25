import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 140,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  name: {fontSize: 17},
  phoneNumber: {
    opacity: 0.6,
    fontSize: 14,
    paddingVertical: 5,
  },
});
