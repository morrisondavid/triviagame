interface IResult {
  success: boolean;
  errors: string[];
  code: number;
  value: any;
}

class Result implements IResult {
  constructor(
    public value: any,
    public success: boolean = false,
    public errors: string[] = [],
    public code: number = 200
  ) {
    this.success = success;
    this.errors = errors;
    this.code = code;
    this.value = value;
  }
}

const ResultHelper = {
  Error: (errorMessages: string[] | string, code?: number) => {
    let errors: string[] = [];
    if (!Array.isArray(errorMessages)) {
      errors.push(errorMessages);
    } else {
      errors = errorMessages;
    }

    return new Result(undefined, false, errors, code || 500);
  },
  Success: (value: any) => new Result(value, true)
};

export default ResultHelper;
