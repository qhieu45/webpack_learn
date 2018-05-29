const button = document.createElement('button');

button.innerText = 'show pic';

button.onclick = () => {
  return System.import('./image_viewer').then((module) => {
    module.default();
  })
}

document.body.appendChild(button);