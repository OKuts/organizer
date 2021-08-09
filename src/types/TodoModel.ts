export interface ITodoModel{
    completed?: boolean;
    title: string;
    description:string;
    deadline: Date | string;
    tag: string;
}
