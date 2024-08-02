const formatDate = function (date) {
  if (!date) return ""; // Handling cases where date might be undefined/null

  const formattedDate = new Date(date);

  // Getting day, month, and year
  const day = String(formattedDate.getDate()).padStart(2, "0");
  const month = String(formattedDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = formattedDate.getFullYear();

  return `${day}-${month}-${year}`;
};

const formatMoney = function (money) {
  if (!money) return "0 Tk";
  return `${money.toLocaleString()} Tk`;
};

const format = {
  formatDate,
  formatMoney,
};

export default format;
