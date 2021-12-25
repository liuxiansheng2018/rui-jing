const Mock = require("mockjs");
const data = Mock.mock({
  "list|80": [
    {
      // 主键
      "id|+1": 0,
      //部门
      "department|1": ["行政部", "办公室"],
      //问题描述
      "problem|15-20": "@ctitle(1)",
      //问题分类
      "type|1": ["人员调配"],
      //所在城市
      city: "@city(true)",
      //解决时间
      time: "@datetime",
      //跟进人
      name: "@name",
      //是否解决
      "solve|1": ["待解决", "解决中", "已解决"],

      //意见反馈
      //左：
      "left|15-20": "@ctitle(1)",

      //右：
      "right|15-20": "@ctitle(1)",
    },
  ],
});
const getTable = function (pageSize, current) {
  return data.list.filter((value, index) => {
    return index >= (current - 1) * pageSize && index < current * pageSize;
  });
};
export default getTable;
