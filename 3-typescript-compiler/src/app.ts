const btn = document.querySelector('button');

const clickHandler = (message:string) => {
  console.log("Clicked " + message)
}

if (btn) {
  btn.addEventListener("click", () => clickHandler.bind(null, 'You\'re Welcome'));
}
