$('.slider').each(function(){
    var $this =(this);
    var $group = $this.find('.slide-group');
    var $slides =this.find('.slide');
    var buttonArray = [];
    var currentIndex = 0;
    var timeout;
})

function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        if (currentIndex < ($slides.length - 1)){
            move(currentIndex + 1);
        } else {
            move(0);
        }
    

    }, 4000);
}

$.each(slides, function(index){
    var $button = $('<button type ="button" class="slide-btn">&bull;</button>');
    if (index===currentIndex){
        $button.addClass('active');
    }
    $button.on ('click', function(){
        move(index);
    })
    .appendTo($this.find('.slide-buttons'));
    buttonArray.push($button);
});
advance();
// }); no? closing the call?