import Boek from './Boek.js';
import { boeken } from './boekenArray.js';

export default class BoekenRepository {
  #boeken = [];
  constructor() {
    this.boekenVullen();
  }

  get boeken() {
    return this.#boeken;
  }

  voegBoekToe(id, titel, afbeelding) {
    this.#boeken.push(new Boek(id, titel, afbeelding));
  }

  boekenVullen() {
    boeken.forEach(([id, titel, afb]) => this.voegBoekToe(id, titel, afb));
  }

  // geefBoeken retourneert een deel van de boeken in een array
  // parameter 'vanafBoek' is een nummer en geeft aan vanaf het hoeveelste boek we een deel nemen
  // parameter 'aantalBoeken' is een nummer en geeft aan hoeveel opeenvolgende boeken we in het deel stoppen
  geefBoeken(vanafBoek, aantalBoeken) {
    return this.#boeken.slice(vanafBoek, vanafBoek + aantalBoeken);
  }
}
