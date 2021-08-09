import { ITodoModelReturn, ITagModel } from '.';

export interface IStateModel {
    auth: {
        token:        string,
        errorMessage: string,
        error:        boolean,
    },
    tasks: {
        tasks:        ITodoModelReturn[],
        editId:       string,
        tags:         ITagModel[],
        errorMessage: string,
        error:        boolean,
    }

}
