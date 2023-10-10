// Initialize Firebase (if using Firebase for backend)
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };
// firebase.initializeApp(firebaseConfig);

// Initialize Firestore (if using Firestore for backend)
// const db = firebase.firestore();

// Function to add a new device to the database
function addDeviceToDatabase(name, tag, description) {
    // Example using Firestore
    // db.collection("devices").add({
    //     name: name,
    //     tag: tag,
    //     description: description
    // })
    // .then(function(docRef) {
    //     console.log("Device added with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding device: ", error);
    // });
}

// Function to create a device card and add it to the dashboard
function createDeviceCard(name, tag, description) {
    const deviceCard = document.createElement('div');
    deviceCard.classList.add('device-card');
    deviceCard.innerHTML = `
        <h3>${name}</h3>
        <p>Tag: ${tag}</p>
        <p>Description: ${description}</p>
        <button class="delete-button">Delete</button>
    `;

    document.getElementById('device-dashboard').appendChild(deviceCard);
}

// Event listener for form submission
document.getElementById('device-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const tag = document.getElementById('tag').value;
    const description = document.getElementById('description').value;

    // Add the device to the database (if using a backend)
    addDeviceToDatabase(name, tag, description);

    // Create and display the device card
    createDeviceCard(name, tag, description);

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('tag').value = '';
    document.getElementById('description').value = '';
});

// Event listener for deleting a device
document.getElementById('device-dashboard').addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-button')) {
        const deviceCard = event.target.parentElement;
        deviceCard.parentElement.removeChild(deviceCard);
    }
});
