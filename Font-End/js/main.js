window.onload = function() {
  var main = document.getElementById('main');
  var loadingScreen = document.getElementById('loadingScreen');
  main.classList.remove('hidden');
  loadingScreen.classList.remove('shown', 'overhidden');
  loadingScreen.classList.add('hidden');
}
