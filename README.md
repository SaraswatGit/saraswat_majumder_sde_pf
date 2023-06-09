# Balance Sheet Calculator

This JavaScript program takes a JSON object containing revenue and expense data for a company and calculates the balance sheet month-wise.

## Table of Contents

- [Usage](#usage)
- [Input Format](#input-format)
- [Output Format](#output-format)
- [Example](#example)

## Usage

To use the balance sheet calculator, follow these steps:

1. Open the `Balance_sheet_calc.js` file in a text editor or JavaScript IDE.
2. Update the `jsonData` object in the code with your revenue and expense data.
3. Save the changes.
4. In the terminal, navigate to the directory where the code files are located.
5. Run the following command to execute the program:

   ```bash
   node balance-sheet.js
   ```

6. The program will calculate the balance sheet and output the result to the console.

## Input Format

The input JSON object should have the following structure:

```json
{
  "revenues": [
    {
      "amount": 1000,
      "startdate": "2023-01-01T00:00:00.000Z"
    },
    {
      "amount": 1500,
      "startdate": "2023-02-01T00:00:00.000Z"
    },
  ],
  "expenses": [
    {
      "amount": 500,
      "startdate": "2023-02-05T00:00:00.000Z"
    },
    {
      "amount": 1000,
      "startdate": "2023-03-10T00:00:00.000Z"
    },
  ]
}
```

The `revenues` array contains objects representing revenue entries, with each object having an `amount` and a `startdate`. The `expenses` array follows the same structure, representing expense entries.

## Output Format

The output of the program is a JSON object with the following structure:

```json
{
  "balance": [
    {
      "amount": 2500,
      "startdate": "2023-01-01T00:00:00.000Z"
    },
    {
      "amount": 4000,
      "startdate": "2023-02-01T00:00:00.000Z"
    },
    ...
  ]
}
```

The `balance` array contains objects representing the balance for each month. Each object has an `amount` field representing the calculated balance for the month and a `startdate` field with the start date of the month.

## Example

Here's an example usage of the balance sheet calculator:

```javascript
const jsonData = {
  "revenues": [
    { "amount": 1000, "startdate": "2023-01-01T00:00:00.000Z" },
    { "amount": 1500, "startdate": "2023-02-01T00:00:00.000Z" },
    { "amount": 2000, "startdate": "2023# saraswat_majumder_sde_pf
