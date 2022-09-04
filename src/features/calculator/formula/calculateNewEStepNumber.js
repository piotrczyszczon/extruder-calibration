export function calculateNewEStepNumber(measuredLength, currentEStepNumber) {
    if (measuredLength && currentEStepNumber) {
        return (100 * currentEStepNumber) / measuredLength
    } else {
        return ''
    }
}