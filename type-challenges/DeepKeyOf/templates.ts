type DeepKeyOf<T> = T extends Record<string, any>
  ? {
      [k in keyof T]: k extends string | number
        ? k | `${k}.${DeepKeyOf<T[k]>}`
        : never;
    }[keyof T]
  : never;
