const player = {
    name: 'abcd',
    JerseyNo: 62,
    origin: 'europe',
    Team: 'Real Madrid',
    GoalScored: [2, 3, 4, 5, 1, 3],
    ScoringGoals: function(){
        console.log('Goal Scored');
    },
}
// console.log(player.GoalScored);
// console.log(player.image)
// player.ScoringGoals()
console.log(player)
const objectDiv = document.getElementById('object_details')

const playerdiv = `
<h1>${player.name}</h1>
`
objectDiv.innerHTML = playerdiv;