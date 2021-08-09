// @ts-nocheck
import { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { CustomDatePicker } from '../elements/DatePicker';

import { Input } from '../elements';

import { TaskCardWrapper } from '../../styles/TaskCardForm.styles';
import { TagWrapper } from '../../styles/Tag.styles';

import { useDeleteTodo, useTodo, useTags } from '../../../hooks';

import { taskCardFormSchema } from './config';

import { getStateTasks } from '../../../lib/redux/selectors';
import { ITodoModelReturn } from '../../../types';

const getIdSelectedTag = (tasks: ITodoModelReturn[], editId: string) => {
    if (!editId || editId === 'new') return '';
    const i = tasks.findIndex((item: ITodoModelReturn) => item.id === editId);

    return tasks[ i ].tag.id;
};

export const TaskCardForm: FC = () => {
    const { editId, tasks } = useSelector(getStateTasks);
    const [selectedTag, setSelectedTag] = useState(getIdSelectedTag(tasks, editId));

    const { data: tags } = useTags();
    const addUpdateTodo = useTodo();
    const deleteTodo = useDeleteTodo();

    const currentTask = (id: string) => tasks.find((item) => item.id === id);

    const defaultValues = {
        completed: false,
    };

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(taskCardFormSchema),
        defaultValues,
    });

    const [taskDeadline] = useState(editId === 'new'
        ? new Date().setHours(23, 59, 59, 999)
        : new Date(currentTask(editId)?.deadline));

    const getTodo = form.handleSubmit(async (credentials) => {
        const outData = editId === 'new' ? { ...credentials }
            : { ...credentials, completed: currentTask(editId).completed };
        await addUpdateTodo.mutateAsync(outData);
    });

    const changeSelected = (id: string):void => {
        form.setValue('tag', id, { shouldDirty: true });
        if (form.formState.errors.tag) form.formState.errors.tag.message = '';
        setSelectedTag(id);
    };

    const comleteTask = async (event):void => {
        event.preventDefault();
        const {
            title, description, deadline, tag: { id: tag },
        } = currentTask(editId);
        await addUpdateTodo.mutateAsync({
            title, description, deadline, tag, completed: true,
        });
    };

    const deleteTask = () => deleteTodo.mutateAsync();

    const resetForm = () => {
        const tag = form.getValues('tag');
        form.reset();
        form.setValue('tag', editId === 'new' ? '' : tag);
        setSelectedTag(getIdSelectedTag(tasks, editId));
        form.setValue('deadline', new Date(taskDeadline));
    };

    useEffect(() => {
        setSelectedTag(getIdSelectedTag(tasks, editId));
        form.setValue('tag', selectedTag, { shouldDirty: false });
    }, [editId]);

    return (
        <TaskCardWrapper
            onSubmit = { getTodo }
            onReset = { resetForm }>

            <div className = 'head'>
                <button
                    onClick = { comleteTask }
                    disabled = { (editId === 'new' || currentTask(editId)?.completed) && true }
                    className = 'button-complete-task'>
                    завершить
                </button>
                { editId !== 'new' && <div onClick = { deleteTask } className = 'button-remove-task'></div> }
            </div>
            <div className = 'content'>
                <label className = 'label'>Задачи
                    <Input
                        className = 'title'
                        defaultValue = { currentTask(editId)?.title || '' }
                        placeholder = 'Пройти интенсив по React + Redux + TS + Mobx'
                        error = { form.formState.errors.title }
                        register = { form.register('title') } />
                </label>
                <div className = 'deadline'>
                    <span className = 'date'>
                        <CustomDatePicker
                            defaultValue = { currentTask(editId)?.deadline
                                || new Date().setHours(23, 59, 59, 999) }
                            form = { form } />
                    </span>
                </div>
                <div className = 'description'>
                    <label className = 'label'>Описание
                        <Input
                            className = 'text'
                            defaultValue = { currentTask(editId)?.description }
                            placeholder = 'После изучения всех технологий, завершить работу над проектами и найти работу.'
                            name = 'description'
                            tag = 'textarea'
                            error = { form.formState.errors.description }
                            register = { form.register('description') } />
                    </label>
                </div>
                <div className = 'tags'>
                    { tags?.map((item) => (
                        <TagWrapper
                            onClick = { () => changeSelected(item.id) }
                            register = { form.register('tag') }
                            bg = { item.bg }
                            selected = { item.id === selectedTag }
                            color = { item.color }
                            key = { item.id }>
                            { item.name }
                        </TagWrapper>)) }
                </div>
                <div className = 'errors'>
                    { form.formState.errors.title
                        && <p>{ form.formState.errors.title.message }</p> }
                    { form.formState.errors.description
                        && <p>{ form.formState.errors.description.message }</p> }
                    { form.formState.errors.tag
                        && <p>{ form.formState.errors.tag.message }</p> }
                </div>
                <div className = 'form-controls'>
                    <button
                        type = 'reset'
                        className = 'button-reset-task'
                        disabled = { !form.formState.isDirty && true }>Reset</button>
                    <button
                        type = 'submit'
                        className = 'button-save-task'
                        disabled = { !form.formState.isDirty && true }>Save</button>
                </div>
            </div>
        </TaskCardWrapper>
    );
};

