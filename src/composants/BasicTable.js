import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme } from '@emotion/react';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Eau plate ou gazeuse non sucrée', 0),
  createData('Tisane non sucrée', 0),
  createData('thé non sucré',0),
  createData('Café non sucré', 0),
  createData('Jus de légumes', 29),
  createData('Jus de fruits', 54),

];

export default function BasicTable() {


    const theme= useTheme(); 

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth:{md: 500, sm:200}  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>  <b>Boisson (100g en moyenne)</b>  </TableCell>
            <TableCell align="right"> <b> Calories(kcal)</b> </TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}