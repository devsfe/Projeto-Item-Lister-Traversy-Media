var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', addItem);
// Deletar evento
itemList.addEventListener('click', removeItem);
// Filtrar Evento
filter.addEventListener('keyup', filterItems);


// Adicionar Item
function addItem(e){
    e.preventDefault();

    //Pegar valor do input
    var newItem = document.getElementById('item').value;

    //Criar uma nova li
    var li = document.createElement('li');
    // Adicionar classe a li
    li.className = 'list-group-item';
    console.log(li);
    // Adicionar text node com valor input
    li.appendChild(document.createTextNode(newItem));

    // Criar botão de deletar
    var deleteBtn = document.createElement('button');

    // Adicionar classe ao botão de deletar
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // append li to list
    itemList.appendChild(li);
}


// Remover Item
function removeItem(e){
    // Verifica se é o botão de deletar que está sendo clicado
    if(e.target.classList.contains('delete')){
        if(confirm('Você tem certeza?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// Filtrar Items
function filterItems(e){
    // Converter texto para lowercase
    var text = e.target.value.toLowerCase();
    // Pegar Lista
    var items = itemList.getElementsByTagName('li');
    // Converter para Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';     
        }
    });
}