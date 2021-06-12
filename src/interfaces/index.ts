export interface Parameters {
    type: string;
    funcName: string;
    inputs: {
        type: string;
        value: string;
        name?: string;
    }[];
};