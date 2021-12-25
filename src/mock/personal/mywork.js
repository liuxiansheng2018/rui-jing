const Mock = require("mockjs");
const data = Mock.mock({
    "list|80": [{
        // 主键
        "id|+1": 0,
        //本周工作
        "describe|25-40": "@ctitle(1)",
        //是否完成
        "success|1": ["已完成", "进行中", "待完成"],
        //查看详情
        "details|1": ["查看详情"]
    }]
})
const getTable = function(pageSize, current) {
    return data.list.filter((value, index) => { return index >= (current - 1) * pageSize && index < current * pageSize });
};
export default getTable