// Define button click events to control devices
document.getElementById('living-room-light').addEventListener('click', function () {
    // Code to toggle living room light
    alert('Living room light switched');
});

// ... (The existing JavaScript code remains the same)

// Update thermostat controls to handle slider input
document.getElementById('living-room-thermostat').addEventListener('input', function () {
    const temperature = this.value;
    // Handle temperature adjustment logic for the living room thermostat
    // You can update your smart home system here
    alert(`Living Room Thermostat set to ${temperature}°C`);
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

// ... (The existing JavaScript code remains the same)

// Add functionality to add a new room
document.getElementById('add-room-button').addEventListener('click', function () {
    const roomName = document.getElementById('room-name').value;
    // Add the new room to the UI and your system
    addNewRoom(roomName);
    alert(`Added new room: ${roomName}`);
});

function addNewRoom(name) {
    const rooms = document.querySelector('.rooms');
    const newRoom = document.createElement('div');
    newRoom.className = 'room';
    newRoom.id = name.toLowerCase().replace(' ', '-');
    newRoom.innerHTML = `
        <h3>${name}</h3>
    `;
    rooms.appendChild(newRoom);
}

// Add functionality to add a new device
document.getElementById('add-device-button').addEventListener('click', function () {
    const deviceName = document.getElementById('device-name').value;
    const deviceType = document.getElementById('device-type').value;
    const selectedRoomId = document.getElementById('room-select').value;
    // Add the new device to the UI and your system
    addNewDevice(selectedRoomId, deviceName, deviceType);
    alert(`Added new device: ${deviceName} - ${deviceType}`);
});

function addNewDevice(roomId, name, type) {
    const room = document.getElementById(roomId);
    const deviceContainer = room.querySelector('.device-container');
    const newDevice = document.createElement('div');
    newDevice.className = 'device';
    newDevice.innerHTML = `
        <img src="${getDeviceIcon(type)}" alt="${type}">
        <p>${name}</p>
        <button class="control">Control</button>
    `;
    deviceContainer.appendChild(newDevice);
}

