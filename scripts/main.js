import { guestsToHTML } from "./guests.js";
import { areasToHTML } from "./areas.js";

const parentAreaElement = document.querySelector("#area-container");
parentAreaElement.innerHTML += areasToHTML();

const parentGuestsElement = document.querySelector("#guests-container");
parentGuestsElement.innerHTML += guestsToHTML();