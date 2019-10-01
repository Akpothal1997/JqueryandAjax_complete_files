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
    let personCard = `
                <div class="col-md-3 mt-5">
                    <div class="card t_card animated jackInTheBox">
                        <div class="card-body text-center">
                            <img src="${personImage}" class="img-fluid img-thumbnail w-50 rounded-circle t_img">
                            <h3 class="mt-2">${personFullName}</h3>
                            <p class="lead">${personAge} Yrs</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolore, ducimus eos esse eum explicabo ipsum nihil recusandae reiciendis soluta.</p>
                            <div class="d-flex flex-row justify-content-between">
                                <div class="p-2">
                                    <i class="fab fa-facebook-f fa-2x text-teal"></i>
                                </div>
                                <div class="p-2">
                                    <i class="fab fa-github fa-2x text-teal"></i>
                                </div>
                                <div class="p-2">
                                    <i class="fab fa-twitter fa-2x text-teal"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    $('#card-row').append(personCard);

};