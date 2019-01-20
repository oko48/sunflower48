$("#p_phone").mask("+7(999)999-99-99")


var price_88 = [0, 110, 250, 75, 95, 95];
var price_99 = [150,500,400,50];
var price_66 = [0,1000,500,1000];
var price_00 = [65,75,90,110,420]

var c_num11 = 4;

var p_price = [0,0,0,0];
var p_cvet = [0,0,0,0,0,0];
var p_buket = 1;
var type_r = 0;
var type_h = 0;
var post_sum = 0;
function price(){
var rez = 0;
var price_cv = 0;
 var pop_tt = 0;

if(type_r>0){

if(type_r==1){
if(type_h>0){
    if(c_num11>19)
    {price_cv=price_00[type_h-1]*(c_num11+1);}

    else{price_cv=price_00[type_h-1]*(c_num11+1)+300;}

}
}
else{
if(c_num11>19)
    {price_cv=price_88[type_r-1]*(c_num11+1);}

    else{price_cv=price_88[type_r-1]*(c_num11+1)+300;}


}
}


var pod_p=0;

if(p_price[0]==1){pod_p+=price_99[0];}
if(p_price[1]==1){pod_p+=price_99[1];}
if(p_price[2]==1){pod_p+=price_99[2];}
if(p_price[3]==1){pod_p+=price_99[3];}

var p_buket1=price_66[p_buket-1]



rez=pod_p+price_cv+p_buket1+" р";

post_sum=rez;

kolvo=parseInt($('#inp_num').html());
if(kolvo > 50){
    oldStr=$('#c_right2').css('background');
    newStr=oldStr.replace("calc/c", "calc/x");
    $('#c_right2').css({'background':newStr});
}else{
	oldStr=$('#c_right2').css('background');
	newStr=oldStr.replace("calc/x", "calc/c");
	$('#c_right2').css({'background':newStr});
}

$("#rezult_1 #price_d").html(rez)



}

$(".add_p").mouseover(function(){
var dat=$(this).attr("data-id")*1;
if(p_price[dat-1]==0){
$(this).siblings(".p_price").css({"color":"#3f3f3f"})
$(this).css({"background":"none","border":"1px dashed #84af1c","color":"#84af1c"});
}
})


$(".add_p").mouseout(function(){
var dat=$(this).attr("data-id")*1;
if(p_price[dat-1]==0){
$(this).siblings(".p_price").css({"color":"#8d8d8d"});
$(this).css({"background":"none","border":"1px dashed #8d8d8d","color":"#8d8d8d"});

}

})



$("#add_p ul li img").mouseover(function(){


$(this).closest("div").siblings(".add_p").trigger("mouseover");

})



$("#add_p ul li img").mouseout(function(){


$(this).closest("div").siblings(".add_p").trigger("mouseout");

})

$("#input_num span").click(function(){
$("#inp_num").focus();
price();

})


$(".add_p").click(function(){
var dat=$(this).attr("data-id")*1;

if(p_price[dat-1]==0){
$(this).siblings(".p_price").css({"color":"#3f3f3f"})
$(this).css({"background":"url(images/select_p.png) no-repeat #84af1c","background-position":"50% 1%","border":"none","color":"transparent"});
p_price[dat-1]=1;}else if(p_price[dat-1]==1){
$(this).siblings(".p_price").css({"color":"#3f3f3f"})
$(this).css({"background":"none","border":"1px dashed #84af1c","color":"#84af1c"});
p_price[dat-1]=0;

}
price();
})



$("#add_p ul li img").click(function(){


$(this).closest("div").siblings(".add_p").trigger("click");

})


$(".c_check").mouseover(function(){
var dat=$(this).attr("data-t")*1;
var ss="";
if(dat==1){ss="#roza";}
else if(dat==2){ss="#orxideya";}
else if(dat==3){ss="#liliya";}
else if(dat==4){ss="#tyulpan";}
else if(dat==5){ss="#gerbera";}
else if(dat==6){ss="#xrizantema";}
$(".cvet_border").removeClass("cvet_hover");
$(ss+" .cvet_border").addClass("cvet_hover");



});

