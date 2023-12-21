document.getElementById('ip_form').addEventListener('submit', function(event) {
    event.preventDefault();
    var ipAddress = document.getElementById('ip_address').value;
    getResponse(ipAddress);
});

function getResponse(ipAddress) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ipinfo.io/' + ipAddress + '/geo', true);
    xhr.onload = function() {
        if (this.status === 200) {
            var response = JSON.parse(this.responseText);
            displayResponse(response);
        }
    };
    xhr.send();
}

function displayResponse(response) {
    var table = document.getElementById('response_table');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = response.ip;
    cell2.innerHTML = response.city;
    cell3.innerHTML = response.region;
    cell4.innerHTML = response.country;
	cell5.innerHTML = response.loc;
	cell6.innerHTML = response.org;
	cell7.innerHTML = response.postal;
    cell8.innerHTML = response.timezone;

}