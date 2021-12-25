const Mock = require("mockjs");
const data = Mock.mock({
  "list|80": [
    {
      // 主键
      "id|+1": 0,
      //姓名
      name: "@cname",
      //职务
      "work|1": ["员工", "员工", "经理", "员工"],
      //性质
      "leave|1": ["正常请假"],
      //请假理由
      "reason|5-10": "@ctitle(1)",
      //请假时间
      datetime: "@datetime",
      //申请时间
      time: "@datetime",
      //行政部
      "ratify1|1": ["已批准"],
      //审批
      "ratify2|1": ["已批准", "待审批"],
    },
  ],
});

const getTable = function (pageSize, current) {
  return data.list.filter((value, index) => {
    return index >= (current - 1) * pageSize && index < current * pageSize;
  });
};
export default getTable;
