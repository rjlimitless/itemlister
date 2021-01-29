// EXAMINE THE DOCUMENT OBJECT //
    //console.dir(document);
    /*
    console.log(document.domain);
    console.log(document.URL);
    console.log(document.title);
    //document.title = 'Sasuke Uchiha';
    console.log(document.doctype);
    console.log(document.head);
    console.log(document.body);
    console.log(document.all);
    console.log(document.all[10]);
    // document.all[10].textContent = 'Hello';
    console.log(document.forms[0]);
    console.log(document.links);
    */

    // console.log(document.images);

// GET ELEMENT BY ID
    // console.log(document.getElementById('header-title'));
    // const headerTitle = document.getElementById('header-title');
    // const header = document.getElementById('main-header');

    // console.log(headerTitle);
    // // headerTitle.textContent = 'Hello';
    // // headerTitle.innerText = 'Goodbye';
    // console.log(headerTitle.content);

    //textContent disregards styling
    //innerText pays attention to the styling

    //headerTitle.innerHTML = '<h3>Hello</h3>';

    // header.style.borderBottom = 'solid 3px #000'

// GET ELEMENTS BY CLASS NAME //
    // const items = document.getElementsByClassName('list-group-item');
    // console.log(items);

    // console.log(items[1]);
    // items[1].textContent = 'Hello 2';
    // items[1].style.fontWeight = 'bold';
    // items[1].style.backgroundColor = 'yellow';


    // // items.style.backgroundColor = '#f4f4f4'; //wont work because it's an HTML collection. You have to loop through it. Create an array

    // for(var i=0; i< items.length; i++){
    //     items[i].style.backgroundColor = '#f4f4f4';
    // }


// GET ELEMENTS BY TAG NAME //
    //     const li = document.getElementsByTagName('li');
    //     console.log(li);

    //     console.log(li[1]);
    //     li[1].textContent = 'Hello 2';
    //     li[1].style.fontWeight = 'bold';
    //     li[1].style.backgroundColor = 'yellow';

    //     for(var i=0; i< li.length; i++){
    //         li[i].style.backgroundColor = 'yellow';
    //     }


// QUERYSELECTOR //
// USE FOR SELECTING ONLY ONE ITEM
// IF THERE ARE MORE THAN ONE, IT'LL GRAB ONLY FIRST ITEM

    // const header = document.querySelector('#main-header');
    // header.style.borderBottom = 'solid 4px #ccc';

    // const input = document.querySelector('input');
    // input.value = 'Yuh';

    // const submit = document.querySelector('input[type="submit"]');
    // submit.value='SendIT';

    // const addid = document.querySelector('#item');
    // addid.value = 'asuh dude';
    // console.log(addid);

    // const item = document.querySelector('.list-group-item');
    // item.style.color = 'red';

    // const lastItem = document.querySelector('.list-group-item:last-child');
    // lastItem.style.color = 'blue';

    // const scndItem = document.querySelector('.list-group-item:nth-child(2)');
    // scndItem.style.color = 'orange';

// QUERYSELECTOR ALL //
// GRABS MORE THAN ONE ELEMENT INTO A NODE LIST

    //     const titles = document.querySelectorAll('.title');
    //     console.log(titles);

    //     titles[0].textContent = 'Hello';
    //     titles[1].textContent = 'Hello';

    //     const odd = document.querySelectorAll('li:nth-child(odd)');
    //     const even = document.querySelectorAll('li:nth-child(even)');


    //     for(var i=0; i < odd.length; i++) {
    //         odd[i].style.backgroundColor = '#f4f4f4';
    //         even[i].style.backgroundColor = '#ccc';

    //     }

// TRAVERSING THE DOM
// // MOVING UP CHILD / PARENT / SIBLING NODES

//     const itemList = document.querySelector('#items');

//     // parentNode

//     // console.log(itemList.parentNode);
//     // itemList.parentNode.style.backgroundColor = '#f4f4f4';

//     // console.log(itemList.parentNode.parentNode);
//     // console.log(itemList.parentNode.parentNode.parentNode);

//     // parentElement

//     // console.log(itemList.parentElement);
//     // itemList.parentElement.style.backgroundColor = '#f4f4f4';

//     // console.log(itemList.parentElement.parentElement);
//     // console.log(itemList.parentElement.parentElement.parentElement);

//     // childNodes
//     // every line break includes 'text' as a node in the nodelist
//     console.log(itemList.childNodes);


//     // use children to create htmlcollections for just the li
//     console.log(itemList.children);
//     console.log(itemList.children[1]);
//     itemList.children[1].style.backgroundColor = 'yellow';

//     // firstChild
//     // returns #text because of the line breaks. 

