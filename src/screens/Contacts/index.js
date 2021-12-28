import {useNavigation, useFocusEffect} from '@react-navigation/native';
import React, {useState, useContext, useEffect, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../../navigations/SideMenu/RootNavigator';
import {CONTACT_DETAIL} from '../../constants/routeNames';

const Contacts = ({navigation}) => {
  const [sortBy, setSortBy] = React.useState(null);
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const contactsRef = useRef(false);
  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading, error},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  console.log('sortBy', sortBy);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    console.log('sortPref :>>', sortPref);
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getSettings();
      return () => {};
    }, []),
  );

  useEffect(() => {
    contactsRef.current = true;
    return () => {
      contactsRef.current = false;
    };
  }, []);

  useEffect(() => {
    const prev = contactsRef.current;
    contactsRef.current = data;
    const newList = contactsRef.current;
    if (newList.length - prev.length === 1) {
      const newContact = newList.find(
        item => !prev.map(i => i.id).includes(item.id),
      );
      navigate(CONTACT_DETAIL, {item: newContact});
    }
  }, [data.length]);

  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" style={{padding: 10}} size={25} name="menu" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      loading={loading}
      data={data}
      sortBy={sortBy}
    />
  );
};

export default Contacts;
