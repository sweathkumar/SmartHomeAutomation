// Add functionality to toggle device button colors
document.querySelectorAll('.control').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('on');
    });
});

// Add functionality to add a new room
document.getElementById('add-room-button').addEventListener('click', function () {
    const roomName = document.getElementById('room-name').value;
    // Add the new room to the UI
    addNewRoom(roomName);
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
    // Add the new device to the UI
    addNewDevice(selectedRoomId, deviceName, deviceType);
});

function addNewDevice(roomId, name, type) {
    const room = document.getElementById(roomId);
    const deviceContainer = room.querySelector('.device-container');
    const newDevice = document.createElement('div');
    newDevice.className = 'device';
    newDevice.innerHTML = `
        <img src="${getDeviceIcon(type)}" alt="${type}">
        <p>${name}</p>
        <button class="control on">Turn On</button>
    `;
    deviceContainer.appendChild(newDevice);
}

function getDeviceIcon(type) {
    switch (type) {
        case 'Light':
            return 'light-icon.png';
        case 'Thermostat':
            return 'thermostat-icon.png';
        default:
            return 'default-icon.png';
    }
}
