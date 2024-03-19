import { t_combo } from './combo';

export type t_cart = {
  combos: {
    combo: t_combo;
    iteration: number;
  }[];
};
