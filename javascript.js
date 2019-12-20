'use strict';

class Task {
constructor(subject, taskBody) {
this.Id = '';
this.IdEdite = '';
this.IdCbx = '';
this.IdTextBx = '';
this.subject = subject;
this.taskBody = taskBody;
this.fulfilledTask = false;
}
}
    
    function displayTasksOnLoad() {
        let StoredTasks = []; let i = 0;
        StoredTasks = ReadTasksToArray();
                 
        if(StoredTasks.length > 0){
            for(i; i < StoredTasks.length; i++){
                let tr = document.createElement('tr');

            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
          
            let text1 = document.createElement("input");
            text1.type = 'checkbox';
            let atrCB = document.createAttribute('id');
            atrCB.value = StoredTasks[i].IdCbx;
            text1.setAttributeNode(atrCB);
            let atrCB1 = document.createAttribute('onclick');
            atrCB1.value = 'OptionsSelected(this);';
            text1.setAttributeNode(atrCB1);
                
            let text2 = document.createElement("p");
            text2.innerHTML = StoredTasks[i].subject;
            let atrText = document.createAttribute('id');
            atrText.value = StoredTasks[i].IdTextBx;
            text2.setAttributeNode(atrText);
                
            let text3 = document.createElement("button");
            let buttext = document.createTextNode("Edite");
            text3.appendChild(buttext);
            let atr = document.createAttribute('onclick');
            atr.value = 'editeRow(this);';
            text3.setAttributeNode(atr);
            
            let atr3 = document.createAttribute('id');
            atr3.value = StoredTasks[i].IdEdite;
            text3.setAttributeNode(atr3); 

            let text4 = document.createElement("button");
            let buttext1 = document.createTextNode("Delete");
            text4.appendChild(buttext1);
            let atr1 = document.createAttribute('onclick');
            atr1.value = 'deleteRow(this);';
            text4.setAttributeNode(atr1);
            
            let atr2 = document.createAttribute('id');   
            atr2.value = StoredTasks[i].Id;
            text4.setAttributeNode(atr2);
            //text4.setAttribute("id", taskObj.Id);

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            let table = document.getElementById('tableTasks');
            table.appendChild(tr);
            console.log("added");
                }
            }
        
            for(i = 0; i < StoredTasks.length; i++){
            if(StoredTasks[i].fulfilledTask == true){
                $("#"+StoredTasks[i].IdCbx).prop('checked', true);
                $("#"+StoredTasks[i].IdTextBx).css("text-decoration","line-through");
                $("#"+StoredTasks[i].IdCbx).parents("tr").hide();
            }else{
                $("#"+StoredTasks[i].IdCbx).prop('checked', false);
                $("#"+StoredTasks[i].IdTextBx).css("text-decoration","none");
                $("#"+StoredTasks[i].IdCbx).parents("tr").show();  
                }
            }
            TasksQtyUpdate(StoredTasks);
        
    }
    
       
    function createTask() {

        let subj_ = document.getElementById('subj').value;
        let body_ = document.getElementById('taskBody').value;

        if(subj_ && body_) {
        let taskObj = {Id: uuidv4(), IdEdite: uuidv4(), IdCbx: uuidv4(), IdTextBx: uuidv4(), subject: subj_, taskBody: body_, fulfilledTask: false};
        
            let StoredTasks = AddTaskToArray(taskObj);   
                
            let tr = document.createElement('tr');

            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
          
            let text1 = document.createElement("input");
            text1.type = 'checkbox';
            let atrCB = document.createAttribute('id');
            atrCB.value = taskObj.IdCbx;
            text1.setAttributeNode(atrCB);
            let atrCB1 = document.createAttribute('onclick');
            atrCB1.value = 'OptionsSelected(this);';
            text1.setAttributeNode(atrCB1);
           
            let text2 = document.createElement("p");
            text2.innerHTML = subj_;
            let atrText = document.createAttribute('id');
            atrText.value = taskObj.IdTextBx;
            text2.setAttributeNode(atrText);
            
            let text3 = document.createElement("button");
            let buttext = document.createTextNode("Edite");
            text3.appendChild(buttext);
            let atr = document.createAttribute('onclick');
            atr.value = 'editeRow(this);';
            text3.setAttributeNode(atr);
                
            let atr3 = document.createAttribute('id');
            atr3.value = taskObj.IdEdite;
            text3.setAttributeNode(atr3);

            let text4 = document.createElement("button");
            let buttext1 = document.createTextNode("Delete");
            text4.appendChild(buttext1);
            let atr1 = document.createAttribute('onclick');
            atr1.value = 'deleteRow(this);';
            text4.setAttributeNode(atr1);
            
            let atr2 = document.createAttribute('id');   
            atr2.value = taskObj.Id;
            text4.setAttributeNode(atr2);
            //text4.setAttribute("id", taskObj.Id);

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            let table = document.getElementById('tableTasks');
            table.appendChild(tr);
            console.log("added");
                
            TasksQtyUpdate(StoredTasks);
                        
        }
    }
    
    function editingTask(subj_, body_, i) {
        
        if(subj_ && body_) {
        let taskObj = {Id: uuidv4(), IdEdite: uuidv4(), IdCbx: uuidv4(), IdTextBx: uuidv4(), subject: subj_, taskBody: body_, fulfilledTask: false};
        
            let StoredTasks = AddTaskToArray(taskObj);   
                
            //let tr = document.createElement('tr');

            let tr = tableTasks.insertRow(i);
            
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
          
            let text1 = document.createElement("input");
            text1.type = 'checkbox';
            let atrCB = document.createAttribute('id');
            atrCB.value = taskObj.IdCbx;
            text1.setAttributeNode(atrCB);
            let atrCB1 = document.createAttribute('onclick');
            atrCB1.value = 'OptionsSelected(this);';
            text1.setAttributeNode(atrCB1);
            
            let text2 = document.createElement("p");
            text2.innerHTML = subj_;
            let atrText = document.createAttribute('id');
            atrText.value = taskObj.IdTextBx;
            text2.setAttributeNode(atrText);
            
            let text3 = document.createElement("button");
            let buttext = document.createTextNode("Edite");
            text3.appendChild(buttext);
            let atr = document.createAttribute('onclick');
            atr.value = 'editeRow(this);';
            text3.setAttributeNode(atr);
                
            let atr3 = document.createAttribute('id');
            atr3.value = taskObj.IdEdite;
            text3.setAttributeNode(atr3);

            let text4 = document.createElement("button");
            let buttext1 = document.createTextNode("Delete");
            text4.appendChild(buttext1);
            let atr1 = document.createAttribute('onclick');
            atr1.value = 'deleteRow(this);';
            text4.setAttributeNode(atr1);
            
            let atr2 = document.createAttribute('id');   
            atr2.value = taskObj.Id;
            text4.setAttributeNode(atr2);
            //text4.setAttribute("id", taskObj.Id);

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            
            TasksQtyUpdate(StoredTasks);
        }
    }
    
    function clearAll() {
        var table = document.getElementById('tableTasks');

        for (var i=table.rows.length-1;i>0;i--){
            table.deleteRow(i);
        }
        DeleteAllTasksFromArray();
        TasksQtyUpdate(ReadTasksToArray());
    }
    function deleteRow(r) {
        let StoredTasks = [];
        StoredTasks = ReadTasksToArray();
        let index = StoredTasks.findIndex(x => x.Id === r.id);     
        if(index > -1)
        StoredTasks = DeleteTaskInArray(StoredTasks[index]);
        
        var i = r.parentNode.parentNode.rowIndex;
        //alert( r.id );
        document.getElementById("tableTasks").deleteRow(i);
        TasksQtyUpdate(StoredTasks);
    }
    
    function editeRow(r) {
        
        let StoredTasks = [];
        StoredTasks = ReadTasksToArray();
        let index = StoredTasks.findIndex(x => x.IdEdite === r.id);
        $(document).ready(function(){
            $(r.parentNode.parentNode).hide();
          });
      
        var i = r.parentNode.parentNode.rowIndex;
        var row = tableTasks.insertRow(i);
        row.innerHTML = `<tr id="tempRow"> <td colspan="4">
         <div id="editedItem">
              <input id="tempTaskSubj" type="text"><br/>
              <textarea id="temptaskBody" rows="4" cols="50">
              </textarea> <br/>
              <button onclick="saveChanges(this); return false;">Edite Task</button>
          </div>
        </td></tr> `;
       
        $('#tempTaskSubj').val(StoredTasks[index].subject);
        $('#temptaskBody').text(StoredTasks[index].taskBody);
        
        if(index > -1)
        DeleteTaskInArray(StoredTasks[index]);
       
    };
           
    function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
    function SaveArrayToStorage(StoredTasks){
        localStorage.removeItem("StoredTasks");
        localStorage.setItem("StoredTasks", JSON.stringify(StoredTasks));
        return StoredTasks;
    }
    
    function ReadTasksToArray(){
        let StoredTasks = [];
        let str = localStorage.getItem("StoredTasks");
        if(!str){
            //alert("array not available");
            return StoredTasks;
        }
        if(str){
            StoredTasks = JSON.parse(localStorage.getItem("StoredTasks"));
            //alert("array available");
            return StoredTasks;
        }
    }
    function AddTaskToArray(taskObj){
        let StoredTasks = ReadTasksToArray();
        //alert(StoredTasks.length);
        StoredTasks.push(taskObj);
        localStorage.removeItem("StoredTasks");
        localStorage.setItem("StoredTasks", JSON.stringify(StoredTasks));
        return StoredTasks;
    }
    function EditTaskInArray(taskObj){
        let StoredTasks = DeleteTaskInArray(taskObj);
        return StoredTasks;
    }
    function DeleteTaskInArray(taskObj){
        let StoredTasks = ReadTasksToArray();
        let index = StoredTasks.findIndex(x => x.Id === taskObj.Id);
        if (index > -1) {
          StoredTasks.splice(index, 1);
            localStorage.removeItem("StoredTasks");
            localStorage.setItem("StoredTasks", JSON.stringify(StoredTasks));
        }
        return StoredTasks;
    }
    
    function DeleteAllTasksFromArray(){
        let StoredTasks = ReadTasksToArray();
        StoredTasks.length = 0;
        localStorage.removeItem("StoredTasks");
        localStorage.setItem("StoredTasks", JSON.stringify(StoredTasks));
        return StoredTasks;
    }
    
    function TasksQtyUpdate(StoredTasks){
        let counter = 0; let i = 0;
        for(i = 0; i < StoredTasks.length; i++){
            if(StoredTasks[i].fulfilledTask == false)
                counter++;
        }
        if(StoredTasks !== null && StoredTasks !== 'undefined' && StoredTasks.length > 0){
                let updatedStr = 'Current Tasks List (' + counter + ')' + ' of ' + '('+ StoredTasks.length + ')';
                $('#name').text(updatedStr);
            }
            else{
                $('#name').text('Current Tasks List Is Empty!'); 
            }
        }
        
    function saveChanges(button){
        var i = button.parentNode.parentNode.rowIndex;
        let temptaskBody_ = document.getElementById('temptaskBody').value;
        let tempTaskSubj_ = document.getElementById('tempTaskSubj').value;
        if(!tempTaskSubj_ || !tempTaskSubj_){
                alert('Please, fill in fields!');
            }
        else{
               $(document).ready(function(){
                $(button.parentNode.parentNode).hide();
              }); 
            editingTask(tempTaskSubj_, temptaskBody_, i);
        }
            
    }
    
    $(document).ready(function(){
      $("#hide").click(function(){
        $("#newTaskDiv").hide();
      });
      $("#show").click(function(){
        $("#newTaskDiv").show();
      });
    });
    
    function OptionsSelected(checkbox)
    {
        let StoredTasks = ReadTasksToArray();
        let index = StoredTasks.findIndex(x => x.IdCbx === checkbox.id);
        let textId = StoredTasks[index].IdTextBx;
        if(document.getElementById(checkbox.id).checked) {
            $("#"+textId).css("text-decoration","line-through");
            StoredTasks[index].fulfilledTask = true;
        } else {
            $("#"+textId).css("text-decoration","none");
            StoredTasks[index].fulfilledTask = false;
        }
        TasksQtyUpdate(StoredTasks); 
        SaveArrayToStorage(StoredTasks);
    }
    
    function CheckSelectAllChbx(checkbox) {
        let StoredTasks = ReadTasksToArray();
        let i = 0; 
        if(document.getElementById(checkbox.id).checked) {
        for(i = 0; i < StoredTasks.length; i++){
            $("#"+StoredTasks[i].IdCbx).prop('checked', true);
            $("#"+StoredTasks[i].IdTextBx).css("text-decoration","line-through");
            StoredTasks[i].fulfilledTask = true;
        }
      } else {
            for(i = 0; i < StoredTasks.length; i++){
            $("#"+StoredTasks[i].IdCbx).prop('checked', false);
            $("#"+StoredTasks[i].IdTextBx).css("text-decoration","none");
            StoredTasks[i].fulfilledTask = false;
        }
    }
        TasksQtyUpdate(StoredTasks);
        SaveArrayToStorage(StoredTasks);
       
    }
    
    function CheckShowAllChbx(checkbox) {
        let StoredTasks = ReadTasksToArray();
        let i = 0; 
        if(document.getElementById(checkbox.id).checked) {
            for(i = 0; i < StoredTasks.length; i++){
            if(StoredTasks[i].fulfilledTask == true)
            $("#"+StoredTasks[i].IdCbx).parents("tr").show();
            }
            $('#showAllSpan').text('Hide Done Tasks');
        }else {
            for(i = 0; i < StoredTasks.length; i++){
            if(StoredTasks[i].fulfilledTask == true)
            $("#"+StoredTasks[i].IdCbx).parents("tr").hide();
            }
            $('#showAllSpan').text('Show Done Tasks');
        }
    }



       
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn1");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
/*
span.onclick = function() {
  modal.style.display = "none";
}
*/
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}