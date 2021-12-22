import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';
import styles from './styles';

const LoginComponent = ({error, onChange, onSubmit, loading}) => {
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
        <Text style={styles.subTitle}>Please login here</Text>

        <View style={styles.form}>
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="Invalid Credentials"
            />
          )}
          {error?.error && <Message danger onDismiss message={error?.error} />}
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            disabled={loading}
            onPress={onSubmit}
            loading={loading}
            primary
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
