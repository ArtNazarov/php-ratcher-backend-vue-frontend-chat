export interface Message {
  timestamp: number;
  nickname: string;
  message: string;
}

export type WebSocketAction = 'history' | 'send';