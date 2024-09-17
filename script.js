document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.getElementById('form-container');

    // Create form elements
    const formContent = document.createElement('div');
    formContent.className = 'form-content';
    formContainer.appendChild(formContent);

    const formItems = document.createElement('div');
    formItems.className = 'form-items';
    formContent.appendChild(formItems);

    // Title
    const title = document.createElement('h3');
    title.textContent = 'Formulir Pendaftaran Panitia Kegiatan XYZ';
    formItems.appendChild(title);

    // Create and append form
    const form = document.createElement('form');
    form.id = 'registration-form';
    form.className = 'requires-validation';
    form.noValidate = true;
    formItems.appendChild(form);

    // Input fields
    const fields = [
        { id: 'name', label: 'Nama:', type: 'text', placeholder: 'Nama Lengkap' },
        { id: 'nim', label: 'NIM:', type: 'text', placeholder: 'NIM' },
        { id: 'class', label: 'Kelas:', type: 'text', placeholder: 'Kelas' },
        { id: 'address', label: 'Alamat:', type: 'textarea', placeholder: 'Alamat' }
    ];

    fields.forEach(field => {
        const div = document.createElement('div');
        div.className = 'col-md-12';
        
        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;
        div.appendChild(label);
        
        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.className = 'form-control';
            input.id = field.id;
            input.name = field.id;
            input.placeholder = field.placeholder;
        } else {
            input = document.createElement('input');
            input.className = 'form-control';
            input.type = field.type;
            input.id = field.id;
            input.name = field.id;
            input.placeholder = field.placeholder;
        }
        input.required = true;
        div.appendChild(input);
        
        form.appendChild(div);
    });

    // Checkbox
    const checkDiv = document.createElement('div');
    checkDiv.className = 'form-check';
    const checkbox = document.createElement('input');
    checkbox.className = 'form-check-input';
    checkbox.type = 'checkbox';
    checkbox.value = '';
    checkbox.id = 'confirmCheck';
    checkbox.required = true;
    checkDiv.appendChild(checkbox);
    
    const checkboxLabel = document.createElement('label');
    checkboxLabel.className = 'form-check-label';
    checkboxLabel.htmlFor = 'confirmCheck';
    checkboxLabel.textContent = 'Saya menyatakan bahwa semua data benar';
    checkDiv.appendChild(checkboxLabel);
    
    form.appendChild(checkDiv);

    // Submit button
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'form-button mt-3';
    const button = document.createElement('button');
    button.id = 'submit';
    button.type = 'submit';
    button.className = 'btn btn-primary';
    button.textContent = 'Kirim';
    buttonDiv.appendChild(button);
    
    form.appendChild(buttonDiv);

    // Display Data Section
    const displayData = document.createElement('div');
    displayData.id = 'displayData';
    displayData.className = 'mt-3';
    formItems.appendChild(displayData);

    const displayTitle = document.createElement('h4');
    displayTitle.textContent = 'Data yang Dimasukkan:';
    displayData.appendChild(displayTitle);

    const table = document.createElement('table');
    const headers = ['Nama:', 'NIM:', 'Kelas:', 'Alamat:'];
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    table.appendChild(tableHead);
    table.appendChild(tableBody);

    const theadRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        theadRow.appendChild(th);
    });
    tableHead.appendChild(theadRow);

    const tbodyRow = document.createElement('tr');
    headers.forEach(() => {
        const td = document.createElement('td');
        td.className = 'data-cell';
        tbodyRow.appendChild(td);
    });
    tableBody.appendChild(tbodyRow);

    displayData.appendChild(table);

    // JavaScript functionality
    const formElem = document.getElementById('registration-form');
    const dataCells = document.querySelectorAll('#displayData .data-cell');

    formElem.addEventListener('submit', function (event) {
        event.preventDefault();
        if (formElem.checkValidity()) {
            displayData.style.display = 'block';
            dataCells[0].textContent = document.getElementById('name').value;
            dataCells[1].textContent = document.getElementById('nim').value;
            dataCells[2].textContent = document.getElementById('class').value;
            dataCells[3].textContent = document.getElementById('address').value;
        }
    });

    document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('focus', () => {
            input.style.backgroundColor = '#e8f0fe';
        });
        input.addEventListener('blur', () => {
            input.style.backgroundColor = '#fff';
        });
    });

    document.getElementById('confirmCheck').addEventListener('change', function () {
        const submitButton = document.getElementById('submit');
        if (this.checked) {
            submitButton.disabled = false;
            submitButton.style.backgroundColor = '#d46a77'; /* Soft pink */
        } else {
            submitButton.disabled = true;
            submitButton.style.backgroundColor = '#b0bec5'; /* Disabled color */
        }
    });

    document.getElementById('submit').addEventListener('mouseover', () => {
        document.getElementById('submit').style.backgroundColor = '#b63b5e'; /* Darker pink */
    });

    document.getElementById('submit').addEventListener('mouseout', () => {
        document.getElementById('submit').style.backgroundColor = '#d46a77'; /* Soft pink */
    });
});
