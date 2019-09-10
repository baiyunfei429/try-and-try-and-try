function quickSort(arr) {
   /*
    * 创建len保存数组的长度，每次获取数组的长度都要实时查询不利于性能；
    * index作为保存取到的中间值；
    * pivot保存比较参照物；
    * left、right作为子数组的容器；
    */
    var len = arr.length,
        index,
        pivot,
        left=[],
        right=[];
    // 如果数组只有一位，就直接返回数组,递归的终止条件；
    if (len <= 1) return arr;

    //获取中间值的索引，使用Math.floor向下取整；
    index = Math.floor(len / 2);

    // 使用splice截取中间值，第一个参数为截取的索引，第二个参数为截取的长度；
    // 如果此处使用pivot=arr[index]; 那么将会出现无限递归的错误；
    // splice影响原数组，原数组长度减一；
    pivot = arr.splice(index, 1);
    len -= 1;

    // 小于arr[pivot]的存到left数组里，大于arr[pivot]的存到right数组；
    for (var i = 0; i < len; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // 不断把分割的左右子数组传入quickSort，直到分割的只有一位直接返回子数组本身，递归终止；
    
    // 把每次分割的数组一层一层的用concat连接起来；
    // 每一层left里的元素都小于对应的pivot,right里的元素都大于对应的pivot；
    return quickSort(left).concat(pivot, quickSort(right));
}


// "快速排序"的思想很简单，整个排序过程只需要三步：
//       （1）在数据集之中，选择一个元素作为"基准"（pivot）。
 
// 　　（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
 
// 　　（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 
var quickSort = function(arr) {
 
　　if (arr.length <= 1) { return arr; }
 
　　var pivotIndex = Math.floor(arr.length / 2);
 
　　var pivot = arr.splice(pivotIndex, 1)[0];
 
　　var left = [];
 
　　var right = [];
 
　　for (var i = 0; i < arr.length; i++){
 
　　　　if (arr[i] < pivot) {
 
　　　　　　left.push(arr[i]);
 
　　　　} else {
 
　　　　　　right.push(arr[i]);
 
　　　　}
 
　　}
 
　　return quickSort(left).concat([pivot], quickSort(right));
 
};
console.log(quickSort([23,11,89,45,67,76,56,99]))