const covid19ImpactEstimator = (data) => {
    const {data} = input;
    return{
        data:input,
        impact:{},
        severeImpact:{}
    }
    input.periodType=["days", "weeks","months"]
    if(periodType ==="days"){
        timeToElapse=value;
    }
    else if(periodType ==="weeks"){
        timeToElapse=value * 7;
    }
    else{
        timeToElapse=value * 30;
    }
    //impart module

      
        return impact ={

            //challenge 1
            currentlyInfected :reportedCases * 10,
            infectedByRequestTime: this.currentlyInfected * ( Math.pow( 2,Math.floor(timeToElapse/3))),

            //challenge 2
            severeCasesByRequestedTime = 0.15 * this.infectedByRequestTime,
            hospitalBedByRequestedTime = 0.35 * totalHospitalBeds,

            //challenge 3
            casesForICUByRequestedTime = 0.05 * infectionsByRequestedTime,
            casesForVentilatorsByRequestedTime = 0.02 * nfectionsByRequestedTime,
            infectionsByRequestedTime =infectionsByRequestedTime * avgDailyIncomeInUSD * avgDailyIncomePopulation * timeToElapse
        }

   
       return impactSevere ={
            
        //challenge 1
            currentlyInfected :reportedCases * 50,
            infectedByRequestTime:this.currentlyInfected * ( Math.pow( 2,Math.floor(timeToElapse/3))),
            
            //challenge 2
            severeCasesByRequestedTime = 0.15 * this.infectedByRequestTime,
            hospitalBedByRequestedTime = 0.35 * totalHospitalBeds,

            //challenge 3
            casesForICUByRequestedTime = 0.05 * infectionsByRequestedTime,
            casesForVentilatorsByRequestedTime = 0.02 * infectionsByRequestedTime,
            infectionsByRequestedTime =infectionsByRequestedTime * avgDailyIncomeInUSD * avgDailyIncomePopulation * timeToElapse
        }
    
}
export default covid19ImpactEstimator;
