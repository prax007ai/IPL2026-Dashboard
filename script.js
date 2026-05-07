import {fetchMatches,fetchTeams,fetchStats,fetchNews} from './api.js';
import {generatePredictions} from './predictions.js';
import {renderQualificationChart,renderMomentumChart} from './charts.js';

async function init(){

const matches=await fetchMatches();
const teams=await fetchTeams();
const stats=await fetchStats();
const news=await fetchNews();

renderMatches(matches);
renderTeams(teams);
renderStats(stats);

const predictions=generatePredictions(teams);

renderPredictions(predictions);

renderQualificationChart(predictions);
renderMomentumChart(teams);

document.getElementById('newsTicker').innerHTML=news.map(n=>n.title).join(' | ');
}

function renderMatches(matches){
const container=document.getElementById('matchCards');

container.innerHTML=matches.map(m=>`
<div class="match-card">
<h3>${m.team1} vs ${m.team2}</h3>
<p>${m.status}</p>
<div class="score">${m.score}</div>
<p>${m.venue}</p>
</div>
`).join('');
}

function renderTeams(teams){
document.getElementById('pointsTable').innerHTML=teams.map(t=>`
<div class="team-row">
<span>${t.name}</span>
<span>${t.points}</span>
</div>
`).join('');
}

function renderPredictions(predictions){
document.getElementById('predictionContainer').innerHTML=predictions.map(p=>`
<div class="prediction">
<span>${p.name}</span>
<span>${p.probability}%</span>
</div>
`).join('');
}

function renderStats(stats){
document.getElementById('orangeCap').innerHTML=stats.orangeCap.map(p=>`
<div class="team-row">
<span>${p.name}</span>
<span>${p.runs}</span>
</div>
`).join('');

document.getElementById('purpleCap').innerHTML=stats.purpleCap.map(p=>`
<div class="team-row">
<span>${p.name}</span>
<span>${p.wickets}</span>
</div>
`).join('');
}

document.getElementById('refreshBtn').addEventListener('click',init);

init();