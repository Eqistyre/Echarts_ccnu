//get Date
var XueZi = [0,0,0,0,0,0,0];
var DongYi = [0,0,0,0,0,0,0];
var DongEr = [0,0,0,0,0,0,0];
var GuiXiangYuan = [0,0,0,0,0,0,0];
var QinYuanChun = [0,0,0,0,0,0,0];
var ThisDate = Date.parse("2016-2-14");

var initDay = 4;
var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;
var passDay = ThisDate/days;
var ThisDay = Math.floor((passDay % 7 + initDay) % 7) + 1;

//Json and set value
var out = ($("#out").val().toString()).toString();
if(out != ""){
  var outjson = $.parseJSON(out);
  for(var i = 0; i < outjson.length; i++) {
    var dealDateTime = outjson[i].dealDateTime;
    var orgName = outjson[i].orgName;
    var orgName = orgName.split("/")[3];
    console.log(orgName);
  }
}
console.log(ThisDay);

// echarts setting
var myChart = echarts.init(document.getElementById("Map"));
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
            // saveAsImage:
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
            type : 'value',
            data : '次数'
        }
    ],
    series : [
        {
            name:'学子餐厅',
            type:'line',
            stack: '总量',
            data: XueZi
        },
        {
            name:'东一餐厅',
            type:'line',
            stack: '总量',
            data:DongYi
        },
        {
            name:'东二餐厅',
            type:'line',
            stack: '总量',
            data:DongEr
        },
        {
            name:'桂香园',
            type:'line',
            stack: '总量',
            data:GuiXiangYuan
        },
        {
            name:'沁园春',
            type:'line',
            stack: '总量',
            data:QinYuanChun
        }
    ]
};
//set ecahrts
myChart.setOption(option);
