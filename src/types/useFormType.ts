export type ValidationForm = {
  email: {
    regex: RegExp;
    message: string;
  };
  password: {
    regex: RegExp;
    message: string;
  };
  number: {
    regex: RegExp;
    message: string;
  };
};
