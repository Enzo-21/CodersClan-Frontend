/* Initializes an instance of Rellax for the parallax effect only on desktop devices */
(function($) {
    var $window = $(window),
        $html = $('html');

    $window.resize(function resize(){
        if ($window.width() > 768) {
            let rellax = new Rellax('.rellax');
        }
    }).trigger('resize');
})(jQuery);


/* I used fetch since I think this is the better solution for getting data from a 'local' JSON file*/
fetch('./exercise_assets/frontend.json').then((res) => res.json()).then((data) => {

    /* JSON data inserted in the title */
    document.querySelector('h1').innerHTML = data.title;

    /* JSON data inserted in different Cards */    
    let cardTitles = document.getElementsByClassName('card-title');
    let cardText = document.getElementsByClassName('card-text');
    let forCardImages = document.getElementsByClassName('card');
    let button = document.querySelector('button');

    (insertCardData = () => {
        /* For titles */
        for (let i = 0; i < cardTitles.length; i++) {
            cardTitles[i].innerHTML = data.cards[i].title;    
        }

        /* For text */
        for (let i = 0; i < cardTitles.length; i++) {
            cardText[i].innerHTML = data.cards[i].text;    
        }

        /* For images */
        for (let i = 0; i < forCardImages.length; i++) {
           forCardImages[i].children[0].src = `./img/${data.cards[i].image}` ; 
        }

        button.textContent = data.cta;
    })();
    
});

