$(function(){
  $('div a').click(function(e){
    $.scrollTo(this.hash || 0, 800);
    e.preventDefault();
  });
});