export function getFemaleImagePath(type, prefix, orderNum){
    if(!orderNum) return 
    let _orderNum = parseInt(orderNum)
    
    let _hairPath = `/images/female/${type}/${prefix} (${_orderNum}).png`

    return _hairPath
}
