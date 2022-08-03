function createData(from, to, quantity, time, method, txHash) {
    return { from, to, quantity, time, method, txHash};
  }
  
  export const rows = [
    createData(
      "0x06fD032590756B8650ACCF10C3580b79BD5F4039",
      "3,529,066,969",

      "7.33%",
      "$3,529,066",
    ),
  ]
  
//   .sort((a, b) => (a.calories < b.calories ? -1 : 1));
  
  export const holdersHeaders = ["Address", "Quantity", "Percentage", "USD Value" ]
  