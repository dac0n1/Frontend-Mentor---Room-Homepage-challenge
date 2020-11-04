let views = [
  {
    headline:   "Discover innovative ways to decorate",
    description: `We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`,
    imageSrc: "./images/desktop-image-hero-1.jpg"
  },
  {
    headline: "We are available all across the globe",
    description:     `With stores all over the world, it\'s easy for you to find furniture for your home or place of 
    business. Locally, we’re in most major cities throughout the country. Find the branch nearest you 
    using our store locator. Any questions? Don\'t hesitate to contact us today.`,
    imageSrc: "./images/desktop-image-hero-2.jpg"
  },
  {
    headline: "Manufactured with the best materials",
    description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced 
    technology to ensure that every product is made as perfect and as consistent as possible. With three 
    decades of experience in this industry, we understand what customers want for their home and office.`,
    imageSrc: "./images/desktop-image-hero-3.jpg"
  }
]

const headline = document.getElementById("headline");
const description = document.getElementById("description");
const image = document.getElementById("image-adaptive")
const buyButton = document.getElementById("buy");

let nextItemButton = document.getElementsByClassName('btn-arrow');

let textAmount = views.length;
let currentText = 0;


changeText(currentText);

function changeText(index){
    currentText = index<0 ? textAmount-1 : index>2 ? 0 : index;  //allows to go from last array element to first and vice versa
    headline.innerHTML = views[currentText].headline;
    description.innerHTML = views[currentText].description;
    image.src = views[currentText].imageSrc;
}