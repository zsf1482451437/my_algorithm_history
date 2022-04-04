/**
 * 有一群孩子和一堆饼干
 * 每个孩子有一个饥饿度
 * 每个饼干都有一个大小
 * 每个孩子只能吃一个饼干
 * 且只有饼干的大小大于等于孩子的饥饿度时，这个孩子才能吃饱。
 * 求解 最多有多少孩子可以吃饱？
 */

/**
 * 时间 92ms 62%
 * 空间 43.8MB 30%
 * 题解如下
 *
 * 饥饿度最小的孩子最容易吃饱，所以先考虑这个孩子
 * 给剩余孩子里最小饥饿度的孩子
 * 分配最小的能饱腹的饼干
 * 满足了这个孩子之后，采取同样的策略
 * 直到 当满足所有小孩或者分完所有饼干就结束
 */
const findContentChildren = function (g, s) {
  // 饥饿度排升序
  g.sort((a, b) => a - b)
  // 饼干大小排升序
  s.sort((a, b) => a - b)
  let child = 0
  let cookie = 0
  // 当满足所有小孩或者分完所有饼干就结束
  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie]) ++child
    ++cookie
  }
  return child
}
