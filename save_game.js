if (localStorage.getItem('savedScene') !== null) {
  scene_management.StartSetup();
} else {
  localStorage.setItem('savedScene', 'EnsimmainenScene');
}

window.addEventListener('beforeunload', function () {
  localStorage.setItem('savedScene', 'EnsimmainenScene');
});

function startOver() {
  localStorage.removeItem('savedScene');
}
