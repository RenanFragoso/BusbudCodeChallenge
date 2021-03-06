// Calculates the search score based on the word score
// Decreases the word score by process.env.DISTANCE_PENALTY_FACTOR for each process.env.DISTANCE_KM_FACTOR kilometers 
// when latitude and longitude are informed in que query

export function calculateScore(wordScore: number, distance: number) {
    
    if(!distance || distance == 0)
        return Math.round((wordScore)*100)/100
    
    const distancePenalty = Math.floor(distance/(Number(process.env.DISTANCE_KM_FACTOR)*1000)) / Number(process.env.DISTANCE_PENALTY_FACTOR)
    var score = Math.round((wordScore - distancePenalty)*100)/100
    if(score < 0) score = 0
    
    return score
}
