export function renderQualificationChart(predictions){
const ctx=document.getElementById('qualificationChart');

new Chart(ctx,{
type:'bar',
data:{
labels:predictions.map(p=>p.name),
datasets:[{
label:'Qualification %',
data:predictions.map(p=>p.probability)
}]
},
options:{
responsive:true
}
});
}

export function renderMomentumChart(teams){
const ctx=document.getElementById('momentumChart');

new Chart(ctx,{
type:'line',
data:{
labels:teams.map(t=>t.name),
datasets:[{
label:'Momentum',
data:teams.map(t=>t.momentum)
}]
},
options:{
responsive:true
}
});
}