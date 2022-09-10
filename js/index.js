function openTodo() {
    document.getElementById('todoInput').style.display = 'block'
}
function addfunction() {

    let list = document.getElementById('ul');
    let txtVal = document.getElementById('txtVal').value;
    document.getElementById('txtVal').value = '';
    let x = Math.random() * 100;
    let li = document.createElement("li");
    li.id = "uniuqeid" + x;

    // delelebutton 
    let deletebutton = document.createElement("button");
    // editbutton
    let editbutton = document.createElement("button");
    let updatebutton = document.createElement("button");
    updatebutton.id = "upbtn";
    updatebutton.innerHTML = "Update";
    span = document.createElement("span");
    span.id = "uniuqeid2" + x;
    let listDiv = document.createElement('div')
    let buttonDiv = document.createElement('div')
    let textList = document.createElement('div')
    span.innerHTML = txtVal;
    deletebutton.innerHTML = " Delete";
    editbutton.innerHTML = "Edit";

    // list.appendChild(li);
    list.appendChild(li);
    li.appendChild(listDiv);
    listDiv.appendChild(textList)
    listDiv.appendChild(buttonDiv)
    textList.appendChild(span)
    buttonDiv.appendChild(deletebutton)
    buttonDiv.appendChild(editbutton)
    // listDiv.style.border = '2px solid gray'
    listDiv.style.padding = '10px'
    listDiv.style.display = 'flex'
    listDiv.style.flexDirection = 'row'
    listDiv.style.gap = '10px'
    listDiv.style.justifyContent = 'space-between'
    listDiv.style.alignItems = 'center'
    listDiv.style.width = '550px'
    deletebutton.style.border = 'none'
    deletebutton.style.padding = ' 12px 30px 12px 30px'
    deletebutton.style.borderRadius = '10px'
    deletebutton.style.background = '#ff0000'
    deletebutton.style.color = 'white'
    deletebutton.style.fontSize = '15px'
    deletebutton.style.fontWeight = 'bold'
    editbutton.style.border = 'none'
    editbutton.style.padding = ' 12px 30px 12px 30px'
    editbutton.style.borderRadius = '10px'
    editbutton.style.background = 'green'
    editbutton.style.color = 'white'
    editbutton.style.marginLeft = '10px'
    editbutton.style.fontSize = '15px'
    editbutton.style.fontWeight = 'bold'
    updatebutton.style.border = 'none'
    updatebutton.style.padding = ' 12px 30px 12px 30px'
    updatebutton.style.borderRadius = '10px'
    updatebutton.style.background = 'green'
    updatebutton.style.color = 'white'
    updatebutton.style.marginLeft = '10px'
    updatebutton.style.fontSize = '15px'
    updatebutton.style.fontWeight = 'bold'
    // delelebutton function
    deletebutton.onclick = function () {
        deletefunction("uniuqeid" + x);
    };

    // editbutton function
    editbutton.onclick = function () {
        editfunction("uniuqeid2" + x);
        document.getElementById("btn").appendChild(updatebutton);

    };
    // updatebutton function 
    updatebutton.onclick = function () {
        updatefunction("uniuqeid2" + x);
    };
    // desing of app 


}
// deletefunction
function deletefunction(id) {
    let y = document.getElementById(id);
    y.remove();
    a = id;
}

// editfunction
function editfunction(id) {
    addbtn.style.display = "none";
    btn.style.display = "inline-block"
    // where edit method use
    let spn = document.getElementById(id);
    document.getElementById('txtVal').value = spn.innerHTML;

}
// updatefunction
function updatefunction(id) {
    addbtn.style.display = "inline-block";
    let span = document.getElementById(id);
    let txtVal = document.getElementById('txtVal').value;
    span.innerHTML = txtVal;
    document.getElementById('txtVal').value = '';
    let b = document.getElementById('upbtn');
    b.remove();
    console.log(id);
}