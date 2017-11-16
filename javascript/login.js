/**
 * Created by chencaijn on 2017/9/12.
 */
window.onload=function(){
    document.getElementsByClassName('submit')[0].onclick=function(){
        var input=document.getElementsByTagName('input');
        for(var i=0;i<input.length;i++){
            if(input[i].value==''){
                alert("请先将信息填写完整!");
                input[i].focus();
                return false;
            }
        }
        alert("登入成功，你将回到网站首页哦！");
        return true;
    }
};
function change(here){
    here.style.borderBottomColor='#eee';
    here.style.color='#eee';
}
function old(here){
    here.style.borderBottomColor='rgba(255,255,255,0.3)';
    here.style.color='rgba(255,255,255,0.3)';
}
