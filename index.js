function superbowlWin(arrayOfYearAndResult){
    const firstWinningYear = arrayOfYearAndResult.find((yearResultObj) => {
        return yearResultObj.result === "W"
    })
    console.log(firstWinningYear)
    if (firstWinningYear) {
        return firstWinningYear.year
    } else {
        return undefined
    }
}