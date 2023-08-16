let currentId = 1;
let isFetching = false;
let hasMore = true;

let root = document.getElementById("root");
let APIReq = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

function ParseCardsToArray() {
  fetch(APIReq)
    .then((response) => response.json())
    .then(({ data }) => {
      cards = data.map((card) => {
        //Get Each Card's ID:
        console.log(data[0].id);
      });
    });
}

async function fetchData() {
  isFetching = true;
  ParseCardsToArray();
  /* let response = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${currentId}`
  );*/
}

fetchData();
