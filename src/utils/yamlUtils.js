

export default function convert(rules){

    let newRules = rules.map(x => x.toJSON())
    
    return newRules
}

export function filterRuleObject(rule) {
    const filterProperties =[
        "send_comment",
        "send_message",
        "send_modmail",
        "perform_action"
    ]
    Object.keys(rule).forEach (prop => {
        if (filterProperties.indexOf(prop) !== -1){
            delete rule[prop]
        }
    })
    return rule
}