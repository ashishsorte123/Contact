import React, {useState} from 'react';
import RegisterComponent from '../../components/Signup';

const Register = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      setError(prev => {
        return {...prev, [name]: null};
      });
    }
  };
  const onSubmit = () => {
    if (!form.userName) {
      setError(prev => {
        return {...prev, userName: 'Please add a username'};
      });
    }
    if (!form.firstName) {
      setError(prev => {
        return {...prev, firstName: 'Please add a firstname'};
      });
    }
    if (!form.lastName) {
      setError(prev => {
        return {...prev, lastName: 'Please add a lastname'};
      });
    }
    if (!form.email) {
      setError(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setError(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
    />
  );
};

export default Register;
