import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box, TextField, Grid, Button } from '@material-ui/core';

const AuthForm = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" color="inherit" gutterBottom>
        <Box fontWeight="fontWeightBold">
          로그인
        </Box>
      </Typography>
      <form className={classes.form}>
        <TextField placeholder="아이디" fullWidth />
        <TextField placeholder="비밀번호" fullWidth />
      </form>
      <Grid className={classes.btnGrid}  container>
        <Grid item xs={12}>
          <Button className="default-btn" variant="outlined" fullWidth>로그인</Button>
        </Grid>
      </Grid>
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