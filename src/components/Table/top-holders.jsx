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

const TopHolders = ({row}) => {
  const { address, quantity, percentage, usdValue } = row;
  return (
    <StyledTableRow key={address}>
      <StyledTableCell component="th" scope="row">
        {address}
      </StyledTableCell>
      <StyledTableCell align="center">{quantity}</StyledTableCell>
      <StyledTableCell align="center">{percentage}</StyledTableCell>
      <StyledTableCell align="center">{usdValue}</StyledTableCell>
    </StyledTableRow>
  );
};

export default TopHolders;
