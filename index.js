//elements
const form = document.querySelector(".todo-form")
const listInput = document.querySelector("input[name='list-input']")
const listCover = document.querySelector(".list-cover")
//get items from locastorage if any or set it to empty array
const items=JSON.parse(localStorage.getItem("items"))||[];

//functions
const handleSubmit = (e)=>{
    e.preventDefault();
    const value = listInput.value
    item={
        value,
        isChecked:false
    }
    items.push(item)
    localStorage.setItem("items",JSON.stringify(items));
    addListItems(items,listCover)
    listInput.value="";
}
const addListItems = (listItems,list)=>{
    //converting Items in array to <li> with input checkbox
    listCover.innerHTML =  listItems.map((item,index)=>{
        return `
        <li class='bg--blue flex-container row'>
                        <input id="item-${index}" data-index=${index} type="checkbox" />
                        <label for="item-${index}">${item.value}</label>
                    </li>
        `
    }).join("");
}
//adding items from localstorage if any 
addListItems(items,listCover)
//listeners
form.addEventListener("submit",handleSubmit)
