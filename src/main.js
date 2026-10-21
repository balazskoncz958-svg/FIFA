import { worldCupList } from './data';
import { renderData } from './render';
import './style.css';
renderData(worldCupList);

window.showDetail = function showDetail(id) {
    const selected = worldCupList.find(obj => obj.id == id);
    alert(`${selected.winner} - ${selected.runner_up} (${selected.year}):\n\n${selected.venue}\n\n${selected.location}\n\nNézők száma: ${selected.attendance}`);
}

window.keres = function keres() {
    const kereses = document.getElementById("kereses").value;
    const updatedList = worldCupList.filter(obj => obj.winner.toLowerCase() == kereses.toLowerCase() || obj.runner_up.toLowerCase() == kereses.toLowerCase());
    renderData(updatedList);
    document.querySelector(".msg").innerHTML = updatedList.length != 0 ? `<h3>${kereses} az alábbi döntőkben vett részt:</h3>` : `<h3>Nincs találat! A keresett kifejezés: ${kereses} !</h3>`;
    document.getElementById("kereses").value = "";
}

window.torles = function torles() {
    renderData(worldCupList);
}