function addNewRow()
{
    var data = [
        { name: "ambika", age: 35, country: "India" },
        { name: "preethi", age: 25, country: "America" },
        { name: "pravin", age: 30, country: "Spain" }
      ];
      data.push({name:"murali",age:67,country:"Japan"});
      
    var table = document.getElementById("Table");
        for (var i = 0; i < data.length; i++) {
        var row = table.insertRow();
        var name = row.insertCell(0);
        var age = row.insertCell(1);
        var country = row.insertCell(2);
        name.innerHTML = data[i].name;
        age.innerHTML = data[i].age;
        country.innerHTML = data[i].country;
        }
}