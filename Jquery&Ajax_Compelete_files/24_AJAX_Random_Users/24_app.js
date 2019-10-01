// get Person Data
let getPersonData = () => {
    // AJAX
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let person = data.results[0];
            processPerson(person);
        }
    });
};
setInterval(getPersonData,1000);

// Process the person data
let processPerson = (person) => {
    let personImage = person.picture.large;
    let personFullName = person.name.first + " " + person.name.last;
    let personAge = person.dob.age;
    $('#person-img').attr('src',personImage);
    $('#person-name').text(personFullName.toUpperCase());
    $('#person-dob').text(`${personAge} Yrs`);
};