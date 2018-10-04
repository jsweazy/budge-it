const expenses = [
  {
    id: "8e5457ccfa094d41b5e11c5281ee2b2e",
    name: "Primary Mortgage",
    amount: "1000.00",
    isRecurring: true,
    category: { name: "Housing", id: "5c574d939471418ab437983b94b58a40" }
  },
  {
    id: "713f519a2b654765b09153e339f389c9",
    name: "Secondary Mortgage",
    amount: "150.00",
    isRecurring: true,
    category: { name: "Housing", id: "5c574d939471418ab437983b94b58a40" }
  },
  {
    id: "c8a36ded683845678c942da697cb1e24",
    name: "Child Care",
    amount: "2500.00",
    isRecurring: true,
    category: { name: "Personal", id: "e19f6f67df544529857dbafaae18a8b1" }
  },
  {
    id: "681ceeae3f99442f98ed412d3d8f6a4d",
    name: "His Pocket Money",
    amount: "200.00",
    isRecurring: true,
    category: { name: "Personal", id: "e19f6f67df544529857dbafaae18a8b1" }
  },
  {
    id: "83bfaaa433e849ea8006412d5b10bace",
    name: "Her Pocket Money",
    amount: "200.00",
    isRecurring: true,
    category: { name: "Personal", id: "e19f6f67df544529857dbafaae18a8b1" }
  },
  {
    id: "a1c4e9b95e1c4b43ad058885ac3d23ae",
    name: "Storage Shed",
    amount: "90.00",
    isRecurring: true,
    category: { name: "Personal", id: "e19f6f67df544529857dbafaae18a8b1" }
  },
  {
    id: "423e0c2a155c4173a8a7fefdf6daad02",
    name: "Education/Tuition",
    amount: "29.00",
    isRecurring: true,
    category: { name: "Personal", id: "e19f6f67df544529857dbafaae18a8b1" }
  },
  {
    id: "1ab641a3cf63440aa090ab95f5c41b71",
    name: "Doug Student Loan 1",
    amount: "188.00",
    isRecurring: true,
    category: { name: "Debts", id: "ef8aaf37bd3244ee8c0cc0abd6317ac3" }
  },
  {
    id: "4ff6c38cd6f046e5850a8928c4aafe95",
    name: "Doug Student Loan 2",
    amount: "254.00",
    isRecurring: true,
    category: { name: "Debts", id: "ef8aaf37bd3244ee8c0cc0abd6317ac3" }
  },
  {
    id: "caac356ba90641eb8d1b50b23a1cdf51",
    name: "Doug Student Loan 3",
    amount: "90.00",
    isRecurring: true,
    category: { name: "Debts", id: "ef8aaf37bd3244ee8c0cc0abd6317ac3" }
  },
  {
    id: "803651aa23354d2dbd9c50b10ab29653",
    name: "Lowe's",
    amount: "340.00",
    isRecurring: true,
    category: { name: "Debts", id: "ef8aaf37bd3244ee8c0cc0abd6317ac3" }
  },
  {
    id: "c4949d1faab649d48d9e501f08f64dfa",
    name: "Best Buy",
    amount: "27.00",
    isRecurring: true,
    category: { name: "Debts", id: "ef8aaf37bd3244ee8c0cc0abd6317ac3" }
  },
  {
    id: "5eb04a14bc6c4b1597f9e1d266199cdb",
    name: "Huntington (Van)",
    amount: "495.00",
    isRecurring: true,
    category: { name: "Debts", id: "ef8aaf37bd3244ee8c0cc0abd6317ac3" }
  },
  {
    id: "8da515498bff44d394869571a60492ad",
    name: "Jess Student Loan",
    amount: "188.00",
    isRecurring: true,
    category: { name: "Debts", id: "ef8aaf37bd3244ee8c0cc0abd6317ac3" }
  },
  {
    id: "3b47d546a98e479d8eda21feb09e1e9b",
    name: "Groceries",
    amount: "1000.00",
    isRecurring: true,
    category: { name: "Food", id: "a37e90235ec54294bff883a11a174ffa" }
  },
  {
    id: "554a0842e22442188325c9cca5ea44fc",
    name: "Eat Out",
    amount: "200.00",
    isRecurring: true,
    category: { name: "Food", id: "a37e90235ec54294bff883a11a174ffa" }
  },
  {
    id: "0713d15b11264b788ab06d6e1ea6f46f",
    name: "Fuel",
    amount: "250.00",
    isRecurring: true,
    category: { name: "Transportation", id: "56d3031f726a4cad8f89883946e43c1a" }
  },
  {
    id: "dfc47c0b6e5e44b192835769338061b1",
    name: "Oil Change",
    amount: "125.00",
    isRecurring: false,
    category: { name: "Transportation", id: "56d3031f726a4cad8f89883946e43c1a" }
  },
  {
    id: "ea188662cab6471e8da51b104f75694d",
    name: "New Tires For Car",
    amount: "740.00",
    isRecurring: false,
    category: { name: "Transportation", id: "56d3031f726a4cad8f89883946e43c1a" }
  }
];

export function getExpenses() {
  return expenses;
}

export function getExpense(expenseId) {
  return expenses.find(e => e.id === expenseId);
}
