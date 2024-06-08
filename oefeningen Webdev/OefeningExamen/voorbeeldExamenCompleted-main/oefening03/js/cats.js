/**
 * oefening03
 * ----------
 * In deze oefening moet je data uit een JSON-file (zie data folder, catbreeds.json) ophalen of via de url https://api.thecatapi.com/v1/breeds.
 * De data bevat de verschillende kat rassen.
 * De verschillende rassen worden weergegeven in een select list. Bij selectie van een ras worden de details weergegeven.
 * Zorg ervoor dat je het resultaat uit catbreeds.png bekomt door Vraag a), b) en c) hieronder op te lossen
 */

class Breed {
  #id;
  #name;
  #description;
  #imageUrl;
  #lifespan;
  #origin;
  #weight;
  #temperament;
  constructor(
    id,
    name,
    description,
    imageUrl,
    lifespan,
    origin,
    weight,
    temperament
  ) {
    this.#id = id;
    this.#name = name;
    this.#description = description;
    this.#imageUrl = imageUrl;
    this.#lifespan = lifespan;
    this.#origin = origin;
    this.#weight = weight;
    this.#temperament = temperament;
  }
  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get description() {
    return this.#description;
  }
  get imageUrl() {
    return this.#imageUrl;
  }
  get description() {
    return this.#description;
  }
  get lifespan() {
    return this.#lifespan;
  }
  get origin() {
    return this.#origin;
  }
  get weight() {
    return this.#weight;
  }
  get temperament() {
    return this.#temperament;
  }
}

class BreedRepository {
  #breeds;
  constructor() {
    this.#breeds = [];
  }

  addBreed(
    id,
    name,
    description,
    imageUrl,
    lifespan,
    origin,
    weight,
    temperament
  ) {
    this.#breeds.push(
      new Breed(
        id,
        name,
        description,
        imageUrl,
        lifespan,
        origin,
        weight,
        temperament
      )
    );
  }

  get breeds() {
    return this.#breeds
      .map((b) => {
        return { id: b.id, name: b.name };
      })
      .sort();
  }
  getBreed(id) {
    return this.#breeds.find((breed) => breed.id === id);
  }
}
class CatsComponent {
  #breedsRepository;
  constructor() {
    this.#breedsRepository = new BreedRepository();
    this.getData();
  }
  //Vraag a)
  //Haal de data op uit de json-file data/catbreeds.json of via de url https://api.thecatapi.com/v1/breeds
  //en voeg de data adhv de methode addBreed toe aan de BreedRepository.
  //Merk op :
  // - de imageUrl komt overeen met de property "url" van de property "image" in de json. Niet alle rassen hebben een bijhorende image, bvb het ras "European burmese". Maak dan gebruik van de image "no#image#available.svg" in de images folder.
  // - weight is de property "metric" van de property "weight" in de json.
  //Roep vervolgens de methode showBreedList() op.
  //Indien het ophalen van de data faalt, geef je een melding weer in de console.
  async getData() {
    try {
      const response = await fetch("data/catbreeds.json");
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      //fetch('https://api.thecatapi.com/v1/breeds')
      const catBreedsResult = await response.json();
      catBreedsResult.forEach((breed) => {
        this.#breedsRepository.addBreed(
          breed.id,
          breed.name,
          breed.description,
          breed.image?.url,
          breed.lifespan,
          breed.origin,
          breed.weight.metric,
          breed.temperament
        );
      });
      this.showBreedList();
    } catch (error) {
      console.log(error.message);
    }
  }

  //Vraag b)
  //Voeg de rassen toe aan de select tag. Voor elk ras genereer je volgende HTML : <option value="id van ras">name van het ras</option>
  //Zorg ervoor dat als er een ras geselecteerd wordt dan de details van het ras getoond worden adhv de methode showBreed. Als er geen ras geselecteerd is dan wordt de class hidden toegevoegd aan de paragraaf met id breeddata
  showBreedList() {
    const breedList = document.getElementById("breedList");
    this.#breedsRepository.breeds.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.text = breed.name;
      breedList.appendChild(option);
    });
    breedList.onchange = (event) => {
      if (event.target.value) {
        this.showBreed(this.#breedsRepository.getBreed(event.target.value));
      } else {
        document.getElementById("breedData").className = "hidden";
      }
    };
  }

  showBreed(breed) {
    document.getElementById("breedData").classList.remove("hidden");
    document.getElementById("breedImage").src =
      breed.imageUrl || "images/no#image#available.svg";
    document.getElementById("breedName").innerText = breed.name;

    //vraag c)
    //geef de beschrijving van een geselecteerd ras weer in het element met id breedDescription. Zie beeld catbreeds.png.
    //Voor het ras American bobtails is dit :
    //American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.<br>origin: United States<br>weight: 3 - 7 kg<br>lifespan: 11 - 15 years<br>temperament: Intelligent, Interactive, Lively, Playful, Sensitive
    document.getElementById(
      "breedDescription"
    ).innerHTML = `${breed.description}<br>origin: ${breed.origin}<br>weight: ${breed.weight} kg<br>lifespan: ${breed.lifespan} years<br>temperament: ${breed.temperament}`;
  }
}

window.onload = () => {
  new CatsComponent();
};
