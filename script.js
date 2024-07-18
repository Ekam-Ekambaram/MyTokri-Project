document.getElementById('api-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const phone = document.getElementById('phone').value;
    const responseDiv = document.getElementById('response');

    const data = {
        encryptionKey: 'FtmJ7frzTyWOzintybbqIWzwwclcPtaI',
        accessToken: '0e186445-0647-417c-ae27-8098533f1914',
        campaignID: '6a0fa162-fb4c-4074-a6d4-402744e3590b',
        country: 'IRAQ',
        countryCode: '+964',
        phone: phone
    };

    try {
        const response = await fetch('https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        responseDiv.innerHTML = `Response: ${JSON.stringify(result)}`;
    } catch (error) {
        responseDiv.innerHTML = `Error: ${error.message}`;
    }
});