const data = { key: 'value' };

fetch('/api/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
    console.log(result);
})
.catch(error => {
    console.error('Error:', error);
});
