let cars=[{id:1,name:'Maruthi Suzuki'},{id:2,name:'Hyndai Motors'},
          {id:3,name:'Suzuki NEXA'},{id:4,name:'TATA Motors'}];

let models=[{id:1,car_id:1,name:'Swift'},{id:2,car_id:1,name:'Brezza'},
            {id:3,car_id:1,name:'Waganor'},{id:4,car_id:1,name:'Ertiga'},
            {id:5,car_id:2,name:'Creta'},{id:6,car_id:2,name:'Verna'},
            {id:7,car_id:2,name:'Grand i20'},{id:8,car_id:2,name:'Grand i10'},
            {id:9,car_id:3,name:'Baleno'},{id:10,car_id:3,name:'SCross'},
            {id:11,car_id:3,name:'Ignis'},{id:12,car_id:3,name:'Ciaz'},
            {id:13,car_id:4,name:'Harrier'},{id:14,car_id:4,name:'XUV 500'},
            {id:15,car_id:4,name:'XUV 400'},{id:16,car_id:4,name:'Scorpio'}];

let carSelectBox = $('#car-select');
let modelSelectBox = $('#model-select');

// loop cars
let carOptions = `<option value="">Select a Car</option>`;
for(let car of cars){
    carOptions += `<option value="${car.id}">${car.name}</option> \n`;
}
carSelectBox.append(carOptions);

// Change event on car Select box
carSelectBox.change(function() {
    let selectedId = Number.parseInt($(this).val());
    let selectedModels = models.filter(function(model) {
        return model.car_id === selectedId;
    });
    let modelOptions = `<option value="">Select a Model</option>`;
    for(let selectedModel of selectedModels){
        modelOptions += `<option value="${selectedModel.id}">${selectedModel.name}</option>`;
    }
    modelSelectBox.empty().append(modelOptions);
});

// change event on Models
modelSelectBox.change(function() {
    alert($(this).val());
});