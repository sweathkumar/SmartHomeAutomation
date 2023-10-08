// Sample data (replace with your actual devices)
const devices = [
    { name: "Living Room Light", status: "On", description: "This is a smart light for the living room." },
    { name: "Thermostat", status: "72°F", description: "Smart thermostat for controlling the temperature." },
    { name: "Kitchen Lights", status: "Off", description: "Smart lights for the kitchen area." },
    { name: "Smart Lock", status: "Locked", description: "Secure your home with this smart lock." },
    { name: "Security Cameras", status: "Active", description: "Monitor your home with these security cameras." },
    // Add more device objects here
];

// Get the devices section element
const devicesSection = document.querySelector('.devices');

// Function to create device cards
function createDeviceCard(device) {
    // Create a new device card element
    const deviceCard = document.createElement('div');
    deviceCard.classList.add('device-card'); // You can style this class with CSS

    // Create elements for device name and status
    const deviceName = document.createElement('h2');
    deviceName.textContent = device.name;

    const deviceStatus = document.createElement('p');
    deviceStatus.textContent = `Status: ${device.status}`;

    // Create a "View" button
    const viewButton = document.createElement('button');
    viewButton.textContent = "View";
    viewButton.classList.add('view-button');

    // Create a div to hold the description (initially hidden)
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('device-description');
    descriptionDiv.textContent = device.description;
    descriptionDiv.style.display = "none"; // Initially hidden

    // Event listener to toggle description visibility
    viewButton.addEventListener('click', () => {
        if (descriptionDiv.style.display === "none") {
            descriptionDiv.style.display = "block";
        } else {
            descriptionDiv.style.display = "none";
        }
    });

    // Append elements to the device card
    deviceCard.appendChild(deviceName);
    deviceCard.appendChild(deviceStatus);
    deviceCard.appendChild(viewButton);
    deviceCard.appendChild(descriptionDiv);

    // Append the device card to the devices section
    devicesSection.appendChild(deviceCard);
}

// Iterate through the devices array and create device cards
devices.forEach(createDeviceCard);
