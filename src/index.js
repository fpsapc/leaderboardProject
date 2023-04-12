import './style.css';

const list = [
  {
    id: '1',
    name: 'name',
    score: '100',
  },
  {
    id: '2',
    name: 'name',
    score: '20',
  },
  {
    id: '3',
    name: 'name',
    score: '50',
  },
  {
    id: '4',
    name: 'name',
    score: '78',
  },
  {
    id: '5',
    name: 'name',
    score: '125',
  },
  {
    id: '6',
    name: 'name',
    score: '77',
  },
  {
    id: '7',
    name: 'name',
    score: '42',
  },
];

const listItem = document.getElementById('list');

list.map((item) => {
  if (item.id % 2 === 0) {
    listItem.innerHTML += `
    <li class= 'bgGrey'>${item.name}:<span>${item.score}</span></li>`;
  } else {
    listItem.innerHTML += `
<li>${item.name}:<span>${item.score}</span></li>`;
  }
  return ('');
});