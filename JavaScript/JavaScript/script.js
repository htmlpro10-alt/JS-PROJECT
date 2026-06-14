// selecting
const actiontable = document.getElementById("actiontable");
const savedetails = document.getElementById("savebtn");
const nameinput = document.getElementById("nameinput");
const ageinput = document.getElementById("ageinput");
const male = document.getElementById("gender1");
const female = document.getElementById("gender2");
const course = document.getElementById("option");
const emailinput = document.getElementById("emailinput");
const deletebtn = document.getElementById("deletebtn");


//write code to add event listener to the save button
savedetails.addEventListener("click", function (event) {
    event.preventDefault();


    //write code to which gender is selected
    let confirmgender = "none";
    if (male.checked) {
        confirmgender = "male";
    } else if (female.checked) {
        confirmgender = "female";
    }

    //write code to check which course is selected
    let selectedcourse = 'none';
    course.onchange = function () {
        selectedcourse = course.value;
    };
    
    //write code to add the details in the table
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${nameinput.value}</td>
    <td>${ageinput.value}</td>
    <td>${confirmgender}</td>
    <td>${selectedcourse}</td>
    <td>${emailinput.value}</td>
    <td><button type="button" class="delete-btn" onclick="deleteRow(this)">Delete</button></td>`;
    actiontable.append(tr);
});

//write code to delete the details from the table
function deleteRow(btn) {
  const row = btn.closest('tr');
  if (row) row.remove();
}