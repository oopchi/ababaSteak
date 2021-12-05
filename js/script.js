const next = $('#next');
const prev = $('#prev');
const imgs = $('.images > img');

let idx = 0;

function main() {
    $.each(imgs, (idxx, images) => {
        $(images).css({display: 'none', opacity: 0});
    })
    imgs.eq(idx).css({display: 'block', opacity: 1});

    prevhandler();
    nexthandler();

    nextCustom();
}

function updateImg(prevImg, nextImg) {
    const prevElem = imgs.eq(prevImg);
    const nextElem = imgs.eq(nextImg);

    prevElem.animate(
        {opacity: 0},
        {
            complete: () => {
                prevElem.css('display', 'none')
                nextElem.css('display', 'block')
                nextElem.animate({opacity : 1})
            }
        }
    );
}

function prevhandler() {
    prev.on('click', () => {
        const prevImg = idx;
    
        idx--;
        if(idx < 0)
            idx = imgs.length - 1;

        updateImg(prevImg, idx);
    })
}

function nextCustom() {
    const prevImg = idx;
    
    idx++;
    idx%=imgs.length;

    updateImg(prevImg, idx);

    setTimeout("nextCustom()", 5000);
}

function nexthandler() {
    next.on('click', () => {
        const prevImg = idx;
    
        idx++;
        idx%=imgs.length;

        updateImg(prevImg, idx);
    })

}

main();