$(".c_check").mouseout(function(){

$(".cvet_border").removeClass("cvet_hover");

})


$(".c_check").click(function(){
var dat=$(this).attr("data-t")*1;
var ss="";
if(dat==1){ss="#roza";type_r=1; $("#shkala ul li:nth-child(2)").trigger("click")}
else if(dat==2){ss="#orxideya";type_r=2;}
else if(dat==3){ss="#liliya";type_r=3;}
else if(dat==4){ss="#tyulpan";type_r=4;}
else if(dat==5){ss="#gerbera";type_r=5;}
else if(dat==6){ss="#xrizantema";type_r=6;}
$(".cvet_border").removeClass("cvet_active");
$(ss+" .cvet_border").addClass("cvet_active");
$(".c_check").html("");
$(this).html("<img src='images/check_ok.png'>")

$('#c_right2').css({'background':'url(images/calc/c'+dat+'.png) no-repeat'});

if(dat!=1){$("#shkala img").attr("src","images/shkala2.png");

$("#shkala ul li").removeClass("shkala_active1");
$("#shkala ul li").removeClass("shkala_next");}

price()
})



$("#shkala ul li").click(function(){

if(type_r==1){
$("#shkala img").attr("src","images/shkala.png");

$("#shkala ul li").removeClass("shkala_active1");
$("#shkala ul li").removeClass("shkala_next");
$(this).addClass("shkala_active1");
$(this).next().addClass("shkala_next");

var dat=$(this).attr("data-h")*1;
type_h=dat;

}

kolvo=parseInt($('#inp_num').html());
if(kolvo > 50){
    oldStr=$('#c_right2').css('background');
    newStr=oldStr.replace("calc/c", "calc/x");
    $('#c_right2').css({'background':newStr});
}else{
	oldStr=$('#c_right2').css('background');
	newStr=oldStr.replace("calc/x", "calc/c");
	$('#c_right2').css({'background':newStr});
}

price()

})





$("#buket_type ul li img").mouseover(function(){

$(this).closest("li").addClass("buket_hover");





})


$("#buket_type ul li img").mouseout(function(){

$(this).closest("li").removeClass("buket_hover");





})



$("#buket_type ul li img").click(function(){
$("#buket_type ul li").removeClass("buket_active");
$(this).closest("li").addClass("buket_active");

var dat=$(this).attr("data-l")*1;
p_buket=dat;
price()

})







var tt_1=false;
$("#button_slide").click(function(e){
e.preventDefault();
})
var xd=0;
$("#button_slide").mousedown(function(e){

var xx=$("#button_slide").offset().left;
var xx1=e.pageX;
xd=xx1-xx;
kolvo=parseInt($('#inp_num').html());
if(kolvo > 50){
    oldStr=$('#c_right2').css('background');
    newStr=oldStr.replace("calc/c", "calc/x");
    $('#c_right2').css({'background':newStr});
}
tt_1=true;
return false;



})


$("body").mouseup(function(){
tt_1=false;




})


