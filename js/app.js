

//დავალება 1:

const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    
    btn.style.display = 'none';

    const magic = document.getElementById("magic");
    
    magic.style.display = 'block';
})

////დავალება 2:

const img = document.createElement("img");
img.src = "https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8";
const src = document.getElementById("forPicture");
src.appendChild(img);