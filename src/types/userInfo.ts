export type t_userInfo = {
  name: string;
  phoneNumber: string;
  type: 'host' | 'user';
  raceCode?: string;
  scoreVerified?: boolean;
};
