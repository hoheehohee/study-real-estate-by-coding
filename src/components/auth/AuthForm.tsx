import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box, TextField, Grid, Button } from '@material-ui/core';

import { LoginDto } from 'lib/dto/auth';

interface Props {
  form: LoginDto;
  onSubmit(e: any): void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const AuthForm = ({ form, onChange, onSubmit }: Props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" color="inherit" gutterBottom>
        <Box fontWeight="fontWeightBold">
          로그인
        </Box>
      </Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        <TextField 
          fullWidth 
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <TextField 
          fullWidth
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={onChange}
        />
        <Grid className={classes.btnGrid}  container>
          <Grid item xs={12}>
            <Button type="submit" className="default-btn" variant="outlined" fullWidth>로그인</Button>
          </Grid>
        </Grid>
      </form>
      <Grid container direction="row" justify="flex-end" alignItems="center" >
        <Link className="link-btn" to="/register">
          <h3>회원가입</h3>
        </Link>
      </Grid>
    </div>
  );
};
const useStyles = makeStyles((theme: Theme) => ({
  form: {
    '& .MuiTextField-root': {
      padding: '1rem 0'
    }
  },
  btnGrid: {
    padding: '1rem 0'
  }
}));

export default AuthForm;