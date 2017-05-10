/**
 * 数组去重
 */
var arr = [1,2,1,5,12,3,2,42,5,3,1,4,6,3,4,5];
function uniqueArr(arr) {
    var obj = {};
    var newArr = [];
    for(var i=0,ele;ele=arr[i++];){
        if(!obj[ele]){
            obj[ele] = true;
            newArr.push(ele);
        }
    }
    return newArr;
}
