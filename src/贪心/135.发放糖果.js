/**
 * 一群孩子站成一排；
 * 每个孩子至少分配到1个糖果；
 * 相邻两个孩子评分更高的孩子会获得更多的糖果；
 * 需要准备的 最少糖果数目 ？
 */

/**
 * 时间 92ms 62%
 * 空间 43.8MB 30%
 * 题解如下
 *
 * 两次遍历即可
 * 每个孩子糖果数初识化为1
 * 从**左到右**遍历一次，当评分**大于左边**就加糖果
 * 从**右到左**遍历一次，当评分**大于右边**就加糖果
 * 每次遍历只考虑相邻**一侧**
 * 注意：从**右到左**的过程，**相邻差距2**就不用赋比相邻大1的值，**使用原来的**即可，反之赋比相邻大1的值
 * 比如 评分 **[1,3,4,5,2]** 糖果数 **[1,2,3,4,1]**
 * 如果只是简单的在相邻基础上糖果+1，那相邻的本来就很少（1），只是+1（2）会比不上另一侧相邻的（原本是4才符合）
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
 const candy = function(ratings) {
  // 数组长度小于2
  if (ratings.length < 2) return 1;
  // 所有孩子糖果数初识值为1
  const num = [];
  for (let i=0; i< ratings.length; i++) {
      num[i] = 1
  }
  // 左到右
  for(let i=1; i < ratings.length; i++) {
      if(ratings[i] > ratings[i-1]) {
          num[i] = num[i-1] + 1
      }
  }
  // 右到左
  for(let i=ratings.length-1; i > 0; i--) {
      if(ratings[i] < ratings[i-1]) {
          // 如果相邻差距2就不用赋比相邻大1的值，使用原来的即可，反之赋比相邻大1的值
          num[i-1] = (num[i-1] > (num[i] + 1) ? num[i-1] : (num[i]+1))
      }
  }
  // 统计总数
  let result = num.reduce((preVal, item) => {
    return preVal + item  
  }, 0)
  return result
}