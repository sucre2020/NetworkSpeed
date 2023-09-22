const startTestButton = document.getElementById('startTest');
const downloadSpeedElement = document.getElementById('downloadSpeed');
const uploadSpeedElement = document.getElementById('uploadSpeed');

startTestButton.addEventListener('click', async () => {
    startTestButton.disabled = true;
    downloadSpeedElement.textContent = 'Testing...';
    uploadSpeedElement.textContent = 'Testing...';

    // Send a request to your Python server to perform the speed test
    const response = await fetch('/speedtest');

    if (response.ok) {
        const data = await response.json();
        downloadSpeedElement.textContent = `${data.downloadSpeed} Mbps`;
        uploadSpeedElement.textContent = `${data.uploadSpeed} Mbps`;
    } else {
        downloadSpeedElement.textContent = 'Error';
        uploadSpeedElement.textContent = 'Error';
    }

    startTestButton.disabled = false;
});
