import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import moment from 'moment';

const LivingChildList = ({
  rows,
  onDelete,
  setEditLivingChildIndex,
  setLivingChildFormOpen,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FIRST NAME</TableCell>
            <TableCell align="right">MIDDLE NAME</TableCell>
            <TableCell align="right">LAST NAME</TableCell>
            <TableCell align="right">DATE OF BIRTH</TableCell>
            <TableCell align="right">EDIT</TableCell>
            <TableCell align="right">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.middleName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">
                {moment(new Date(row.dateOfBirth)).format('MMM Do YY')}
              </TableCell>
              <TableCell align="right">
                <EditIcon
                  style={{ color: '#6660AD', cursor: 'pointer' }}
                  onClick={() => {
                    setEditLivingChildIndex(i);
                    setLivingChildFormOpen(true);
                  }}
                />
              </TableCell>
              <TableCell align="right">
                <DeleteIcon
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => onDelete(i)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LivingChildList;
