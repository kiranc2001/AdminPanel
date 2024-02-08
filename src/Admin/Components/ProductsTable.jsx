import React from 'react'
import TableContainer from '@mui/material/TableContainer'; // Import TableContainer component
import Paper from '@mui/material/Paper'; // Import Paper component
import Table from '@mui/material/Table'; // Import Table component
import TableHead from '@mui/material/TableHead'; // Import TableHead component
import TableRow from '@mui/material/TableRow'; // Import TableRow component
import TableCell from '@mui/material/TableCell'; // Import TableCell component
import TableBody from '@mui/material/TableBody'; // I
const ProductsTable= () => {
    return (
        <div className=''>
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
export default ProductsTable