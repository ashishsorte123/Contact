import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';

const RegisterComponent = ({form, errors, onChange, onSubmit}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to Contacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            error={errors.userName}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />
          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter First name"
            error={errors.firstName}
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last name"
            error={errors.lastName}
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter email"
            error={errors.email}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            error={errors.password}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton onPress={onSubmit} primary title="Submit" />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
