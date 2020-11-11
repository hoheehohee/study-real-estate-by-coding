import React from 'react';
import { Table, TableHead, TableCell, TableRow, TableContainer, Paper, TableBody } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const SampleTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert </TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  table: {
    // minWidth: 650,
  }
}));

export default SampleTable;