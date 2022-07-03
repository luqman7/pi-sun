const  {generateDigitsOfPi} =  require('../services')

async function piAccurator(req, res){
    let generator = generateDigitsOfPi();
    let pi = req.body.pi;
    let circumferenceOfSun = "";
    const radiusSun = 696340n;

    let piValue = "";
    for (let i = 0; i <pi.length+10; i++) 
    { piValue += generator.next().value; }
    
    circumferenceOfSunPre = 2n * BigInt(piValue) * radiusSun
    circumferenceOfSun = circumferenceOfSunPre.toString().replace('.','')
    const result = {
        circumferenceOfSun,
        pi:piValue
    }
    res.json(result)
}

module.exports= { piAccurator }