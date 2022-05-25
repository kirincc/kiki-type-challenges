// 联合类型 union
// keyof 用于遍历获取 T 中所有的类型
// extends 约束了 K 必须是从 T 中继承而来
// 二者结合使用类似于 [...] 扩展运算符
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
