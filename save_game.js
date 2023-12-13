if (localStorage.getItem('savedScene') !== null) {
  scene_management.StartSetup();
} else {
  localStorage.setItem('savedScene', GetSceneData('EnsimmainenScene'));
}

window.addEventListener('beforeunload', function () {
  localStorage.setItem('savedScene', GetSceneData('EnsimmainenScene'));
});

function startOver() {
  localStorage.removeItem('savedScene');
}
