var myChart = echarts.init(document.getElementById("Map"));

var outout = ($("#out").val().toString()).toString();
if(outout != ""){
  var outjson = $.parseJSON(outout);
}
console.log(outjson);

// 指定图表的配置项和数据
var option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['学子餐厅','东一餐厅','东二餐厅','桂香园','沁园春']
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '1%',
        containLabel: true
    },
    toolbox: {
        feature: {
            // saveAsImage: {}
        }
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'学子餐厅',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'东一餐厅',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'东二餐厅',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'桂香园',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'沁园春',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
