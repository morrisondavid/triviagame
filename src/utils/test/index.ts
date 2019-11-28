export const returnValue = (value: any) => jest.fn().mockReturnValue(value);

export const returnPromiseSuccess = (value: any) =>
  jest.fn().mockReturnValue(Promise.resolve(value));

export const returnPromiseFailure = (error: any) =>
  jest.fn().mockReturnValue(Promise.reject(error));

export const getDispatchedActionsCounts = (mockDispatch: jest.Mock<any, any>) => {
  const dispatchedActionCounts: { [actions: string]: number } = {};

  mockDispatch.mock.calls
    .filter(call => call[0] && call[0].type)
    .map(call => {
      const actionType = call[0].type;

      if (dispatchedActionCounts[actionType]) {
        dispatchedActionCounts[actionType]++;
      } else {
        dispatchedActionCounts[actionType] = 1;
      }
    });

  return dispatchedActionCounts;
};

export const getDispatchedActions = (mockDispatch: jest.Mock<any, any>) => {
  const dispatchedActions: any[] = [];

  mockDispatch.mock.calls
    .filter(call => call[0].type)
    .map(call => {
      dispatchedActions.push(call[0]);
    });

  return dispatchedActions;
};

export default {
  returnValue,
  returnPromiseFailure,
  returnPromiseSuccess,
  getDispatchedActions,
  getDispatchedActionsCounts
};
