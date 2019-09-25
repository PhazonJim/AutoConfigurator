

export default function convert(YAMLObject){
    console.log(typeof YAMLObject)
    return YAMLObject.toJSON()
}