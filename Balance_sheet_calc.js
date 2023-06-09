function calculateBalanceSheet(data) {
    const { revenues, expenses } = data;
    const balanceSheet = {};

    // Calculate the total revenue for each month
    for (const revenue of revenues) {
      const { amount, startdate } = revenue;
      const month = getMonthTimestamp(startdate);
      if (!balanceSheet[month]) {
        balanceSheet[month] = { amount: 0, startdate };
      }
      balanceSheet[month].amount += amount;
    }

    // Subtract the total expenses for each month from the balance
    for (const expense of expenses) {
      const { amount, startdate } = expense;
      const month = getMonthTimestamp(startdate);
      if (!balanceSheet[month]) {
        balanceSheet[month] = { amount: 0, startdate };
      }
      balanceSheet[month].amount -= amount;
    }

    // Sort the balance sheet by timestamp in ascending order
    const sortedBalanceSheet = Object.entries(balanceSheet).sort(
      (a, b) => a[0] - b[0]
    );

    // Prepare the output JSON object
    const output = {
      balance: sortedBalanceSheet.map(([timestamp, { amount, startdate }]) => ({
        amount,
        startdate: new Date(Number(timestamp)).toISOString(),
      })),
    };

    // Print the output JSON object to the console
    console.log(JSON.stringify(output));
  }

  function getMonthTimestamp(startdate) {
    const date = new Date(startdate);
    date.setDate(1); // Set day to the first day of the month
    date.setHours(0, 0, 0, 0); // Set time to 00:00:00
    return date.getTime();
  }

  // Example usage
  const jsonData = {
    revenues: [
      { amount: 1200, startdate: '2023-01-01T00:00:00.000Z' },
      { amount: 3500, startdate: '2023-02-01T00:00:00.000Z' },
      { amount: 3500, startdate: '2023-03-01T00:00:00.000Z' },
      { amount: 700, startdate: '2023-04-01T00:00:00.000Z' },
    ],
    expenses: [
      { amount: 400, startdate: '2023-02-05T00:00:00.000Z' },
      { amount: 4000, startdate: '2023-03-10T00:00:00.000Z' },
      { amount: 850, startdate: '2023-04-15T00:00:00.000Z' },
      { amount: 900, startdate: '2023-04-20T00:00:00.000Z' },
    ],
  };

  // Call the function to calculate the balance sheet
  calculateBalanceSheet(jsonData);
