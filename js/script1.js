$(function(){
  // .menu-triggerクリック時に行われる処理
  $('.menu-trigger').on('click', function(event){
    // class属性の追加と削除
    $(this).toggleClass('active');
    // 要素のフェードイン・フェードアウトの切り替え
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});