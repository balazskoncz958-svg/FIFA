export function renderData(arr) {
    const cardString = arr.map(obj =>
        `
        <div class="card">
            <h2>${obj.year} év győztese: ${obj.winner}</h2>
            <p>Az eredmény: ${obj.score}</p>
            <p>A második helyezett: ${obj.runner_up}</p>
            <button onclick="showDetail(${obj.id})">Részletek...</button>
        </div>
        `).join("");
    document.querySelector(".lista").innerHTML = cardString;
    document.querySelector(".msg").innerHTML = "<h3>A labdarúgó-világbajnokságok döntöinek teljes listája 1930-tól 2026-ig</h3>";
}