const boxes = document.querySelectorAll('.box')
// const more = document.querySelector('.more1')

//const picture = document.getElementById('picture');
//const myImage = document.getElementById('myImage');

var experience = document.querySelector('.box.experience');
var experience2 = document.querySelector('.box.experience2');

window.addEventListener('scroll', checkBoxes)
window.addEventListener('onClick', more1)

//picture.addEventListener('mouseover', () => {
//    myImage.style.display = 'block';
//});

//picture.addEventListener('mouseout', () => {
//    myImage.style.display = 'none';
//});

var currentLanguage = "sr";

var translations = {
        "name": {
            "sr": "Milos Jovano",
            "en": "Milos Jovanovic (English)"
        },
        "location": {
            "sr": "Srbija, Beograd +38169/366-36-88",
            "en": "Serbia, Belgrade +38169/366-36-88 (English)"
        },
        "linkedin": {
            "sr": "linkedin.com/in/milos-jovanovic-59ab80164",
            "en": "linkedin.com/in/milos-jovanovic-59ab80164 (English)"
        },
        // Dodajte ostale prevode ovde
    };

function translate(language) {
        var elements = document.querySelectorAll("[data-translate]");
        elements.forEach(function (element) {
            var key = element.getAttribute("data-translate");
            var translation = translations[key][language];
            element.textContent = translation;
        });
}

    // Funkcija za promenu jezika
function toggleLanguage() {
        if (currentLanguage === "sr") {
            currentLanguage = "en";
        } else {
            currentLanguage = "sr";
        }
        translate(currentLanguage);
}

    // Poziv funkcije za prevođenje kada se stranica učita
document.addEventListener("DOMContentLoaded", function () {
        translate(currentLanguage);
});


function translate(language) {
        var elements = document.querySelectorAll("[data-translate]");
        elements.forEach(function (element) {
            var key = element.getAttribute("data-translate");
            var translation = translations[key][language];
            element.textContent = translation;
   });
}

    // Pozovite funkciju za prevođenje kada se stranica učita
document.addEventListener("DOMContentLoaded", function () {
        // Ovde možete postaviti podrazumevani jezik
        var defaultLanguage = "sr";
        translate(defaultLanguage);
});


experience.style.display = 'block';
experience2.style.display = 'none';


function change() {


    // Promeni prikaz sekcija
    if (experience.style.display === 'block') {
        experience.style.display = 'none';
        experience2.style.display = 'block';
    } else {
        experience.style.display = 'block';
        experience2.style.display = 'none';
    }

    // Promeni boje dugmadi
    var leftButton = document.getElementById('left');
    var rightButton = document.getElementById('right');
    var lefth2 = document.getElementById('left_h2')
    var righth2 = document.getElementById('right_h2')

    if (experience.style.display === 'block') {
        leftButton.style.color = '#ff9900';
        rightButton.style.color = '';
        lefth2.style.color = '#ff9900';
        righth2.style.color = '';
    } else {
        rightButton.style.color = '#ff9900';
        leftButton.style.color = '';
        righth2.style.color = '#ff9900';
        lefth2.style.color = '';
    }
}




checkBoxes()
// more1()

function more1() {
//    console.log("Pritisnuto dugme");
    var task1 = document.querySelector('.tasks1');
    var task1_1 = document.querySelector('.tasks1_1');

    if (task1.style.display === 'block') {
        task1_1.style.display = 'none';
        task1.style.display = 'none';
        const more1 = document.querySelector('#arrow1')
        more1.classList.remove('fa-chevron-up')
        more1.classList.add('fa-chevron-down')
    } else {
        task1_1.style.display = 'block';
        task1.style.display = 'block';
        const more1 = document.querySelector('#arrow1')
        more1.classList.remove('fa-chevron-down')
        more1.classList.add('fa-chevron-up')
    }

}

function more2() {
//    console.log("print stisnuto dugme ")
    var task2 = document.querySelector('.tasks2');
    const more2 = document.querySelector('#arrow2');

    if (task2.style.display === 'block') {
        task2.style.display = 'none';
        const more2 = document.querySelector('#arrow2')
        more2.classList.remove('fa-chevron-up')
        more2.classList.add('fa-chevron-down')
    } else {
        task2.style.display = 'block';
        const more2 = document.querySelector('#arrow2')
        more2.classList.remove('fa-chevron-down')
        more2.classList.add('fa-chevron-up')
    }

    // var element = document.querySelector('.task1');
    // element.style.display = 'show';
}

function more3() {
//    console.log("print stisnuto dugme ")
    var task3 = document.querySelector('.tasks3');
    const more3 = document.querySelector('#arrow3');

    if (task3.style.display === 'block') {
        task3.style.display = 'none';
        const more3 = document.querySelector('#arrow3')
        more3.classList.remove('fa-chevron-up')
        more3.classList.add('fa-chevron-down')
    } else {
        task3.style.display = 'block';
        const more3 = document.querySelector('#arrow3')
        more3.classList.remove('fa-chevron-down')
        more3.classList.add('fa-chevron-up')
    }
}

function repair_one() {
//    console.log("print stisnuto dugme ")
    var task4 = document.querySelector('.repair1');
    const more4 = document.querySelector('#arrow4');

    if (task4.style.display === 'block') {
        task4.style.display = 'none';
        const more4 = document.querySelector('#arrow4')
        more4.classList.remove('fa-chevron-up')
        more4.classList.add('fa-chevron-down')
    } else {
        task4.style.display = 'block';
        const more4 = document.querySelector('#arrow4')
        more4.classList.remove('fa-chevron-down')
        more4.classList.add('fa-chevron-up')
    }
}

function repair_two() {
//    console.log("print stisnuto dugme ")
    var task5 = document.querySelector('.repair2');
    const more5 = document.querySelector('#arrow5');

    if (task5.style.display === 'block') {
        task5.style.display = 'none';
        const more5= document.querySelector('#arrow5')
        more5.classList.remove('fa-chevron-up')
        more5.classList.add('fa-chevron-down')
    } else {
        task5.style.display = 'block';
        const more5 = document.querySelector('#arrow5')
        more5.classList.remove('fa-chevron-down')
        more5.classList.add('fa-chevron-up')
    }
}



function checkBoxes() {
//    console.log(window.innerHeight / 5 * 4)
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

}