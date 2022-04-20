// 给定多个区间
// 起止相连不算重叠
// 计算让这些区间互不重叠所需要移除区间的最少个数

// 题解：
// 选择的区间结尾越小，余留给其它区间的空间越大，就越能保留更多的区间。
// 先把区间按照结尾的大小进行增序排序，每次选择结尾最小且和前一个选择的区间不重叠的区间。
// 实时维护区间尾tail
// 如果区间不重叠则移动tail，重叠则不移动（永远以合适的区间尾当做尾，不然不合适的区间会干扰区间尾）

// 时间 200ms 97%
// 空间 74MB 2%

/**
 * @param {number[][]} intervals
 * @return {number}
 */
 const eraseOverlapIntervals = function(intervals) {
  // 边缘1
  if(!intervals.length) return 0

  // 根据区间尾排升序
  intervals.sort((a, b) => a[1] - b[1])

  // 实时维护区间尾tail
  let tail = intervals[0][1]
  // 记录不重叠区间个数,第一个一定有效
  let num = 1
  for(let i=1; i < intervals.length; i++) {
      // 如果上一个区间尾小于等于下一个区间头，表示不重叠
      if(tail <= intervals[i][0]) {
          num++
          // 如果区间不重叠则移动tail，重叠则不移动
          tail = intervals[i][1]
      }
      
  }
  return intervals.length - num 
}