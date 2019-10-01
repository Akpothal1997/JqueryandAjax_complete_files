// JS AJAX
$('#js-ajax').click(function() {

    // Create an AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the Request
    http.open('GET','https://api.myjson.com/bins/17hdcd',true);

    // Send the Request to Server
    http.send();

    // Track the Request
    http.onreadystatechange = () => {
        // Server is ready with the response and status is OK
        if(http.readyState === 4 && http.status === 200){
             let persons  = JSON.parse(http.responseText);
             processData(persons);
        }
    };

});

// JQuery AJAX
$('#jquery-btn').click(function() {

    $.ajax({
        url : 'https://api.myjson.com/bins/vozkd',
        method : 'GET',
        success : function(persons) {
            processData(persons);
        }
    });
});

// Process the Response
let processData = (persons) => {
    let tableRows = '';
    for(let person of persons){
        tableRows += `<tr>
                           <td>${person.id}</td>
                           <td>${person.first_name}</td>
                           <td>${person.last_name}</td>
                           <td>${person.email}</td>
                           <td>${person.gender}</td>
                           <td>${person.ip_address}</td>
                      </tr>`;
    }
    $('#table-body').empty().append(tableRows);
};