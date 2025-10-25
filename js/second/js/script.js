const $ul = document.querySelector("#list");
const $input = document.querySelector("#task")
$ul.addEventListener('click', completeToDo)

function addToDo() {
    const isValid = checkInput();
    if (isValid){
        const $toDo = createElement();

        $ul.appendChild($toDo)
        clearInput()
    } 
}

function showToast(id, action) {
    $(`#${id}`).toast(action)
}

function createElement() {
    let $li = document.createElement('li')

    $li.innerHTML = $input.value
    addClosingButton($li)

    return $li
}

function checkInput() {
    if ($input.value.trim().length === 0) {
        return false
    }

    return true
}

function removeToDo(e) {
    e.target.parentElement.remove()
}

function clearInput() {
    $input.value = ""
}

function completeToDo(e) {
    e.target.classList.contins('checked') ? e.target.classList.remove('checked') : e.target.classList.add('checked')
}

function addClosingButton($li) {
    const $span = document.createElement("span");
    const text = document.createTextNode("\u00D7");

    $span.className = "close"
    $span.appendChild(text);
    $li.appendChild($span)
    $span.addEventListener('click', removeToDo)
}