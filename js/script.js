const search = document.querySelector('.search');
const searchButton = document.querySelector('#search-button');
const countriesWrapper = document.querySelector('.content__countries');

const filter = document.querySelector('.filter');
const filterWrapper = document.querySelector('.filter-wrapper');
const filterList = document.querySelector('.filter-list');
const filterItems = document.querySelectorAll('.filter-item');

const allCountriesButton = document.querySelector('.all-countries');
const loader = document.querySelector('.loader');
const changeMode = document.querySelector('.header__mode');
const modeText = document.querySelector('.header__mode-text');
const icon = document.querySelector('#arrow-icon');

const API_URL = 'https://restcountries.com/v3.1';

let pageMode = localStorage.getItem('mode');
let itemsArr = [];
let selected;

// LISTENERS

changeMode.addEventListener('click', () => {
    if(!document.body.classList.contains('dark')){
        document.body.classList.add('dark');
        modeText.innerText = 'Light Mode';
        localStorage.setItem('mode', 'dark');
    } else {
        document.body.classList.remove('dark');
        modeText.innerText = 'Dark Mode';
        localStorage.clear();
    }
});
