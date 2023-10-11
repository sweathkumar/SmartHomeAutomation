// Define button click events to control devices
document.getElementById('living-room-light').addEventListener('click', function () {
    // Code to toggle living room light
    alert('Living room light switched');
});

document.getElementById('living-room-thermostat').addEventListener('click', function () {
    // Code to adjust living room thermostat
    alert('Living room thermostat adjusted');
});

document.getElementById('bedroom-light').addEventListener('click', function () {
    // Code to toggle bedroom light
    alert('Bedroom light switched');
});

// Add functionality to add a new device
document.getElementById('device-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const deviceName = document.getElementById('device-name').value;
    const deviceType = document.getElementById('device-type').value;

    // Add the new device to the UI and your system
    addNewDevice(deviceName, deviceType);
    alert(`Added new device: ${deviceName} - ${deviceType}`);
});

function addNewDevice(name, type) {
    // Create a new device element and append it to the UI
    const newDevice = document.createElement('div');
    newDevice.className = 'device';
    newDevice.innerHTML = `
        <img src="${getDeviceIcon(type)}" alt="${type}">
        <p>${name}</p>
        <button class="control">Control</button>
    `;

    document.querySelector('.room').appendChild(newDevice);
}

function getDeviceIcon(type) {
    // Define icons for different device types
    switch (type) {
        case 'Light':
            return 'light-icon.png';
        case 'Thermostat':
            return 'thermostat-icon.png';
        default:
            return 'default-icon.png'; // You can add a default icon
    }
}
