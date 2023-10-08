// Sample data (replace with your actual devices)
const devices = [
    { name: "Living Room Light", description: "Bright LED", tag: "Light", status: "On" },
    { name: "Thermostat", description: "Temperature Control", tag: "Thermostat", status: "Off" },
    // Add more device objects here
];

// Get the devices section element
const devicesSection = document.querySelector('.devices');
const deviceForm = document.getElementById('device-form');

// Function to create a device card
function createDeviceCard(device) {
    const deviceCard = document.createElement('div');
    deviceCard.classList.add('device-card');

    const deviceName = document.createElement('h2');
    deviceName.textContent = device.name;

    const deviceDescription = document.createElement('p');
    deviceDescription.textContent = `Description: ${device.description || 'N/A'}`;

    const deviceTag = document.createElement('p');
    deviceTag.textContent = `Tag: ${device.tag || 'N/A'}`;

    const deviceStatus = document.createElement('p');
    deviceStatus.textContent = `Status: ${device.status}`;

    // Create buttons for turning on/off, viewing, and editing
    const turnOnOffButton = document.createElement('button');
    turnOnOffButton.textContent = 'Turn On/Off';
    turnOnOffButton.classList.add('turn-button');

    const viewButton = document.createElement('button');
    viewButton.textContent = 'View';
    viewButton.classList.add('view-button');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');

    // Add event listeners to buttons
    turnOnOffButton.addEventListener('click', () => toggleDeviceStatus(deviceCard, device));
    viewButton.addEventListener('click', () => showDeviceDetails(deviceCard, device));
    editButton.addEventListener('click', () => editDeviceDetails(deviceCard, device));

    deviceCard.appendChild(deviceName);
    deviceCard.appendChild(deviceDescription);
    deviceCard.appendChild(deviceTag);
    deviceCard.appendChild(deviceStatus);
    deviceCard.appendChild(turnOnOffButton);
    deviceCard.appendChild(viewButton);
    deviceCard.appendChild(editButton);

    return deviceCard;
}

// Toggle device status (On/Off)
function toggleDeviceStatus(card, device) {
    device.status = device.status === "On" ? "Off" : "On";
    card.querySelector('.device-card p:last-child').textContent = `Status: ${device.status}`;

    // Change card color based on status
    if (device.status === "On") {
        card.classList.add('green');
        card.classList.remove('red');
    } else {
        card.classList.remove('green');
        card.classList.add('red');
    }
}

// Show device details in a popup
function showDeviceDetails(card, device) {
    const popup = document.createElement('div');
    popup.classList.add('device-popup');
    popup.innerHTML = `
        <h2>${device.name}</h2>
        <p>Description: ${device.description || 'N/A'}</p>
        <p>Tag: ${device.tag || 'N/A'}</p>
        <p>Status: ${device.status}</p>
    `;

    card.appendChild(popup);

    // Close popup when clicking outside
    document.addEventListener('click', function closePopup(event) {
        if (!card.contains(event.target)) {
            card.removeChild(popup);
            document.removeEventListener('click', closePopup);
        }
    });
}

// Edit device details in the card
function editDeviceDetails(card, device) {
    const name = prompt('Edit Device Name:', device.name);
    if (name !== null) {
        device.name = name;
        card.querySelector('h2').textContent = name;
    }
}

// Add a click event listener to the devices section (event delegation)
devicesSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        // Get the parent card element and remove it
        const cardToDelete = event.target.closest('.device-card');
        if (cardToDelete) {
            devicesSection.removeChild(cardToDelete);
        }
    }
});

// Iterate through the devices array and create device cards
devices.forEach(device => {
    const deviceCard = createDeviceCard(device);
    devicesSection.appendChild(deviceCard);
});

// Add a new device from the form
deviceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target['device-name'].value;
    const description = e.target['device-description'].value;
    const tag = e.target['device-tag'].value;
    const status = "Off"; // New devices start as "Off"
    const newDevice = { name, description, tag, status };
    const deviceCard = createDeviceCard(newDevice);
    devicesSection.appendChild(deviceCard);
    deviceForm.reset(); // Clear the form inputs
});
