const Mock = require("mockjs");
const data = Mock.mock({
    "list|80": [{
        // 主键
        "id|+1": 0,
        //姓名
        "name": '@name',
        //职务
        "work|1": ["员工", "员工", "经理", "员工"],
        //性质
        "leave|1": ["正常请假"],
        //请假理由
        "reason|5-10": "@ctitle(1)",
        //请假时间
        "datetime": "@datetime",
        //申请时间
        "time": "@datetime",
        //行政部
        "ratify|1": ["已批准"],
        //审批
        "ratify|1": ["已批准"],
    }]
})

const getTable = function(pageSize, current) {
    return data.list.filter((value, index) => { return index >= (current - 1) * pageSize && index < current * pageSize });
};
export default getTable