$(function(){
    // nav收缩展开
    $('.nav-item>a').on('click',function(){
            if ($(this).next().css('display') == "none") {
                //展开未展开
                /*$('.nav-item').children('ul').slideUp(300);*/ //将所有主菜单中<a>标签的子菜单全部上滑
                $(this).next('ul').slideDown(300);  //给所点击的<a>标签中第一个子标签<ul>添加下滑效果(作用是显示子标签内容)
                $(this).parent('li').addClass('nav-show'); //给父标签<li>添加类nav-show，并且移除与父标签同等级的<li>标签的类nav-show
            }else{
                //再次点击同一个标签即可收缩
                $(this).next('ul').slideUp(300);
                $(this).parent('li').removeClass('nav-show');
            }
    });
    //未打开菜单栏时的状态
    $('#normal').on('click',function(){
        if (!$('.my-nav').hasClass('nav-normal')) {
            $('.my-nav').addClass('nav-normal');
        }else{
			 $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.my-nav').removeClass('nav-normal');
        }
    });
	
	//点击空白处即可收回菜单栏
	$('.free-area').on('click',function(){
		 $('.my-nav').removeClass('nav-normal');
		 });
	
	/*
	$(document).ready(function () {
        var menuYloc = $(".my-nav").offset().top; //此ID为随着屏幕滚动div的ID
        $(window).scroll(function () {
            var offsetTop = menuYloc + $(window).scrollTop() + "px";
            $(".my-nav").animate({ top: offsetTop }, { duration: 0.1, queue: true }); //此ID为随着屏幕滚动div的ID
      });
    });*/
});
