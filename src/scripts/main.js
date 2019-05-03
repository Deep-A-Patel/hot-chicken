console.log("chicken");

//  <div>
//   <section>
//     <h3>Name:</h3>
//     <h4>Spice Level:</h4>
//     <p>Purchased</p>
//     <p>Color:</p>
//     <button>Edit</button>
//     <button>Delete</button>
//   </section>
// </div>

function populatePage(chickenArray) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = chickenArray.map(makeGrid).join("");
  document.querySelector("#chicken-cards").append(newDiv);
}

const makeGrid = (item, index) => {
  let sold = `<p class="buy"><strong>Eat more Chicken</strong></p>`;
  let Purchased = item.purchased;
  if (item.purchased) {
    sold = `<p class="buy"><strong>All Sold Chicken</strong></p>`;
  }
  let block = `
    <section id="card--${index}" style="border: 2px solid ${item.color}">
    <h3>Name: ${item.name}</h3>
    <h4>Spice Level: ${item.spicelevel}</h4>
    ${sold}
    <p>Color: ${item.color}</p>
    <button data-edit-id="${item.id}" onClick="handleEdit(this)">Edit</button>
    <button data-delete-id="${
      item.id
    }" onClick="handleDelete(this)">Delete</button>
    `;
  return block;
};

getAllChicken().then(inventoryFromGetAllChicken => {
  console.log("the chicken", inventoryFromGetAllChicken);
  populatePage(inventoryFromGetAllChicken);
});

function handleEdit(chicken) {
  let whichChicken = chicken.getAttribute("data-edit-id");
  console.log("Let's Edit", whichChicken);
}
