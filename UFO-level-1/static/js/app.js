// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody=d3.select("tbody");
tableData.forEach((alienReport) => {
    var row =tbody.append("tr");
    Object.entries(alienReport).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });

});

var button =d3.select("#filter-btn");
var form =d3.select("form");
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(){
    d3.event.preventDefault();
    var inputElement= d3.select("#datetime");
    

    var inputValue=inputElement.property("value");

    var filteredData= tableData.filter(report => report.datetime === inputValue);
    
    tbody.html("");
    filteredData.forEach((filteredReport) =>{
        var row=tbody.append("tr");
        Object.entries(filteredReport).forEach(([key,value])=> {
            var cell=row.append("td");
            cell.text(value);

        });
    });


}