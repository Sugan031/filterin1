import React from 'react';
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    tableCellClasses,
  } from "@mui/material";
  import { styled } from "@mui/system";

const ReferenceBaseTable = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: "blue",
          color: "white",
          border: "1px solid hsl(0,0%,80%)",
          borderTopStyle: "none",
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
  return (
    <Grid item xs={6} width="50%" mt={3}>
    <TableContainer
      style={{
        overflowX: "auto",
        border: "1px solid hsl(0,0%,80%)",
        borderRadius: "10px",
        borderLeftStyle: "none",
        borderRightStyle: "none",
      }}
    >
      <Table
        sx={{
          minWidth: 600,
        }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow style={{ minHeight: "5px", height: "10px" }}>
            {/* {HotelSearchColumn.map((column) => ( */}
              <StyledTableCell className="tableRow">
                {/* {column.headerName} */}
              </StyledTableCell>
            {/* // ))} */}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {/* {HotelSearchColumn.map((column) => ( */}
              <TableCell
                style={{
                  border: "1px solid hsl(0,0%,80%)",
                  borderBottomStyle: "none",
                }}
              ></TableCell>
            {/* ))} */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
  )
}

export default ReferenceBaseTable