const allShoes = [
  {
    id: 1,
    image: "images/image-1.png",
    name: "Air Jordan 1 Mid Dutch Green",
    category: "Tênis Air Jordan",
    price: 1199.99,
  },
  {
    id: 2,
    image: "./images/image-2.png",
    name: "Air Jordan 1 High Zoom CMFT Tropical Twist",
    category: "Tênis Air Jordan",
    price: 1049.00,
  },
  {
    id: 3,
    image: "./images/image-3.png",
    name: "Air Jordan 1 Mid Dutch Green",
    category: "Tênis Air Jordan",
    price: 1350.00,
  },
  {
    id: 4,
    image: "./images/image-4.png",
    name: "Air Jordan 1 Mid GS 'Light Smoke Grey'",
    category: "Tênis Air Jordan",
    price: 1585.00,
  },
  {
    id: 5,
    image: "./images/image-5.png",
    name: "Air Jordan 1 Mid SE Bright Citrus",
    category: "Tênis Air Jordan",
    price: 949.99,
  },
  {
    id: 6,
    image: "./images/image-6.png",
    name: "Air Jordan 1 Mid Grey Camo",
    category: "Tênis Air Jordan",
    price: 999.99,
  },
];

const feed = document.querySelector('.feed');

const shoeCards = allShoes.map(shoe => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = shoe.image;
  image.alt = shoe.name;

  const infoDiv = document.createElement('div');

  const title = document.createElement('h4');
  title.classList.add('productTitle');
  title.textContent = shoe.name;

  const category = document.createElement('span');
  category.classList.add('productCategory');
  category.textContent = shoe.category;

  const price = document.createElement('span');
  price.classList.add('productPrice');
  price.textContent = `R$ ${shoe.price.toFixed(2)}`;

  infoDiv.appendChild(title);
  infoDiv.appendChild(category);

  card.appendChild(image);
  card.appendChild(infoDiv);
  card.appendChild(price);

  return card;
});

feed.append(...shoeCards);