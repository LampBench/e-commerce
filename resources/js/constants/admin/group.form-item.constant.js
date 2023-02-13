import * as Yup from 'yup';

export const groupFormItems = [
    {
        label: 'Group name',
        name: 'name',
        type: 'text',
        placeholder: 'Enter group name',
        rangeLength: 50,
        rules: {
            required: { value: true, message: 'Group name is required'},
            maxLegth: { value: 50, message: 'Group name must be less than 50 characters'},
            minLegth: { value: 3, message: 'Group name must be more than 3 characters'}
        },
    },
    {
        label: 'Group description',
        name: 'description',
        type: 'text',
        placeholder: 'Enter group description',
        rangeLength: 255,
        rules: {
            maxLegth: { value: 255, message: 'Group description must be less than 255 characters'},
            minLegth: { value: 3, message: 'Group description must be more than 3 characters'}
        },
    },
];