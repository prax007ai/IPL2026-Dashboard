export function generatePredictions(teams){
return teams.map(team=>({
name:team.name,
probability:Math.min(99,team.points*5+team.momentum*4),
confidence:team.nrr>0.5?'High':'Medium'
})).sort((a,b)=>b.probability-a.probability);
}