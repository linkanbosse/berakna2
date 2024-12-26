document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    app.innerHTML = `
        <h1>Bergmassa Beräkning</h1>
        <input type="number" id="K" placeholder="K-värde (t.ex. 25)">
        <input type="number" id="B" placeholder="B-värde (t.ex. 2.6)">
        <input type="number" id="L" placeholder="L-värde (t.ex. 5)">
        <button id="calculate">Beräkna</button>
        <p id="result"></p>
        <h3>Historik</h3>
        <ul id="history"></ul>
    `;

    const calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener('click', () => {
        const K = parseFloat(document.getElementById('K').value);
        const B = parseFloat(document.getElementById('B').value);
        const L = parseFloat(document.getElementById('L').value);
        const result = calculateSpeed(K, B, L);

        document.getElementById('result').textContent = `Hastigheten på bergmassan är ${result.speed.toFixed(2)} m/s och tidsfördröjningen är ${result.time.toFixed(2)} sekunder`;

        addToHistory(K, B, L, result.speed, result.time);
    });
    
    const calculateSpeed = (K, B, L) => {
        const speed = (K / (B ** 1.17)) * (L ** 0.39);
        const time = L / speed;
        return { speed, time };
    };

    const addToHistory = (K, B, L, speed, time) => {
        const history = document.getElementById('history');
        const listItem = document.createElement('li');
        listItem.textContent = `K: ${K}, B: ${B}, L: ${L} -> V: ${speed.toFixed(2)} m/s, t: ${time.toFixed(2)} s`;
        history.appendChild(listItem);
    };
});
