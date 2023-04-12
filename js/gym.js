let productNameInput = document.getElementById("productNameInput")
let productPriceInput = document.getElementById("productPriceInput")
let productCatagoryInput = document.getElementById("productCatagoryInput")
let productDescriptionInput = document.getElementById("productDescriptionInput")
let search=document.getElementById("search")
let add =document.getElementById("addBtn")
let updateBtn =document.getElementById("updateBtn")
let temp;

console.log(add)

var AllArray;
if(localStorage.getItem("products")!=null){
AllArray=JSON.parse(localStorage.getItem("products"));
DisplayProducts(AllArray)

}else{
    AllArray=[]
}

function addProduct(){
    
let product = {
    name:productNameInput.value,
    price:productPriceInput.value,
    catagory:productCatagoryInput.value,
    description:productDescriptionInput.value
}
AllArray.push(product)
localStorage.setItem("products",JSON.stringify(AllArray))


clearVal()
DisplayProducts(AllArray)
}


function clearVal(){
    productNameInput.value=""
productCatagoryInput.value=""
productPriceInput.value=""
productDescriptionInput.value=""
}

function DisplayProducts(ele){
    var cartonna =``; 
    for(i=0;i<ele.length;i++){
cartonna+=` <tr>
<td>${i+1}</td>
<td>${ele[i].name}</td>
<td>${ele[i].price}</td>
<td>${ele[i].catagory}</td>
<td>${ele[i].description}</td>
<td><button class="btn btn-outline-warning" onclick="updateProduct(${i})" >update</button></td>
<td><button class="btn btn-outline-danger " onclick="DeleteProduct(${i})">delete</button></td>
</tr>`
    }
    document.getElementById("TableBody").innerHTML=cartonna;
    
}





function searchProduct(searchTerm){
var searchResult=[];
for(var i=0;i<AllArray.length;i++){
    if(AllArray[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true){
searchResult.push(AllArray[i])
    }
}
DisplayProducts(searchResult)
}



function DeleteProduct(deletedIndex){
AllArray.splice(deletedIndex,1)
DisplayProducts(AllArray)
localStorage.setItem("products",JSON.stringify(AllArray))

}


function updateProduct(up){
    productNameInput.value=AllArray[up].name
    productPriceInput.value=AllArray[up].price
    productCatagoryInput.value=AllArray[up].catagory
    productDescriptionInput.value=   AllArray[up].description

    updateBtn.classList.replace("d-none","d-inline-block")
    add.classList.add("d-none")
    temp=up;
}



function uploaded(){
        AllArray[temp].name=productNameInput.value
        AllArray[temp].price=productPriceInput.value
        AllArray[temp].catagory=productCatagoryInput.value
        AllArray[temp].description=productDescriptionInput.value
    
    DisplayProducts(AllArray)
    localStorage.setItem("products",JSON.stringify(AllArray))
    updateBtn.classList.replace("d-inline-block","d-none")
    add.classList.remove("d-none")
    clearVal()
}









