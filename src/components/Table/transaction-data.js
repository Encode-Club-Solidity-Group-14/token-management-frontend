export function createData(from, to, quantity, time, method, txHash) {
  return { from, to, quantity, time, method, txHash };
}

export const transactionHistoryHeaders = [
  "From",
  "To",
  "Quantity",
  "Time",
  "Method",
  "Tx Hash",
];
