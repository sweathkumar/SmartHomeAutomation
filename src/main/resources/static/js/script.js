// Sample data (replace with your actual devices)
const devices = [
    { name: "Living Room Light", status: "On" },
    { name: "Thermostat", status: "72°F" },
    { name: "Kitchen Lights", status: "Off" },
    { name: "Smart Lock", status: "Locked" },
    { name: "Security Cameras", status: "Active" },
    // Add more device objects here
];

// Get the devices section element
const devicesSection = document.querySelector('.devices');

// Iterate through the devices array and create device cards
devices.forEach(device => {
    // Create a new device card element
    const deviceCard = document.createElement('div');
    deviceCard.classList.add('device-card'); // You can style this class with CSS

    // Create elements for device name and status
    const deviceName = document.createElement('h2');
    deviceName.textContent = device.name;

    const deviceStatus = document.createElement('p');
    deviceStatus.textContent = `Status: ${device.status}`;

    // Append the name and status elements to the device card
    deviceCard.appendChild(deviceName);
    deviceCard.appendChild(deviceStatus);

    // Append the device card to the devices section
    devicesSection.appendChild(deviceCard);
});
