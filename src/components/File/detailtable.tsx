import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(field: string, type: string) {
  return { field, type };
}

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      border: "1px solid grey",
      backgroundColor: '#24303C',
    },
  },
  tablevalue: {
    color: theme.palette.common.white,
  },
}));
const rows = [
  createData("date", "date"),
  createData("device_type", "character varying"),
  createData("country", "character varying"),
  createData("sessions", "integer"),
  createData("revenue", "integer"),
];

export default function BasicTable() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tablevalue}>Field</TableCell>
            <TableCell className={classes.tablevalue} align="right">
              Type
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.field}>
              <TableCell
                className={classes.tablevalue}
                component="th"
                scope="row"
              >
                {row.field}
              </TableCell>
              <TableCell className={classes.tablevalue} align="right">
                {row.type}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
