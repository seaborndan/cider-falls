import { getGuests } from "./database.js";

export const guestsToHTML = () => {
  const guests = getGuests();
  let guestHTML = "";
  guestHTML += `<h2>Guests</h2>`
  for (const guest of guests) {
    guestHTML += `<div id="guest-${guest.id}"class="guest"><p>${guest.name}</p></div>`
  }

  return guestHTML;
}