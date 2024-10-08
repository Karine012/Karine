document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;

    const appointmentItem = document.createElement('li');
    appointmentItem.textContent = `${name} - ${date} ${time} - ${service}`;
    document.getElementById('appointmentsList').appendChild(appointmentItem);

    const availableDates = [
       '2024-09-25',
       '2024-09-26',
       '2024-09-27',   
       '2024-09-28',
       '2024-09-29',
       '2024-09-30',
       '2024-10-01',
       '2024-10-02',
      '2024-10-03',
      '2024-10-04',
       '2024-10-05',
       '2024-10-06',
        '2024-10-07',
        '2024-10-08',
        '2024-10-09',
        '2024-10-10',
        '2024-10-11',
        '2024-10-12',
        '2024-10-13',
        '2024-10-14',
        '2024-10-15',
        '2024-10-16',
        '2024-10-17',
        '2024-10-18',
         '2024-10-19',
         '2024-10-20',
      '2024-10-21',
         '2024-10-22',
    '2024-10-23',
    '2024-10-24',
    '2024-10-25',
    '2024-10-26',
    '2024-10-27',
    '2024-10-28',
    '2024-10-29',
    '2024-10-30',
    '2024-10-31'
];
    
    
    const availableTimes = [
        '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
    ];
    
    document.addEventListener('DOMContentLoaded', () => {
        const dateInput = document.getElementById('date');
        const timeInput = document.getElementById('time');
    
        // Preencher datas disponíveis
        availableDates.forEach(date => {
            const option = new Option(date, date);
            dateInput.add(option);
        });
    
        // Preencher horários disponíveis
        availableTimes.forEach(time => {
            const option = new Option(time, time);
            timeInput.add(option);
        });
    });
    
    document.getElementById('appointmentForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const service = document.getElementById('service').value;
    
        const appointmentItem = document.createElement('li');
        appointmentItem.textContent = `${name} - ${date} ${time} - ${service}`;
        document.getElementById('appointmentsList').appendChild(appointmentItem);
    
        // Limpa o formulário
        this.reset();
    });
    this.reset();
});