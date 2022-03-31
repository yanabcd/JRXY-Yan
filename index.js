auto.waitFor();
//打开gps
setScreenMetrics(1080, 2400);
quickSettings();
sleep(1000)
swipe(831, 1847, 400, 1847, 1000);
sleep(1000);
click(418, 1347);
back();
sleep(1000);
//打开今日校园
launch('com.wisedu.cpdaily')
sleep(7000);
click(777, 2222);
sleep(1000);
click(384, 530);
sleep(1000);
click(719, 2050);
sleep(5000);
//测试页面
click("是", 1);
sleep(1000);
swipe(523, 1980, 523, 520, 1000);
sleep(1000);
click("否", 2)
sleep(1000);
click("否", 4)
sleep(1000);
click("≤")
sleep(1000);
swipe(523, 1980, 523, 1000, 1000);
sleep(1000);
click("否", 6)
sleep(1000);
click("否", 8)
sleep(1000);
swipe(523, 1980, 523, 123, 1000);
sleep(1000);
swipe(523, 1980, 523, 1800, 1050);
//当前所在城市
//省
click("请选择省或海外")
sleep(1000);
swipe(536, 1986, 536, 220, 3000);
sleep(1000);
swipe(536, 1986, 536, 889, 3000);
sleep(1000);
click(988, 1617);
sleep(1000);
//城市
click("请选择市或洲")
sleep(1000);
click(998, 1613);
sleep(1000);
//区
click("请选择区/县或者国家")
sleep(1000);
swipe(536, 1986, 536, 1089, 3000);
sleep(1000);
click(998, 1613);
sleep(1000);
swipe(536, 1986, 536, 889, 3000);
click("确认已认真查看，且填写信息无误");
click("提交");
sleep(1000);
click("提交");
hamibot.exit();