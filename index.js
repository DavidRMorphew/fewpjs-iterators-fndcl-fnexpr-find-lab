function superbowlWin(arrayOfYearAndResult){
    const firstWinningYear = arrayOfYearAndResult.find((yearResultObj) => {
        return yearResultObj.result === "W"
    })
    
    return !!firstWinningYear ? firstWinningYear.year : undefined
}