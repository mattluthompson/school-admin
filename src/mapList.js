export const mapList = (lst) => {
    let newList = []
    Object.entries(lst).map(([key, value]) => {
        // if(value instanceof Object) {
        //     // console.log(value)
        //     // console.log(this.mapList(value))
        //     let innerValue = this.mapList(value)
        //     newList.push(key)
        // } else {
        //     // console.log(value)
        //     // return(<h1>{`${key}: ${value}`}</h1>)
        //     newList.push(value)
        // }
        if(value instanceof Object) {
            let innerList = []
            innerList.push(key)
            innerList = innerList.concat(mapList(value))
            newList.push(innerList)
        } else {
            newList.push(value)
        }
    })
    return newList
}