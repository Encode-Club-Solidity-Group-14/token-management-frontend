import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0038ff",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "rgba(0,56,255,0.1)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TransactionHistory = ({row}) => {
    console.log(row)
  const { from, to, quantity, time, method, txHash } = row;
  return (
    <StyledTableRow key={from}>
      <StyledTableCell component="th" scope="row">
        {from}
      </StyledTableCell>
      <StyledTableCell align="right">{to}</StyledTableCell>
      <StyledTableCell align="right">{quantity}</StyledTableCell>
      <StyledTableCell align="right">{time}</StyledTableCell>
      <StyledTableCell align="right">{method}</StyledTableCell>
      <StyledTableCell align="right">{txHash}</StyledTableCell>
    </StyledTableRow>
  );
};

export default TransactionHistory;
