// This file is an augmentation to the built-in ImportMeta interface
// Thus cannot contain any top-level imports
// <https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation>

/// <reference types="vite/client" />

type EnvVariables = {
  [K in keyof typeof import('../env').env];
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ImportMetaEnv extends EnvVariables {}
