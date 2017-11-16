/**
 * Created by chencaijn on 2017/9/12.
 */
var images=['../images/111.jpg',
    '../images/112.jpg',
    '../images/113.jpg',
    '../images/114.jpg'];
var ago=0;
var old=0;
var past=5;
var number=1;
window.onload=function(){
    var item=document.getElementsByClassName('item');
    document.getElementsByClassName('small')[ago].style.borderColor='#a00';
    item[0].style.backgroundColor='#a00';
    item[5].style.backgroundColor='#a00';
    item[0].style.color='#eee';
    item[5].style.color='#eee';
    document.getElementById('up').onclick=function(){
        count(1);
    };
    document.getElementById('down').onclick=function(){
        count(-1);
    }
};
function count(n){
    var num=document.getElementById('num');
    number=parseInt(num.innerHTML);
    number+=n;
    if(number<0) return;
    num.innerHTML=String(number);
}
function change(here,num){
    var all=document.getElementsByClassName('item');
    var small=document.getElementsByClassName('small');
    all[old].style.color='#888';
    all[old].style.backgroundColor='white';
    if(old==num) {
        all[0].style.color = '#eee';
        all[0].style.backgroundColor = '#a00';
        old=0;
    }else{
        here.style.backgroundColor='#a00';
        here.style.color='#eee';
        old=num;
    }
    if(num!=0){
        changeImage(small[num-1],num-1);
    }
}
function choose(here,num){
    var all=document.getElementsByClassName('item');
    all[past].style.color='#888';
    all[past].style.backgroundColor='white';
    if(past==num){
        all[5].style.color='#eee';
        all[5].style.backgroundColor='#a00';
        past=5;
    }else{
        here.style.backgroundColor='#a00';
        here.style.color='#eee';
        past=num;
    }
}
function changeImage(here,num){
    here.style.borderColor='#a00';
    document.getElementsByClassName('small')[ago].style.borderColor='#eee';
    document.getElementsByClassName('big')[0].setAttribute('src',images[num]);
    ago=num;
}
function check(num){
    var item=document.getElementsByClassName('item');
    var more=document.getElementById('more');
    if(item[0].style.color==='rgb(238, 238, 238)'||item[5].style.color==='rgb(238, 238, 238)'){
        alert("请先选择商品属性！");
        return false;
    }
    if(more.value==''){
        alert("请将收获地址填写好！");
        return false;
    }
    if(num==0){
        alert("商品已成功购买,本次消费"+109*number+"元，将从煎饼果子钱包里直接扣除，稍后账单将以短信形式发送给你！");
        document.getElementById('num').innerHTML='1';
    }else{
        alert("商品已添加至购物车！");
    }
    more.value='';
}
