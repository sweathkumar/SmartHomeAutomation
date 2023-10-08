// Sample data (replace with your actual devices)
const devices = [];

// Get the devices section element
const devicesSection = document.querySelector('.devices');
const deviceForm = document.getElementById('device-form');

// Function to create a device card
function createDeviceCard(device) {
    const deviceCard = document.createElement('div');
    deviceCard.classList.add('device-card');

    if (device.status === 'On') {
        deviceCard.classList.add('on');
    } else if (device.status === 'Off') {
        deviceCard.classList.add('off');
    }

    const deviceName = document.createElement('h2');
    deviceName.textContent = device.name;

    const deviceDescription = document.createElement('p');
    deviceDescription.textContent = `Description: ${device.description}`;

    const deviceStatus = document.createElement('p');
    deviceStatus.textContent = `Status: ${device.status}`;

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

    const viewButton = document.createElement('button');
    viewButton.textContent = 'View';
    viewButton.classList.add('view');
    viewButton.addEventListener('click', () => {
        const description = deviceCard.querySelector('.device-card-description');
        description.style.display = description.style.display === 'block' ? 'none' : 'block';
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', () => {
        const newName = prompt('Enter new device name:', device.name);
        if (newName !== null) {
            deviceName.textContent = newName;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        devicesSection.removeChild(deviceCard);
    });

    optionsDiv.appendChild(viewButton);
    optionsDiv.appendChild(editButton);
    optionsDiv.appendChild(deleteButton);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('device-card-description');
    descriptionDiv.textContent = `Description: ${device.description}`;

    deviceCard.appendChild(deviceName);
    deviceCard.appendChild(deviceDescription);
    deviceCard.appendChild(deviceStatus);
    deviceCard.appendChild(optionsDiv);
    deviceCard.appendChild(descriptionDiv);

    return deviceCard;
}

// Event listener for form submission
deviceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const deviceName = document.getElementById('device-name').value;
    const deviceDescription = document.getElementById('device-description').value;
    const deviceTag = document.getElementById('device-tag').value;
    const status = deviceTag.includes('On') ? 'On' : 'Off';

    const newDevice = {
        name: deviceName,
        description: deviceDescription,
        status: status,
    };

    devices.push(newDevice);

    const deviceCard = createDeviceCard(newDevice);
    devicesSection.appendChild(deviceCard);

    // Clear form fields
    deviceForm.reset();
});
