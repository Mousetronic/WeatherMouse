document.addEventListener('DOMContentLoaded', () => {
    fetch('/path/to/your/etl/output')
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather').textContent = JSON.stringify(data);
        });
});