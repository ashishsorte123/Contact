import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import {CONTACT_LIST} from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  console.log('navigatye :>>', navigate);
  const onChangeText = ({name, value}) => {
    setForm({...form, [name]: value});
  };
  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };
  console.log('loading :>>', loading);
  return (
    <CreateContactComponent
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      form={form}
      setForm={setForm}
      loading={loading}
      error={error}
    />
  );
};

export default CreateContact;
