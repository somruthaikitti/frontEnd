function addInput() {
    if (document.getElementById("fname").value != "") {
        let addElement = document.createElement("p")
        addElement.innerHTML = document.getElementById("fname").value + " " + document.getElementById("lname").value;
        document.getElementById("results").appendChild(addElement);
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
    }
    document.getElementById("fname").focus();
}
document.getElementById("Add").addEventListener("click", addInput);

function clearData() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("myTable").innerHTML = "";
    document.getElementById("fname").focus();
}
document.getElementById("Clear").addEventListener("click", clearData);

function addDataTable() {
    if (document.getElementById("fname").value != "") {
        let newTable = document.getElementById("myTable");
        let row = newTable.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = document.getElementById("fname").value;
        cell2.innerHTML = document.getElementById("lname").value;
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
    }
    document.getElementById("fname").focus();
}
document.getElementById("Add1").addEventListener("click", addDataTable);