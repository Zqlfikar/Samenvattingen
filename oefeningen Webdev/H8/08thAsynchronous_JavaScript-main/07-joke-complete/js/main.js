function init() {
  document.getElementById('joke').onclick = getData;
}

async function getData() {
  const response = await fetch(
    'https://v2.jokeapi.dev/joke/Programming,Pun,Spooky?type=twopart'
  );
  const result = await response.json();
  toHtml(result);
}

function toHtml({ category, setup, delivery }) {
  document.getElementById('category').innerText = `Category = ${category}`;
  document.getElementById('setup').innerText = `Q: ${setup}`;
  document.getElementById('delivery').innerText = `A: ${delivery}`;
}

window.onload = init;
