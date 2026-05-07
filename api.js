export async function fetchMatches(){
try{
const res=await fetch('./data/matches.json');
return await res.json();
}catch(err){
console.error(err);
return [];
}
}

export async function fetchTeams(){
const res=await fetch('./data/teams.json');
return await res.json();
}

export async function fetchStats(){
const res=await fetch('./data/stats.json');
return await res.json();
}

export async function fetchNews(){
return [
{title:'RCB playoff chances surge after dominant victory'},
{title:'Mumbai Indians continue winning streak'},
{title:'CSK strengthen top 4 hopes'}
];
}