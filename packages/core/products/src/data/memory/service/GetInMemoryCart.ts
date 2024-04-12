export const url = '/api/Advertizer/Session';
export const method = 'post';

export type RequestBody = {
  ruleId: number;
  isFinished: boolean;
  streamTime: number;
  platformType: 'web';
};

interface FailServerResponse {
  Code: 0;
  Message: string;
  Data: null;
}

interface SuccessServerResponse {
  Code: 1;
  Message: string;
  Data: null;
}

export type SendAdvertizerSessionService =
  | FailServerResponse
  | SuccessServerResponse;
