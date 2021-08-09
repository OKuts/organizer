export type ErrorType = {
    statusCode: number,
    message:  string,
    error:    string,
};

export type ErrorResposeType = {
    response: {
        data: ErrorType;
    }
};
