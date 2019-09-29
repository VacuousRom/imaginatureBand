class UI {
    constructor() {
        this.panels = document.querySelectorAll('.panel');
       
    }

    toggleOpen() {
        this.classList.toggle('open');
        
        setTimeout(() => this.childNodes[3].classList.toggle('memberDesc-open'), 300);
        
        
    }

    panelListener() {
        this.panels.forEach((panel) => {  
                     
            panel.addEventListener('click', this.toggleOpen)
        }
        );
        
    }
}

const openPanels = new UI;
openPanels.panelListener();