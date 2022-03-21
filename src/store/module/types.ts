// 用户类型
export type UserType = {
  username: string;
  admin: boolean;
};

// 登陆信息
export type LoginInfo = {
  username: string;
  password: string;
};

// 历史信息
export type HistoryMsg = {
  msgs: Message[];
};

// 信息
export type Message = {
  belong: UserType;
  msgs: string;
};
