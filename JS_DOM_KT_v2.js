let array_with_numbers = [];

for (let i = 0; i <= 29; i++) {
    array_with_numbers.push(random_number());
};

function random_number() {
    return Math.floor(Math.random() * 100);
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

function change_number() {
    const elem = document.querySelectorAll('td');
    let chosen_elem = elem[getRandomIntInclusive(1, 30)];
    let new_number = random_number();
    chosen_elem.textContent = new_number;
    if (new_number >= 50) {
        chosen_elem.style.background = 'orange';
    } else {
        chosen_elem.style.background = 'white';
    }
};

let table = document.querySelector('.table_style');
let counter = 0;
for (let i = 0; i < 5; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        let td = document.createElement('td');
        td.textContent = array_with_numbers[counter];
        counter++;
        if (td.textContent >= 50) {
            td.style.background = 'orange';
        }
        tr.appendChild(td);
    };
    table.appendChild(tr);
};

function append_cell(){    
    let modify_table = document.querySelector('.table_style');    
    let last_table_row = modify_table.querySelector("tr:last-child");        
    if (last_table_row.children.length < 6) {
        let add_cell_content = Math.floor(Math.random() * 100);
        let cell = last_table_row.insertCell(-1);
        cell.innerHTML = add_cell_content;
        if (add_cell_content >= 50) {
            cell.style.background = "orange";
        };
    } else {
        let create_row = document.createElement('tr');
        let create_cell = Math.floor(Math.random() * 100);
        let cell = create_row.insertCell(-1);
        cell.innerHTML = create_cell;
        if (create_cell >= 50) {
            cell.style.background = "orange";
        };
        modify_table.append(create_row);
    };
};
