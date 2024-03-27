class Multimedia {
    constructor(url) {
        this._url = url;
    }
    get url() {
        return this._url;
    }
    set url(url) {
        this._url = url;
    }
    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`;
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    playMultimedia() {
        iifeProgram.play(this.url, this._id)
    }
    setInicio(tiempo) {
        let nuevaUrl = `${this.url}?start=${tiempo}`;
        this.url = nuevaUrl;
    }
}

const iifeProgram = (() => {
    const srcMultimedia = (url, id) => {
        let idEl = document.getElementById(`${id}`);
        idEl.setAttribute('src', url);
    };

    return {
        play: (url, id) => {
            srcMultimedia(url, id);
        }
    };
})();

const musica = new Reproductor("https://www.youtube.com/embed/_oYSiPBUuC8?si=R7zOR0Hc3MpGRR_T", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/kxyyKU8rgaU?si=ekX9X3YloW-jfrHS", "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/WhbR-2KWBoQ?si=KEKBQc8TQCIh0W9C", "series")
musica.setInicio("100")
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();