// thus we can write jquery in .js file but its script must be included after the jquery cdn 

$(document).ready(function(){
    $('.menu-toggle').click(function(){
        // this function responds on mouse click
        $('nav').toggleClass('active')
    })

    $('ul li').click(function(){
      $(this).siblings().removeClass("active")
      $(this).toggleClass("active")

    })

})