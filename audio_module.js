//haetaan Windowista audio kohdat, nämä löyty kun kirjottaa consolee window ja kaivaa, Copilotilla kans katsoin ehdottaa näitä.
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

//tehään class audio module
class AudioModule {
  constructor() {
    this.backgroundMusic = null;
    this.clickSound = null;
    this.isBackgroundMusicPlaying = false;
  }

  //miksi Async? En tiedä oikeen tää voi aiheuttaa varmaan jotain bugia? onko fetch parempi? Stackoverflow mukaa joku oli kommentoinu et voi aiheuttaa jos ei onnistu lataa ni sivu ei lataa?
  async loadAudioFile(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
  }

  playSound(audioBuffer, callback = () => {}) {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.onended = callback;
    source.start();
  }

  async startBackgroundMusic(url) {
    if (!this.isBackgroundMusicPlaying) {
      this.backgroundMusic = await this.loadAudioFile(url);
      this.playSound(this.backgroundMusic, () => {
        this.isBackgroundMusicPlaying = false;
      });
      this.isBackgroundMusicPlaying = true;
    }
  }

  async playClickSound(url) {
    this.clickSound = await this.loadAudioFile(url);
    this.playSound(this.clickSound);
  }
}

export default AudioModule;
