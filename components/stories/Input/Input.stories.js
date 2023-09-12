import RegInput from './Input.vue';


export default {
    title: 'Components/Input',
    component: RegInput,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Label for the input field',
        },
        type: {
            control: {
                type: 'radio',
                options: ['text', 'email', 'number', 'dni'], // Agrega aquí los tipos de input que necesites
            },
            description: 'Type of input field',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the input field',
        },
        language: {
            control: 'radio',
            description: 'Disable the Language field',
        },
    },
};


export const TextInput = {
    args: {
        label: 'Text Input Label',
        type: 'text',
        mode: 'default',
        disabled: false,
    }
};

export const EmailInput = {
    args: {
        label: 'Email Input Label',
        type: 'email',
        mode: 'default',
        disabled: false,
    }
};

export const NumberInput = {
    args: {
        label: 'Number Input Label',
        type: 'Number',
        mode: 'default',
        disabled: false,
    }
};

export const DNIInput = {
    args: {
        label: 'DNI Input Label',
        type: 'dni',
        mode: 'default',
        disabled: false,
    }
};

