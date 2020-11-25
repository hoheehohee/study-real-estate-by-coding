import React, { useState, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { 
  Paper, TableContainer, Table, 
  TableHead, TableRow, TableCell, 
  TableBody, TablePagination 
} from '@material-ui/core';

import lhList from '../hooks/LhList';
import { LhLeaseNoticeInfoRespDTO } from '../service/types';

type Column = {
  id: 'PAN_NM' | 'CNP_CD_NM' | 'PAN_NT_ST_DT' | 'CLSG_DT' | 'UPP_AIS_TP_NM';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [

  { id: 'PAN_NM', label: 'PAN_NM', minWidth: 170 },
  { id: 'CNP_CD_NM', label: 'CNP_CD_NM', minWidth: 100 },
  {
    id: 'PAN_NT_ST_DT',
    label: 'PAN_NT_ST_DT',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'CLSG_DT',
    label: 'CLSG_DT',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'UPP_AIS_TP_NM',
    label: 'UPP_AIS_TP_NM',
    minWidth: 170,
    align: 'right',
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

const LhNoticeInfoList = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const lhLeaseNoticeInfoList = lhList();

  useEffect(() => {
    console.log('### lhLeaseNoticeInfoList: ', lhLeaseNoticeInfoList)
  }, [lhLeaseNoticeInfoList])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {
                (lhLeaseNoticeInfoList && lhLeaseNoticeInfoList.length > 0) && (
                  lhLeaseNoticeInfoList.map((item: LhLeaseNoticeInfoRespDTO) => (
                    <TableRow hover tabIndex={-1} key={item.RNUM}>
                      {
                        columns.map((column) => {
                          const value = item[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {value}
                            </TableCell>
                          )
                        })
                      }
                    </TableRow>
                  ))
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
      </Paper>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '31.25rem',
  },
}));

export default LhNoticeInfoList;