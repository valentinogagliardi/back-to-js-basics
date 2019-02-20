const GenerateTableModule = (function() {
  let table = null;
  let data = [];

  const initialize = function(tableSelector, arr) {
    table = tableSelector;
    data = arr;
  };

  const _generateTableHead = function() {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key in data[0]) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  };

  const generateTable = function() {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
    _generateTableHead();
  };
  return { initialize, generateTable };
})();

let table = document.querySelector("table");

GenerateTableModule.initialize(table, [
  { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
  { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
  { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
  { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
  { name: "Monte Amiata", height: 1738, place: "Siena" }
]);

GenerateTableModule.generateTable();