$("body").mousemove(function(e){
var xx=parseInt($("#slide_back").offset().left);
var xx1=parseInt(e.pageX);
var x11=xx1-xx;


if(tt_1==true){
var xl=parseInt($("#button_slide").css("left"));


if(x11-10<0){
$("#button_slide").css({"left":"0px"});
$("#button_back2").css({"width":(5)+"px"});
}
else{$("#button_slide").css({"left":(x11-xd)+"px"});
$("#button_back2").css({"width":(xl+5)+"px"});
}

if(xl>28){$(".li_s2").addClass("sl_active")}else{$(".li_s2").removeClass("sl_active")}//59
if(xl>68){$(".li_s3").addClass("sl_active")}else{$(".li_s3").removeClass("sl_active")}//129
if(xl>135){$(".li_s4").addClass("sl_active")}else{$(".li_s4").removeClass("sl_active")}//189
if(xl>202){$(".li_s5").addClass("sl_active")}else{$(".li_s5").removeClass("sl_active")}//258


if(x11>268){$("#button_slide").css({"left":"268px"});$("#button_back2").css({"width":(273)+"px"});}

var tl=parseInt($("#button_slide").css("left"));

c_num11=Math.floor(tl*180/241);



price()
$("#inp_num").html(c_num11+1);

kolvo=parseInt($('#inp_num').html());
if(kolvo > 50){
    oldStr=$('#c_right2').css('background');
    newStr=oldStr.replace("calc/c", "calc/x");
    $('#c_right2').css({'background':newStr});
}else{
	oldStr=$('#c_right2').css('background');
	newStr=oldStr.replace("calc/x", "calc/c");
	$('#c_right2').css({'background':newStr});
}

}



})



$("#slide_back").click(function(e){

var xx=$("#slide_back").offset().left;
var xx1=e.pageX;

$("#button_slide").css({"left":(xx1-xx-7)+"px"});
$("#button_back2").css({"width":(xx1-xx+5)+"px"});
var tl=parseInt($("#button_slide").css("left"));


if(tl>28){$(".li_s2").addClass("sl_active")}else{$(".li_s2").removeClass("sl_active")}
if(tl>68){$(".li_s3").addClass("sl_active")}else{$(".li_s3").removeClass("sl_active")}
if(tl>135){$(".li_s4").addClass("sl_active")}else{$(".li_s4").removeClass("sl_active")}
if(tl>202){$(".li_s5").addClass("sl_active")}else{$(".li_s5").removeClass("sl_active")}



c_num11=Math.floor(tl*180/241); //было268


if(c_num11==51){$(".li_s2").addClass("li_ht")}else{$(".li_s2").removeClass("li_ht")}

$("#inp_num").html(c_num11+1);

kolvo=parseInt($('#inp_num').html());
if(kolvo > 50){
    oldStr=$('#c_right2').css('background');
    newStr=oldStr.replace("calc/c", "calc/x");
    $('#c_right2').css({'background':newStr});
}else{
	oldStr=$('#c_right2').css('background');
	newStr=oldStr.replace("calc/x", "calc/c");
	$('#c_right2').css({'background':newStr});
}

price();


})

$("#popup_close").click(function(){
$("#popup_fon").hide(200);
$("#popup_form").hide(100);


})

$("#submit_c55").click(function(){

var width=$(window).width()-613;

width=width/2;



if((width*2+613)<700){$("#popup_close").css({"left":"-300px"});}else{$("#popup_close").css({"left":"60px"});}

$("#popup_form").css({"left":width+"px"});

pop_tt=0;
$("#popup_fon").show(200);
$("#popup_form").show(100);
$(".popup_cont").show();
$("#succes_pp").hide();
$("#pop_main1").show();
})

$("#popup_submit22").click(function(){


var pod="";

if(p_price[0]==1){pod+="Открытка ,"}
if(p_price[1]==1){pod+="Игрушка ,"}
if(p_price[2]==1){pod+="Конфеты рафаелло ,"}
if(p_price[3]==1){pod+="Шарики ,"}

var buket="";
if(p_buket==1){buket="букет"}
else if(p_buket==2){buket="корзина"}
else if(p_buket==3){buket="сердце"}
else if(p_buket==4){buket="в коробке"}

var cvetok="";
var tp_h="";
if(type_r==1){
if(type_h==1){tp_h="50 см"}
else if(type_h==2){tp_h="60 см"}
else if(type_h==3){tp_h="70 см"}
else if(type_h==4){tp_h="80 см"}
else if(type_h==5){tp_h="180 см"}
cvetok="Роза, Высота букета: "+tp_h;}
else if(type_r==2){cvetok="Орхидея"}
else if(type_r==3){cvetok="Лилия"}
else if(type_r==4){cvetok="Тюльпан"}
else if(type_r==5){cvetok="Гербера"}
else if(type_r==6){cvetok="Хризантема";
}

var num1=c_num11+1;
price()

var name=$("#p_name").val();
var phone=$("#p_phone").val().trim();

if(phone.length>0){
$("#p_phone").css({"border-color":"#dddddd"})
if(pop_tt==0){

$.post("mail.php",{pop:pop_tt,cvet:cvetok,buket1:buket,pod1:pod,num:num1,sum:post_sum,name1:name,phone1:phone},function(data){

$("#succes_pp").show();
$("#pop_main1").hide();
})
}
else if(pop_tt==1){
$.post("mail.php",{pop:pop_tt,name1:name,phone1:phone},function(data){

$("#succes_pp").show();
$("#pop_main1").hide();
})
}




}

else{$("#p_phone").css({"border-color":"#af244c"})}


})

