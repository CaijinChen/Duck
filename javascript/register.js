/**
 * Created by chencaijn on 2017/9/11.
 */

var pattern=/^1\d{10}/;
window.onload=function(){
    document.getElementsByTagName('button')[0].onclick=function(){
        document.getElementById('first').style.display='none';
    };
    document.getElementsByClassName('submit')[0].onclick=function(){
        var inputs = document.forms[0].text;
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '') {
                alert("请将表单信息填写完整！");
                inputs[i].focus();
                return false;
            }
        }
        if (inputs[1].value != inputs[2].value) {
            alert("密码填写确认有误！");
            inputs[2].value = '';
            inputs[2].focus();
            return false;
        }
        if (pattern.test(inputs[3].value) === false) {
            alert("填写的手机号码无法识别！");
            inputs[3].value = '';
            inputs[3].focus();
            return false;
        }
        for (var j = 0; j < inputs.length; j++) {
            inputs[j].value = '';
        }
        alert("注册成功！你会回到网站的首页哦。");
        return true;
    };
};
function show(num){
    var tip=document.getElementsByClassName('tip');
    tip[num].style.opacity='1';
}
function hide(num){
    var tip=document.getElementsByClassName('tip');
    tip[num].style.opacity='0';
}