import type { Equal, Expect, NotAny } from "@type-challenges/utils";

type cases = [Expect<Equal<res, DeepKeyOf<Stu>>>];

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

type res = DeepKeyOf<Stu>; //  name  |  nest  |  info  |  nest.a  |  nest.tt  |  nest.a.b  |  nest.tt.c  |  info.score  |  info.grade
