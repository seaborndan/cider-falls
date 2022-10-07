import { getAreas } from "./database.js";
import { getGuests } from "./database.js";

const guests = getGuests();
const areas = getAreas();
export const areasToHTML = () => {
  
  let areaHTML = "";

  for (const area of areas) {
    areaHTML += `<div class="park-area">
    <p class="area-title" id="area--${area.id}">${area.name}</p>
    <p class="description">Supports ${area.supports}</p>
  </div>` 
  }

  return areaHTML;
}

document.addEventListener(
  "click",
  (clickEvent) => {
    const itemClicked = clickEvent.target;

    if(itemClicked.id.startsWith("area")) {
      const [,areaPrimaryKey] = itemClicked.id.split("--");
      let numOfGuests = 0;
      let matchingArea = null;
      for(const area of areas) {
        if(area.id === parseInt(areaPrimaryKey)) {
          matchingArea = area;
        }
      }

      for(const guest of guests) {
        if (matchingArea.id === guest.visitingID) {
          numOfGuests++;
        }
      }

      window.alert(`There are ${numOfGuests} guests in this area`)
    }
  }
)