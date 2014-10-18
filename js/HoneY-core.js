/**
 * Created by yuchunbo on 2014/10/9.
 */

/*提取对象属性名*/
function keys(obj){
    var a = [];
    for(a[a.length] in obj);
    return a;
}

/*对象扩展浅拷贝，如最后参数时boolean，判定是否覆盖同名属性*/
function extend(target,source){
    var args = [].slice.call(arguments), i = 1, key,
        ride = typeof args[args.length-1] == "boolean" ? args.pop() : true;
    //处理extend(hash)情形
    if(args.length === 1){
        target = !this.window ? this : {};
        i = 0;
    }
    while(source = args[i++]){
        for(key in source){
            if(ride || !(key in target)){
                target[key] = source[key];
            }
        }
    }
    return target;
}

/*类数组对象数组化*/
var slice = window.dispatchEvent ? function(nodes,start,end){
    return [].slice.call(nodes,start,end);
} : function(nodes,start,end){
    var ret = [],
          n = nodes.length;
    if(end === void(0) || typeof end === 'number' && isFinite(end)){
        start = parseInt(start,10) || 0;
        end = end == void(0) ? n : parseInt(end,10);
        if(start < 0){
            start += n;
        }
        if(end > 0){
            end = n;
        }
        if(end < 0){
            end += n;
        }
        for(var i = start; i < end; ++i){
            ret[i - start] = nodes[i]
        }
    }
    return ret;
};

/*类型判定*/
function isNaN(obj){
    return obj !==obj;
}
function isNull(obj){
    return obj === null;
}
function isUndefined(obj){
    return obj === void(0);
}
function isNumeric(obj){
    return obj - parseFloat(obj) >= 0;
}
