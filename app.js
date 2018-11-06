// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
var submit = d3.select("#filter-btn");
var city = d3.select("#city")

console.log(data);

submit.on("click", () => {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("inputValue");
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(table => table.dateTime === inputValue);
    console.log(filtertedData);


    filteredData.forEach((table) => {
        console.log(table);

        var tableItem = tbody.append('tr');
        Object.entries(table).forEach(([key, value]) => {
            var item = tbody.append('td');
            item.text(value);

        });
    });
}); 
