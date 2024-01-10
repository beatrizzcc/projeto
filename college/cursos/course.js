function AdcCourse(){
    const btnAdc = document.getElementById('btnAdicionar')
    btnAdc.onclick = function(){
        const titleAdded = document.getElementById('title-adc').value;
        const descriptionAdded = document.getElementById('description-adc').value;

        const trTitle = document.getElementById('tr-title')
        const trDescription = document.getElementById('tr-description')

        const thTitle = document.createElement('th');
        thTitle.textContent = titleAdded;
        trTitle.appendChild(thTitle);


        const tdDescription = document.createElement('td');
        tdDescription.textContent = descriptionAdded;
        trDescription.appendChild(tdDescription);

        const table = document.getElementById('table-main');
        table.appendChild(trDescription, trTitle)

        document.getElementById('title-adc').value = '';
        document.getElementById('description-adc').value = '';
    }
}
