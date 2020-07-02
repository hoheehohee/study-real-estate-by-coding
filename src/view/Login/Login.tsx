import React from 'react';

import LoginForm from 'containers/auth/LoginForm';
import AuthTemplate from 'components/auth/AuthTemplate';
const Login = () => {
  // const dispatch = useDispatch();
  
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default Login;