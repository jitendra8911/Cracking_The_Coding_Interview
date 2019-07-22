function optimalUtilization(maxTravelDist, forwardRouteList, returnRouteList)
{
    // WRITE YOUR CODE HERE
    let bestPair = [];
    let bestSum = 0;
    for (let i = 0; i < forwardRouteList.length; i++) {
        for (let j = 0; j < returnRouteList.length; j++) {
            let travelingDist = forwardRouteList[i][1] + returnRouteList[j][1];
            if (travelingDist < maxTravelDist &&
                travelingDist > bestSum) {
                bestPair[0] = forwardRouteList[i][0];
                bestPair[1] = returnRouteList[j][0];
                bestSum = travelingDist;
            }
        }
    }

    return bestPair;
}

optimalUtilization(7000, [[1,2000], [2, 4000], [3, 6000]], [[1,2000]]);