$("#inp_num").blur(function(){
var val=parseInt($(this).html());


if(val<1){val=1;$(this).html("1")}
var xx=val*241/180//-30 //было 268/180-30
if(val>201){$("#button_slide").css({"left":"268px"});
$("#button_back2").css({"width":"273px"});}
else if(val<=1){$("#button_slide").css({"left":"0px"});
$("#button_back2").css({"width":"5px"});}
else{$("#button_slide").css({"left":xx+"px"});
$("#button_back2").css({"width":(xx+5)+"px"});}


var tl=parseInt($("#button_slide").css("left"));

if(tl>28){$(".li_s2").addClass("sl_active")}else{$(".li_s2").removeClass("sl_active")}
if(tl>68){$(".li_s3").addClass("sl_active")}else{$(".li_s3").removeClass("sl_active")}
if(tl>135){$(".li_s4").addClass("sl_active")}else{$(".li_s4").removeClass("sl_active")}
if(tl>202){$(".li_s5").addClass("sl_active")}else{$(".li_s5").removeClass("sl_active")}


c_num11=val-1;//было -1
price()

kolvo=parseInt($('#inp_num').html());
if(kolvo > 50){
    oldStr=$('#c_right2').css('background');
    newStr=oldStr.replace("calc/c", "calc/x");
    $('#c_right2').css({'background':newStr});
}else{
	oldStr=$('#c_right2').css('background');
	newStr=oldStr.replace("calc/x", "calc/c");
	$('#c_right2').css({'background':newStr});
}

})



$("#roza img,#orxideya img,#liliya img,#tyulpan img,#gerbera img,#xrizantema img").click(function(){

if($(this).closest("#roza").length>0){$(".c_check[data-t='1']").trigger("click")}
else if($(this).closest("#orxideya").length>0){$(".c_check[data-t='2']").trigger("click")}
else if($(this).closest("#liliya").length>0){$(".c_check[data-t='3']").trigger("click")}
else if($(this).closest("#tyulpan").length>0){$(".c_check[data-t='4']").trigger("click")}
else if($(this).closest("#gerbera").length>0){$(".c_check[data-t='5']").trigger("click")}
else if($(this).closest("#xrizantema").length>0){$(".c_check[data-t='6']").trigger("click")}



})



$("#submit_main").click(function(){





})




$(window).resize(function(){

var width=$(window).width()-613;

width=width/2;



if((width*2+613)<700){$("#popup_close").css({"left":"-300px"});}else{$("#popup_close").css({"left":"60px"});}

$("#popup_form").css({"left":width+"px"});


})


$("#submit_main,.pop_90").click(function(){

var width=$(window).width()-613;

width=width/2;



if((width*2+613)<700){$("#popup_close").css({"left":"-300px"});}else{$("#popup_close").css({"left":"60px"});}

$("#popup_form").css({"left":width+"px"});

pop_tt=1;
$("#popup_fon").show(200);
$("#popup_form").show(100);
$(".popup_cont").hide();
$("#succes_pp").hide();
$("#pop_main1").show();


})

$('.popup-link').magnificPopup({
    type:'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
});
