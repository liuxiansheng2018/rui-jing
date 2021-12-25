const Mock = require("mockjs");
const data = Mock.mock({
  "list|80": [
    {
      // 主键
      "id|+1": 0,
      //等级
      "grade|1": ["黄金", "青铜", "白银"],
      //姓名
      name: "@cname",
      //行业
      "industry|1": ["职业经理", "机械制造业", "网络工程"],
      //会员号
      "num|+1": 20163365,
      //注册时间
      date: "@date",
      //账户余额
      "residue|9000-20000": 9000,
      //电话
      regexp: /^1[3456789]\d{9}$/,
      //住址
      address: "@city(true)",
    },
  ],
});
const getTable = function (pageSize, current) {
  return data.list.filter((value, index) => {
    return index >= (current - 1) * pageSize && index < current * pageSize;
  });
};
export default getTable;
