/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/



/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form');
const calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault();

    const calculateCm = parseFloat(document.getElementById('calculate-cm').value);
    const calculateKg = parseFloat(document.getElementById('calculate-kg').value);

    if (isNaN(calculateCm) || isNaN(calculateKg) || calculateCm <= 0 || calculateKg <= 0) {
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');
        calculateMessage.textContent = 'Please enter valid values for Height and Weight';

        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 4000);
    } else {
        const cm = calculateCm / 100;
        const kg = calculateKg;
        const bmi = Math.round(kg / (cm * cm));

        if (!isNaN(bmi)) {
            if (bmi < 18.5) {
                calculateMessage.classList.add('color-green');
                calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny😕`;
            } else if (bmi < 25) {
                calculateMessage.classList.add('color-green');
                calculateMessage.textContent = `Your BMI is ${bmi} and you are Healthy🥳`;
            } else {
                calculateMessage.classList.add('color-green');
                calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight😞`;
            }
        } else {
            calculateMessage.classList.remove('color-green');
            calculateMessage.classList.add('color-red');
            calculateMessage.textContent = 'Invalid calculation. Please check your inputs.';
        }

        calculateForm.reset();

    }
};

calculateForm.addEventListener('submit', calculateBmi);
