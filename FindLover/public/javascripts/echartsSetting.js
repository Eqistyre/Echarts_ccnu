//get Date
var XueZi = [0,0,0,0,0,0,0];
var DongYi = [0,0,0,0,0,0,0];
var DongEr = [0,0,0,0,0,0,0];
var GuiXiangYuan = [0,0,0,0,0,0,0];
var QinYuanChun = [0,0,0,0,0,0,0];
var BoYaYuan = [0,0,0,0,0,0,0];

var initDay = 3;
var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;
var ThisDate = Date.parse("2016-2-14");
var passDay = ThisDate/days;
var ThisDay = Math.floor((passDay % 7 + initDay) % 7) + 1;
//Json and set value
var orgNameArray= [];
var dealDateTimeArray = [];
var dealDayArray = [];

var out = ($("#out").val().toString()).toString();
if(out != ""){
  var outjson = $.parseJSON(out);
  for(var i = 0; i < outjson.length; i++) {
    var ThatDay = outjson[i].dealDateTime.split(" ")[0];
    var ThisDate = Date.parse(ThatDay);
    var passDay = ThisDate/days;
    var ThisDay = Math.floor((passDay % 7 + initDay) % 7) + 1;
    var orgName = outjson[i].orgName;
    var orgNameSplit = orgName.split("/")[3];
    dealDayArray.push(ThisDay);
    orgNameArray.push(orgNameSplit);
    function compare(orgNameSplit,i) {
      // console.log(orgNameSplit);
      switch (orgNameSplit) {
        case "学子餐厅":
          XueZi[i]++;
          break;
        case "东一餐厅新":
          DongYi[i]++;
          break;
        case "学子中西餐厅":
          XueZi[i]++;
          break;
        case "沁园春餐厅":
          QinYuanChun[i]++;
          break;
        case "东一餐厅(旧201508)":
          DongYi[i]++
          break;
        case "桂香园餐厅（旧201508）":
          GuiXiangYuan[i]++;
          break;
        case "桂香园餐厅新":
          GuiXiangYuan[i]++;
          break;
        case "东二餐厅":
          DongEr[i]++;
          break;
        case "博雅园餐厅":
          BoYaYuan[i]++;
          break;
        default:
          break;
      }
    }
    switch (ThisDay) {
      case 1:
        compare(orgNameSplit,0);
        break;
      case 2:
        compare(orgNameSplit,1);
        break;
      case 3:
        compare(orgNameSplit,2);
        break;
      case 4:
        compare(orgNameSplit,3);
        break;
      case 5:
        compare(orgNameSplit,4);
        break;
      case 6:
        compare(orgNameSplit,5);
        break;
      case 7:
        compare(orgNameSplit,6);
        break;
      default:
    }
  }
}

// echarts setting
var myChart = echarts.init(document.getElementById("Map"));
var option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['学子餐厅','东一餐厅','东二餐厅','桂香园','沁园春','博雅园']
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
            name : '次数',
            data : '次数'
        }
    ],
    series : [
        {
            name:'学子餐厅',
            type:'line',
            data: XueZi
        },
        {
            name:'东一餐厅',
            type:'line',
            data: DongYi
        },
        {
            name:'东二餐厅',
            type:'line',
            data: DongEr
        },
        {
            name:'桂香园',
            type:'line',
            data: GuiXiangYuan
        },
        {
            name:'沁园春',
            type:'line',
            data: QinYuanChun
        },
        {
            name:'博雅园',
            type:'line',
            data: BoYaYuan
        }
    ]
};
//set ecahrts
myChart.setOption(option);
