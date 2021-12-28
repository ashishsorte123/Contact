import {
  DELETE_CONTACTS_FAIL,
  DELETE_CONTACTS_LOADING,
  DELETE_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';
import axios from '../../../helpers/axiosInstance';

export default id => dispatch => onSuccess => {
  console.log('id', id);
  dispatch({
    type: DELETE_CONTACTS_LOADING,
  });

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_CONTACTS_SUCCESS,
        payload: id,
      });
      onSuccess(s);
    })
    .catch(err => {
      dispatch({
        type: DELETE_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong , try again'},
      });
    });
};
