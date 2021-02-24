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
    var inputElementDate= d3.select("#datetime");
    var inputElementCity=d3.select("#city");
    

    var inputValueDate=inputElementDate.property("value");
    var inputValueCity= inputElementCity.property("value");

    var filteredDataDate= tableData.filter(report => report.datetime === inputValueDate);
    console.log(inputValueDate);
    console.log(inputValueCity);
    console.log(filteredData);
    
    tbody.html("");
    filteredDataDate.forEach((filteredReport) =>{
        var row=tbody.append("tr");
        Object.entries(filteredReport).forEach(([key,value])=> {
            var cell=row.append("td");
            cell.text(value);

        });
    });
    var filteredDataCity=tableData.filter(report => report.city === inputValueCity);


}