//     console.log(itemList.firstChild);

//     // firstElementChild
//     console.log(itemList.firstElementChild);

//     // lastChild
//     // returns #text because of the line breaks. 
//     console.log(itemList.lastChild);

//     // lastElementChild
//     console.log(itemList.lastElementChild);

//     // nextSibling
//     console.log(itemList.nextSibling);

//     // nextElementSibling
//     console.log(itemList.nextElementSibling);

//     // previousSibling
//     console.log(itemList.previousSibling);

//     // previousElementSibling
//     console.log(itemList.previousElementSibling);


// CREATING ELEMENTS AND INSERTING THEM

    // // createElement

    // // create div
    // var newDiv = document.createElement('div');

    // // add class
    // newDiv.className = 'hello';

    // // add id
    // newDiv.id = 'hello1';

    // // add attr the long way
    // newDiv.setAttribute('title','Hello Div');
    
    // // create text node
    // var newDivText = document.createTextNode('Hello World');

    // // add text to div
    // newDiv.appendChild(newDivText);

    // var container = document.querySelector('header .container');
    // var h1 = document.querySelector('header .row');
    
    // container.insertBefore(newDiv, h1);
    
    // newDiv.style.fontSize = '30px';

// EVENTLISTENERS, CLICK, KEYBOARD, ETC.

        // const button = document.getElementById('button').addEventListener('click', buttonClick);

        // function buttonClick(e){
        //     // console.log('Button Clicked');
        //     // document.getElementById('header-title').textContent = 'Changed';
        //     // document.querySelector('#main').style.backgroundColor = 'yellow';
        //     // console.log(e.target)
        //     // console.log(e.target.id)
        //     // console.log(e.target.classList)
        //     // var output = document.getElementById('output');
        //     // output.innerHTML = '<h3>'+e.target.id+'</h3>';

        //     // console.log(e.type);

        //     // console.log(e.clientX); //clientX,Y shows where the pointer is at top down from the entire window

        //     // console.log(e.offsetY) //offsetX,Y shows where the pointer is within the element

        //     // console.log(e.altKey); //shows true / false if you are clicking the alt key

        //     // console.log(e.ctrlKey);
        //     // console.log(e.shiftKey);
        // }

// TYPES OF EVENTS

        // const button = document.getElementById('button');

        // const box = document.getElementById('box');

        // button.addEventListener('click', runEvent);
        // button.addEventListener('dblclick', runEvent);
        // button.addEventListener('mousedown', runEvent);
        // button.addEventListener('mouseup', runEvent);

        // box.addEventListener('mouseenter', runEvent); 
        // box.addEventListener('mouseleave', runEvent);
        // box.addEventListener('mouseover', runEvent); //inner elements
        // box.addEventListener('mouseout', runEvent); //inner elements

        // box.addEventListener('mousemove', runEvent);


        // var itemInput = document.querySelector('#item');
        // var form = document.querySelector('form');
        // var select = document.querySelector('select');

        // // itemInput.addEventListener('keydown', runEvent);
        // // itemInput.addEventListener('keyup', runEvent);
        // // itemInput.addEventListener('keypress', runEvent);

        // // itemInput.addEventListener('focus', runEvent);
        // // itemInput.addEventListener('blur', runEvent);

        // // itemInput.addEventListener('cut', runEvent);
        // // itemInput.addEventListener('paste', runEvent);

        // // itemInput.addEventListener('input', runEvent);
        
        // // select.addEventListener('change', runEvent);
        // // select.addEventListener('input', runEvent);

        // form.addEventListener('submit', runEvent);



        // function runEvent(e){
        // //     e.preventDefault();
        // //     console.log('EVENT TYPE: '+e.type);
            
        // //     // console.log(e.target.value);
        // //     // box.innerHTML = '<h3>MouseX: '+e.offsetX+ '</h3><h3>MouseY: '+e.offsetY+'</h3>';

        //     main.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+','+e.offsetX+''+55+')';
        // }
        //     // console.log(e.target.value);
        //     // document.getElementById('output').innerHTML = '<h3>' +e.target.value+ '</h3>';
        // }

        
// SUBMIT BUTTON TO INNER HTML ITEMS

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);


// addItem function
function addItem(e){
    e.preventDefault();
    

    // get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    // Create delete button element
    var deleteBtn = document.createElement('button');
    // Add classes to deletebtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append to text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to itemlist
    itemList.appendChild(li)

}


// removeItem function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure???')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



// filterItems function
function filterItems(e){
    // convert to lowercase
    var text = e.target.value.toLowerCase();
    // get all li's
    var items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //compare search text to li textcontent
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })
}



