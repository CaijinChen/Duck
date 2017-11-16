/**
 * Created by chencaijn on 2017/9/11.
 */
var image=['../images/hailan.jpg',
    '../images/nike.jpg',
    '../images/matebook.jpg',
    '../images/bike.jpg'];
var moveNow=1;
var sliderNow=0;
var sliderNext=1;
var timer=null;
$(function(){
    timer=setInterval(slider,3500);
});
function slide(num){
    clearInterval(timer);
    if(num==5){
        sliderNext=sliderNow-1;
        if(sliderNext==-1){
            sliderNext=3;
        }
    }else if(num==6){
        sliderNext=sliderNow+1;
        if(sliderNext==4){
            sliderNext=0;
        }
    }else{
        sliderNext=num;
    }
    slider();
    timer=setInterval(slider,3500);
}
function enter(num){
    document.getElementsByClassName('dot')[num].style.backgroundColor='white';
}
function out(num){
    if(num!=sliderNow)
        document.getElementsByClassName('dot')[num].style.backgroundColor='#777';
}
function slider(){
    var from=$('img.now');
    var to=$('img.next');
    var li=document.getElementsByClassName('dot');
    li[sliderNow].style.backgroundColor='#777';
    li[sliderNext].style.backgroundColor='white';
    from.attr({'src':image[sliderNow]}).css({opacity:'1'}).animate({'opacity':'0'},1000);
    to.attr({'src':image[sliderNext]}).css({opacity:'0'}).animate({'opacity':'1'},1000);
    sliderNow=sliderNext;
    sliderNext++;
    if(sliderNext==4){
        sliderNext=0;
    }
}
function move(num){
    var row=$('div.row');
    var lt=$('div.lt');
    var gt=$('div.gt');
    if(moveNow==1){
        if(num==2) {
            row.animate({'left': '-1100px'}, 400);
            gt.css({'color':'#eee', 'backgroundColor': 'rgba(232, 63, 84, 0.31)'});
            lt.css({'color':'#888', 'backgroundColor':'#ACDBEA'});
            moveNow=2;
        }
    }else{
        if(num==1){
            row.animate({'left':'0'},400);
            lt.css({'color':'#eee', 'backgroundColor': 'rgba(232, 63, 84, 0.31)'});
            gt.css({'color':'#888', 'backgroundColor':'#ACDBEA'});
            moveNow=1;
        }
    }
}
