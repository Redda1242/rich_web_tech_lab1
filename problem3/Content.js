//array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
	"https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
];

catImg();

const changeImgBtn = document.createElement("BUTTON");
changeImgBtn.textContent = 'change image';
changeImgBtn.addEventListener('click', ()=> catImg());
document.body.appendChild(changeImgBtn);
document.body.style.backgroundColor = "grey";

//add a random background color
document.body.addEventListener('click', ()=> getRandomColor());

function catImg()
{
    //reverse through array of images
    //getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
    const imgs = document.getElementsByTagName("img");
    for(let i = 0; i < imgs.length; i++) {
        const randomImg = Math.floor(Math.random() * catsImages.length)
        imgs[i].src = catsImages[randomImg]
    }
}

//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are awesome";
    headers[i].style.color = 'white';
    headers[i].style.textAlign = 'center';
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about cats.";
}

function getRandomColor() {
    const colors = ["#FFB6C1", "#FFC0CB", "#FF69B4", "#FFD1DC", "#FF1493", "#FF66CC", "#E0FFFF", "#89CFF0", "#008080", "#00FFFF","#40E0D0", "#87CEEB" ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor= colors[randomIndex];
    
}