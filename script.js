const btnHome = document.querySelector('.fa-home');
const btnFolder = document.querySelector('.fa-folder');
const btnEnvelope = document.querySelector('.fa-envelope');
const btnTwitter = document.querySelector('.fa-twitter');

const home = document.querySelector('.home');
const folder = document.querySelector('.folder');
const envelope = document.querySelector('.envelope');
const twitter = document.querySelector('.twitter');

const btns = document.querySelectorAll('.nav__icons');
const fa = document.querySelectorAll('.fa');
const speechBubble = document.querySelectorAll('.bubble');
const tabsContent = document.querySelectorAll('.tab-content');


btnHome.classList.add('active');

const activeSelector = (e) => {
  fa.forEach((el) => el.classList.remove('active'));
};
const activeBubbleFunction = () => {
  speechBubble.forEach((bbl) => bbl.classList.remove('b-active'));
};
btnHome.addEventListener('click', (e) => {
  const clicked = e.target.closest('.fa-home');
  activeSelector();
  clicked.classList.add('active');
  tabsContent.forEach((tab) => tab.classList.remove('tab-active'));
  document
    .querySelector(`.tab-content--${clicked.dataset.toggle}`)
    .classList.add('tab-active');
  activeBubbleFunction();
  const activeBubble = e.target.closest('.bubble');
  activeBubble.classList.add('b-active');
});
btnFolder.addEventListener('click', (e) => {
  const clicked = e.target.closest('.fa-folder');
  activeSelector();
  clicked.classList.add('active');
  tabsContent.forEach((tab) => tab.classList.remove('tab-active'));
  document
    .querySelector(`.tab-content--${clicked.dataset.toggle}`)
    .classList.add('tab-active');
  activeBubbleFunction();
  const activeBubble = e.target.closest('.bubble');
  activeBubble.classList.add('b-active');
});
btnEnvelope.addEventListener('click', (e) => {
  const clicked = e.target.closest('.fa-envelope');
  activeSelector();
  clicked.classList.add('active');
  tabsContent.forEach((tab) => tab.classList.remove('tab-active'));
  document
    .querySelector(`.tab-content--${clicked.dataset.toggle}`)
    .classList.add('tab-active');
  activeBubbleFunction();
  const activeBubble = e.target.closest('.bubble');
  activeBubble.classList.add('b-active');
});
btnTwitter.addEventListener('click', (e) => {
  const clicked = e.target.closest('.fa-twitter');
  activeSelector();
  clicked.classList.add('active');
  tabsContent.forEach((tab) => tab.classList.remove('tab-active'));
  document
    .querySelector(`.tab-content--${clicked.dataset.toggle}`)
    .classList.add('tab-active');
  activeBubbleFunction();
  const activeBubble = e.target.closest('.bubble');
  // activeBubble.classList.add('b-active');
  activeBubble.classList.add('.twitterActive');
});
