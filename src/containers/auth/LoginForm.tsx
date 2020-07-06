import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFiled, initializeForm, login } from 'modules/auth';

import { LoginDto } from 'lib/dto/auth';
import AuthForm from 'components/auth/AuthForm';

const LoginForm = () => {
  const { useEffect, useState } = React;
  const [error, setError] = useState<string>('');
  // useDispatch: 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해줌.
  const dispatch = useDispatch();
  // useSelector: connect 함수를 사용하지 않고도 리덕스의 상태를 조회할 수 있다.
  const { form, auth, authError } = useSelector(({ auth }: any) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError
  }));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(
      changeFiled({
        form: 'login',
        key: name,
        value
      })
    );
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const params: LoginDto = {
      password: form.password,
      username: form.username
    };

    dispatch(login(params));
  }

  useEffect(() => {
    dispatch(initializeForm('login'))
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('%c##### Error: ', 'color: red', authError);
      setError('로그인 실패');
    }

    if (auth) {
      
    }
  }, [auth, authError, dispatch])

  return (
    <AuthForm 
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default LoginForm;