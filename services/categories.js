const categories = [
  { name: "Savings", id: "1a7ad79a3af74f7aa6fbdeec2edee4d1" },
  { name: "Housing", id: "5c574d939471418ab437983b94b58a40" },
  { name: "Food", id: "a37e90235ec54294bff883a11a174ffa" },
  { name: "Clothing", id: "44b81345d8094191aad3969218fb71de" },
  { name: "Transportation", id: "56d3031f726a4cad8f89883946e43c1a" },
  { name: "Utilities", id: "5b7b7403d67c43a98966db0a982bafff" },
  { name: "Insurance", id: "762d90df7a9443a2bcd95a22937a030f" },
  { name: "Medical/Health", id: "901d29cbf8e84e0e821b63e1c369de2e" },
  { name: "Recreation", id: "92479a84299f484dbe05335f8c6b2413" },
  { name: "Personal", id: "e19f6f67df544529857dbafaae18a8b1" },
  { name: "Debts", id: "ef8aaf37bd3244ee8c0cc0abd6317ac3" },
  { name: "Charity", id: "ed08e0222a01492b90f09252bcf5cb13" }
];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories.find(c => c.id === categoryId);
}
