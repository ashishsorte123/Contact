import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import Icon from '../../components/common/Icon';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';

const ContactDetail = () => {
  const {params: {item = {}} = {}} = useRoute();
  console.log('item', item);
  const {setOptions} = useNavigation();

  React.useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', paddingRight: 20}}>
              <TouchableOpacity>
                <Icon
                  size={21}
                  color={colors.grey}
                  name={item.is_favorite ? 'star' : 'star-border'}
                  type="material"
                />
              </TouchableOpacity>
              <TouchableOpacity style={{paddingLeft: 20}}>
                <Icon
                  size={21}
                  color={colors.grey}
                  name="delete"
                  type="material"
                />
              </TouchableOpacity>
            </View>
          );
        },
      });
    }
  }, [item]);
  return <ContactDetailsComponent contact={item} />;
};

export default ContactDetail;
