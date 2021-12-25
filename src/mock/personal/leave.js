const Mock = require("mockjs");
const data = Mock.mock({
  "list|80": [
    {
      // 主键
      "id|+1": 0,
      //姓名
      name: "@name",
      //请假事由
      "leave|5-10": "@ctitle(1)",
      //请假时间
      datetime: "@datetime",
      //审批
      "ratify|1": ["已批准"],
      //销假
      "remove|1": ["待销假", "已销假"],
      //申请时间
      time: "@datetime",
    },
  ],
});

const getTable = function (pageSize, current) {
  return data.list.filter((value, index) => {
    return index >= (current - 1) * pageSize && index < current * pageSize;
  });
};
export default getTable;
