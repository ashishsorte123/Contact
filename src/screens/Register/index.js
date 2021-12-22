import React, {useEffect, useState} from 'react';
import RegisterComponent from '../../components/Signup';
import envs from '../../config/env';
import axiosInstance from '../../helpers/axiosInstance';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  // const {BACKEND_URL} = envs;
  // console.log('BACKEND_URL :>>', BACKEND_URL);
  // console.log('__DEV__', __DEV__);

  React.useEffect(() => {
    axiosInstance.get('/contacts').catch(err => {
      console.log('err', err);
    });
  }, []);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 6 characters'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    console.log('form :>>', form);

    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a last name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }
  };

  return (
    <RegisterComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
