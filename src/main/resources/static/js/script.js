javascript
document.getElementById('device-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const tag = document.getElementById('tag').value;
    const description = document.getElementById('description').value;

    const deviceCard = document.createElement('div');
    deviceCard.classList.add('device-card');
    deviceCard.innerHTML = `
        <h3>${name}</h3>
        <p>Tag: ${tag}</p>
        <p>Description: ${description}</p>
        <button class="delete-button">Delete</button>
    `;

    document.getElementById('device-dashboard').appendChild(deviceCard);

    document.getElementById('name').value = '';
    document.getElementById('tag').value = '';
    document.getElementById('description').value = '';
});

document.getElementById('device-dashboard').addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
        const deviceCard = event.target.parentElement;
        deviceCard.parentElement.removeChild(deviceCard);
    }
});