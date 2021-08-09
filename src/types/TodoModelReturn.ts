import { ITagModel } from './TagModel';

export interface ITodoModelReturn{
    id: string;
    completed: boolean;
    title: string;
    description:string;
    deadline: Date | string;
    tag: ITagModel;
}
