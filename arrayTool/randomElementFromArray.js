/**
 * Created by Administrator on 2016/11/3.
 */
function select_from(lowerIndex,upperIndex){
    var rangeLen = upperIndex - lowerIndex + 1;
    return Math.floor(Math.random() * rangeLen + lowerIndex);
}

//eg.
var sample = ['red','green','blue','black','white','yellow'];
var color = sample[select_from(0,sample.length-1)];
alert(color);