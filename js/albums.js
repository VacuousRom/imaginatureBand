//album handler

class albumUI {
    constructor() {
        this.booklet = document.querySelector('#booklet');
       
        
        this.albumFiveBtn = document.querySelector('#track-five');
       
        this.bookletClose = document.querySelector('.booklet-close');
        this.bookletBg = document.querySelector('.booklet-wrap-bg');
    }

    openTrackList() {
    this.albumFiveBtn.addEventListener('click', () => {
        booklet.classList.add('booklet-show');
        this.bookletBg.classList.add('booklet-wrap-bg-show');
    })
   
}

    closeTrackModal() {
        
        this.bookletClose.addEventListener('click', () => {
            
            booklet.classList.remove('booklet-show');          
            this.bookletBg.classList.remove('booklet-wrap-bg-show');
        })

}
}

const albumOneList = new albumUI;
albumOneList.openTrackList();
albumOneList.closeTrackModal();