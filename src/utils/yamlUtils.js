

export default function convert(rules){

    let newRules = rules.map(x => x.toJSON())
    
    return newRules
}