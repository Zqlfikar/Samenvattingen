import Product from './Product.js';
import { producten } from './ProductenArray.js';

export default class ProductenRepository {
  #producten = [];

  constructor() {
    this.#haalProductenOp();
  }

  get producten() { return this.#producten; }

  // Voegt een product achteraan toe aan de array #producten
  #voegProductToe(
    id,
    eigenaar,
    postcode,
    gemeente,
    titel,
    omschrijving,
    prijs,
    categorie,
    afbeeldingen
  ) {}

  // Retourneert het product met opgegeven id
  geefProduct(id) { }

  // Retourneert een array met producten behorend tot de opgegeven categorie
  geefProductenUitCategorie(categorie) {}

  // Retourneert een alfabetisch gesorteerde array van strings die de unieke categorieën bevat
  geefAlleCategorieen() { }

  // Vult de repository met producten
  #haalProductenOp() {
    producten.forEach(
      ([
        id,
        eigenaar,
        postcode,
        gemeente,
        titel,
        omschrijving,
        prijs,
        categorie,
        afbeeldingen,
      ]) =>
        this.#voegProductToe(
          id,
          eigenaar,
          postcode,
          gemeente,
          titel,
          omschrijving,
          prijs,
          categorie,
          afbeeldingen
        )
    );
  }
}
