import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';
import Message from '../common/Message';
import styles from './styles';

const ContactsComponent = ({modalVisible, data, loading, setModalVisible}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 90}}>
        <Message info message="No contacts to show" />
      </View>
    );
  };
  const renderItem = ({item}) => {
    console.log('item', item);

    const {contact_picture, first_name, last_name, country_code, phone_number} =
      item;
    console.log('contact_picture', contact_picture);
    // https://avatars0.githubusercontent.com/u/20795487?s=460&u=c86c6d0f346c95cb8df85ffa596fd90ad8aa14a8&v=4
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {contact_picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: contact_picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.grey,
                borderRadius: 100,
              }}>
              <Text style={[styles.name, {color: colors.white}]}>
                {first_name[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]} s>
                {last_name[0]}
              </Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name}</Text>
              <Text style={styles.name}>{last_name}</Text>
            </View>
            <Text
              style={
                styles.phoneNumber
              }>{`${country_code} ${phone_number} `}</Text>
          </View>
        </View>
        <Icon name="right" type="ant" size={18} color={colors.grey} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{backgroundColor: colors.white}}>
      <AppModal
        title="My Profile"
        modalBody={
          <View>
            <Text>Hello from model</Text>
          </View>
        }
        modalFooter={<></>}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      {loading && (
        <View style={{paddingVertical: 100, paddingHorizontal: 90}}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>
      )}
      {!loading && (
        <View style={[{paddingVertical: 20}]}>
          <FlatList
            renderItem={renderItem}
            data={data}
            ItemSeparatorComponent={() => (
              <View style={{height: 0.5, backgroundColor: colors.grey}}></View>
            )}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height: 100}}></View>}
          />
        </View>
      )}
    </View>
  );
};

export default ContactsComponent;
