var boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
  let btnPlus = boxes[i].children[4].children[2];
  let nombre = boxes[i].children[4].children[1];
  let total = boxes[i].children[3].children[1];

  let prix = boxes[i].children[2].children[1];

  let qty = parseInt(nombre.innerText);
  let prixUni = parseInt(prix.innerText);

  btnPlus.addEventListener("click", function () {
    qty++;
    nombre.innerText = qty;
    total.innerText = prixUni * qty;
    somme();
  });

  let btnMoin = boxes[i].children[4].children[0];
  btnMoin.addEventListener("click", function () {
    qty--;
    if (qty < 0) {
      qty = 0;
    }
    nombre.innerText = qty;
    total.innerText = prixUni * qty;
    somme();
  });
  let aime = boxes[i].children[5].children[0].children[0];
  aime.addEventListener("click", function () {
    if (aime.style.color === "red") {
      aime.style.color = "black";
    } else {
      aime.style.color = "red";
    }
  });

  let sup = boxes[i].children[5].children[1].children[0];
  let box = boxes[i];
  if (box) {
    sup.addEventListener("click", function () {
      box.remove();
    });
  }
}

let tota1 = document.getElementById("tyu");
function somme() {
  let sum = 0;
  let total = document.getElementsByClassName("price");
  for (let index = 0; index < total.length; index++) {
    let totalUnit = parseInt(total[index].innerText);

    sum = sum + totalUnit;
  }
  tota1.innerHTML = sum;
}

/*var produit = document.getElementsByClassName("box");
const totalC1 = document.getElementById("tyu");


function updateTotalsCommande() {
  let TotalsCommande = 0;
  for (let i = 0; i < produit.length; i++) {
    const totalUnit = produit[i].querySelector(".totalUnit")
    
    TotalsCommande += parseInt(totalUnit.innerText);
  }
  totalC1.innerText = TotalsCommande;
}
updateTotalsCommande();*/
