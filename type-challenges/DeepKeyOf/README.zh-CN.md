// 实现以下功能，获取对象的所有可能的 key

```
type DeepKeyOf<T> = xxxx;

interface Stu {
  name: string;
  nest: {
    a: {
      b: number;
    };
    tt: {
      c: boolean;
    };
  };
  info: {
    score: number;
    grade: string;
  };
}

type res = DeepKeyOf<Stu>;
//  name  |  nest  |  info  |  nest.a  |  nest.tt  |  nest.a.b  |  nest.tt.c  |  info.score  |  info.grade
```
