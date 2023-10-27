function toggleMenu() {
  let menu = document.getElementById('menu');
  if (menu.style.display === 'block' || menu.style.display === '') {
    menu.style.display = 'none';
    document.getElementById('menu-icon').setAttribute('aria-expanded', 'false');
  } else {
    menu.style.display = 'block';
    document.getElementById('menu-icon').setAttribute('aria-expanded', 'true');
  }
}

document.getElementById('menu').style.display = 'none';

function toggleMenu() {
  let menu = document.getElementById('menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}