// news section

let currentNews = 0;

const nxtBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');

const newsContainer = document.querySelector('.text-section');
const newsHeader = document.querySelector('.news-heading');
const newsDate = document.querySelector('.news-date');
const newsContent = document.querySelector('.news-content');

//update news

let updateNews = function() {
    newsHeader.innerHTML= newsArr[currentNews].newsTitle;
        newsDate.innerHTML= newsArr[currentNews].newsDate;
        newsContent.innerHTML= newsArr[currentNews].newsText;
        newsContainer.classList.add('current');
}

let newsArr = [
    {newsTitle: "Gramy dla Sławka", newsDate: "21 września 2019 r.", newsText: "Sławek Tychek to olsztyński krytyk muzyczny, który przez lata wspierał młode, lokalne zespoły. Jest chory na neuroboreliozę, ma też naczyniaka mózgu i cukrzycę typu drugiego. Liczymy na wasze wsparcie 5 października 2019r. o godzinie 18:00 w Toast Pub w Olsztynie. Wstęp od 10 zł."},
    {newsTitle: "Imaginature w studiu", newsDate: "7 września 2019 r.", newsText: "Weekend 7 - 8 września poświęcamy na nagrania wokali i perkusji. Pozdrawiamy ze studia Kalifornia w Warszawie, gdzie w pocie czoła pracujemy nad naszym pierwszym albumem!"},    
    {newsTitle: "Nagrania gitar w toku", newsDate: "17 sierpnia 2019 r.", newsText: "Witajcie! Od czasu ostatniego newsa przystąpiliśmy do nagrywania gitar na płytę, a już niebawem do studia wkroczy nasz perkusista, Krzysztof. Spodziewajcie się kolejnych newsów, premierę albumu przewidujemy na grudzień 2019 r."},
    {newsTitle: "Debiutancki album", newsDate: "20 lipca 2019 r.", newsText: "Nareszcie ogłaszamy, że przystępujemy do nagrania naszego debiutanckiego albumu. Dziś podpisaliśmy umowę z warszawskim studiem Kalifornia. Oczekujcie kolejnych informacji na ten temat!"},
    {newsTitle: "Kolejny koncert zespołu", newsDate: "13 stycznia 2019 r.", newsText: "Już 13 stycznia 2019 r., razem z takimi zespołami jak Celtbash czy Dravar, wystąpimy w MDKu w Szczytnie w ramach Wielkiej Orkiestry Świątecznej Pomocy. Koncert zacznie się o godzinie 16!"},
    {newsTitle: "Imaginature w radiu BonTon", newsDate: "22 listopada 2018 r.", newsText: "Dziś o 22:00 możecie posłuchać audycji Wieczorna rockosfera w Radiu BonTon. Z naszym udziałem! Po zapoznaniu się z playlistą stwierdzamy, że to będzie uczta dla fanów metalu symfonicznego."},
    {newsTitle: "Pierwszy koncert Imaginature", newsDate: "21 października 2018 r.", newsText: "Serdecznie zapraszamy na nasz pierwszy koncert, który odbędzie się w Miejskim Domu Kultury w Szczytnie w dniu 3 listopada 2018 r. Będą to co prawda spóźnione, ale z pewnością metalowe zaduszki."}
    
]

const nextSlide = () => { 

    if (currentNews >= newsArr.length - 1) {
        currentNews = -1;
    }

    newsContainer.classList.remove('current');

    setTimeout(function() {
        currentNews++;
    
        newsHeader.innerHTML= newsArr[currentNews].newsTitle;
        newsDate.innerHTML= newsArr[currentNews].newsDate;
        newsContent.innerHTML= newsArr[currentNews].newsText;
        newsContainer.classList.add('current');
    }, 400)
    
}

const prevSlide = () => { 

    if (currentNews <= 0) {
        currentNews = newsArr.length;
    }

    newsContainer.classList.remove('current');
    setTimeout(function() {
        currentNews--;
    
        newsHeader.innerHTML= newsArr[currentNews].newsTitle;
        newsDate.innerHTML= newsArr[currentNews].newsDate;
        newsContent.innerHTML= newsArr[currentNews].newsText;
        newsContainer.classList.add('current');
    }, 400)
        
}

nxtBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
updateNews();