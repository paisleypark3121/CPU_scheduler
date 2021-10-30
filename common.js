function addRow() {

  var table = document.getElementById("processes");
  var row_id=table.rows.length;
  //console.log(table.rows.length);

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  var cell0 = row.insertCell(0);
  var mainElement = document.createElement("input");
  mainElement.type = "hidden";
  mainElement.id = "rowId_"+row_id;
  mainElement.value=row_id;
  cell0.appendChild(mainElement);
  var element0 = document.createElement("label");
  element0.innerHTML="P"+row_id;
  cell0.appendChild(element0);

  var cell1 = row.insertCell(1);
  var element1 = document.createElement("input");
  element1.type = "text";
  element1.id = "duration_"+row_id;
  element1.size="10";
  element1.value="";
  cell1.appendChild(element1);

  var cell2 = row.insertCell(2);
  var element2 = document.createElement("input");
  element2.type = "text";
  element2.id = "arrival_"+row_id;
  element2.size="10";
  element2.value="";
  cell2.appendChild(element2);

  var cell3 = row.insertCell(3);
  var element3 = document.createElement("input");
  element3.type = "button";
  element3.id = "remove_"+row_id;
  element3.value="remove";
  element3.onclick=function() {
    //console.log(element2.id);
    row.remove(this);
  }
  cell3.appendChild(element3);
}