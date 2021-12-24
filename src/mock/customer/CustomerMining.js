const Mock = require("mockjs");
const data = Mock.mock({
    "list|80": [{
        // 主键
        "id|+1": 0,
        //姓名
        "name": '@name',
        //职务
        "industry|1 ": ["职业经理", "机械制造业", "网络工程"],
        //会员号
        "num|+1": 20163365,
        //注册时间
        "date": "@date",
        //注册方式
        "register|1": ["线上注册", "线下注册"],
        //电话
        'phone|1-10': ['@phone'],
        //住址
        "address": '@city(true)',
        //注册进度
        "schedule|1": ["注册中", "已注册"]

    }]
})
const getTable = function(pageSize, current) {
    return data.list.filter((value, index) => { return index >= (current - 1) * pageSize && index < current * pageSize });
};
export default getTable