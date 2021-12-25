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

    const {contact_picture, first_name, last_name, phone_number} = item;
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
                backgroundColor: colors.grey,
              }}></View>
          )}
          <View style={{flexDirection: 'row'}}>
            <Text>{first_name}</Text>
            <Text>{last_name}</Text>
          </View>
          <Text>{phone_number}</Text>
        </View>
        <Icon name="right" type="ant" />
      </TouchableOpacity>
    );
  };
  return (
    <View>
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
        <FlatList
          renderItem={renderItem}
          data={data}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={ListEmptyComponent}
        />
      )}
    </View>
  );
};

export default ContactsComponent;
