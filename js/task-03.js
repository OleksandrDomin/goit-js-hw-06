const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector(".gallery");
console.log(galleryList);

// Pervyj sposob

// const imagesGallery = images.map(({url, alt}) => {
//   const imgElement = document.createElement("img");
//   imgElement.src = url;
//   imgElement.alt = alt;
//   imgElement.style.width = 300 + 'px';
//   const listElement = document.createElement("li");
//   listElement.append(imgElement);
//   return listElement;
// });
// galleryList.append(...imagesGallery)


// Vtoroj sposob
const imagesGallery = images.map(({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = '250px'></li>`).join("");
galleryList.insertAdjacentHTML('beforeend', imagesGallery)