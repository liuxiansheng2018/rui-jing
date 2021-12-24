const Mock = require("mockjs");
const data = Mock.mock({
    "list|80": [{
        // 主键
        "id|+1": 0,
        //姓名
        "name": '@name',
        //性别
        "sex|1": ["男", "女"],
        //电话
        'phone|1-10': ['@phone'],
        //职务
        "industry|1 ": ["职业经理", "机械制造业", "网络工程"],


        //客户反馈
        "describe|15-30": "@ctitle(1)",
        //时间
        "date": "@date",

    }]
})