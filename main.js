var prouductContainer;

//zebon gdeed
if (localStorage.getItem("ourproudct") != null) {
  prouductContainer = JSON.parse(localStorage.getItem("ourproudct"));
  displayProudct();
} else {
  prouductContainer = [];
}

var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");

function addProduct() {
  if (validation()==true)
  {
  var btn = document.getElementById("product");
  if (btn.innerHTML === "add product") {
    displayProudct();
  } else {
    Update();
  }

  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescInput.value,
  };
  prouductContainer.push(product);
  displayProudct();
  Cleraform();
  localStorage.setItem("ourproudct", JSON.stringify(prouductContainer));

  }
}

function Cleraform() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescInput.value = "";
}

function displayProudct() {
  var cartouna = "";
  for (var i = 0; i < prouductContainer.length; i++) {
    cartouna += `
<tr>
<td>${i}</td>
<td>${prouductContainer[i].name}</td>
<td>${prouductContainer[i].price}</td>
<td>${prouductContainer[i].category}</td>
<td>${prouductContainer[i].desc}</td>
<td> <button onclick="updatProdct(${i})"  class="btn  btn-outline-primary"> updata</button> </td>
<td>  <button  onclick="deletProudct(${i})" class="btn   btn-outline-danger"> delete</button></td>
</tr>`;
  }
  document.getElementById("displayProudct").innerHTML = cartouna;
}

function deletProudct(index) {
  prouductContainer.splice(index, 1);
  localStorage.setItem("ourproudct", JSON.stringify(prouductContainer));
  displayProudct();
}

function searchProudct(term) {
  var cartouna = "";
  for (i = 0; i < prouductContainer.length; i++) {
    if (
      prouductContainer[i].name.toLowerCase().includes(term.toLowerCase()) ==
      true
    ) {
      cartouna += `
    <tr>
    <td>${i}</td>
    <td>${prouductContainer[i].name}</td>
    <td>${prouductContainer[i].price}</td>
    <td>${prouductContainer[i].category}</td>
    <td>${prouductContainer[i].desc}</td>
    <td> <button onclick=" updatProdct(${i})" class="btn  btn-outline-primary"> updata</button> </td>
    <td>  <button  onclick="deletProudct(${i})" class="btn   btn-outline-danger"> delete</button></td>
    </tr>`;
    }
  }
  document.getElementById("displayProudct").innerHTML = cartouna;
}

function updatProdct(index) {
  productNameInput.value = prouductContainer[index].name;
  productPriceInput.value = prouductContainer[index].price;
  productCategoryInput.value = prouductContainer[index].category;
  productDescInput.value = prouductContainer[index].desc;
  UpData = `<button onclick="Update(${index}) "  class="btn  btn-primary"> updata</button>`;
  document.getElementById("product").innerHTML = UpData;
}
function Update(index) {
  prouductContainer[index].name = productNameInput.value;
  (prouductContainer[index].price = productPriceInput.value),
    (prouductContainer[index].category = productCategoryInput.value),
    (prouductContainer[index].desc = productDescInput.value);
  UpData = ` <button onclick="addProduct()" class="btn btn-primary id="product"">add product</button>`;
  document.getElementById("product").innerHTML = UpData;
  localStorage.setItem("ourproudct", JSON.stringify(prouductContainer));
  displayProudct();
  Cleraform();
}

function validation() {
  var regex = /^[A-Z][a-z]{1,8}$/;

  if (regex.test(productNameInput.value) == true) {
    return true;
  } else {
    return false;
  }
}
