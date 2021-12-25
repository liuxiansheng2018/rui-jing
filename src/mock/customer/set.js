const Mock = require("mockjs");
const data = Mock.mock({
  "list|5": [
    {
      url: "@url",
      date: "@date",
    },
  ],
});
const getTable = function () {
  return data.list.filter((value) => {
    return value;
  });
};
export default getTable;
