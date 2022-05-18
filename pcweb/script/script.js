const todoList = document.querySelector("#todoList")
const addItem = document.querySelector("#addItem")
console.log(addItem)

/** 
 * Função para recuperar o valor digitado no input
 * @param 
 * @returns - String task
 */ 
const getTask = () => {
    const item = document.querySelector("#item")
    return (item.value)?item.value:false
}
/**
 * criar um li
 */
const createLi = task => {
    const itemList = document.createElement("li")
    const contentItemList = document.createTextNode(task)
    const spanItemList = document.createElement("span")
    spanItemList.appendChild(contentItemList)
    itemList.appendChild(spanItemList)
    return itemList
}
/**
 *  criar link de remoção
 */
const createLink = (className, labelText, parentHTML) => {
    const link = document.createElement("a")
    link.classList.add("clasName")
    const linkText = document.createTextNode("labelText")
    link.appendChild(linkText)
    link.setAttribute("href", "#")
    return link
}


const createLinkEdit = () => {
    const link = document.createElement("a")
    link.classList.add("Edit")
    const linkText = document.createTextNode("Editar")
    link.appendChild(linkText)
    link.setAttribute("href", "#")
    return link
}
const editLi = (itemList) => {
    console.log(itemList.firstChild)
    let taskName = itemList.firstChild.textContent
    let sizeTask = taskName.length
    taskName = taskName.substr(0, sizeTask - 12)
    console.log(textName)
    const imputEdit = document.createElement("imput")
    imputEdit.setAttribute("value", taskName)
    itemList.appendChild(imputEdit)

    const finish = document.createElement("button")
    const labelEdit = document.creatTextNode("concluir")
    concludeEdit.appendChild(labelEdit)
    itemList.appendChild(concludeEdit)

    itemList.childNodes[1].classList.remove("edit")
    console.log(itemList.childNodes[1])

}
/**  
 * Função para adicionar itens
 * @param String task
 * @returns none
*/
const addItemList = task => {
    const itemList = createLi(task)
    const linkRemove = createLinkDelete()
    const linkEdit = createLinkEdit()

    itemList.appendChild(linkEdit)
    itemList.appendChild(linkRemove)

    //adicionar o li na lista "todoList"
    todoList.appendChild(itemList)
}

// criar uma função para o clique do botão
addItem.addEventListener("click", () => { 
    const task = getTask()
    if(task) 
        addItemList(task)
})

todoList.addEventListener("click", (evento) => {
    //se o clique não for no a, saia
    if(evento.target.nodeName != "A") return false
    // caso contrário, siga em frente
    const activeLink = evento.target
    const liParent =activeLink.parentNode
    console.log(activeLink)
    if(activeLink.className == "edit") {

    } else if(activeLink.className == "remove") {
        todoList.removeChild(liParent)
    } //else

})

todoList.addEventListener("keyup", (evento) => { 
    if(evento.target.nodeName != "INPUT") return false
    const imputEdit = evento.target
    const newValueTask = imputEdit.value
    const liParent = imputEdit.parentNode
    const spanChild = liParent.firstChild
    spanChild.textContent = newValueTask
})