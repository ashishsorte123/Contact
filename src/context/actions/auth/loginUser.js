import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({password, userName: username}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post('auth/login', {password, username})
      .then(res => {
        console.log('res.data :>>', res.data);
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.token));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong , try again'},
        });
      });
  };
