import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
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
      <CustomButton
        title="Open Modal"
        secondary
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default ContactsComponent;
