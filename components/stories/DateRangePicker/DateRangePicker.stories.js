import DateRangePicker from './DateRangePicker.vue';
export default {
    title: 'Components/DateRangePicker',
    component: DateRangePicker,
    tags: ['autodocs'],
    argTypes: {
        maxDate: { 
          control: 'date',  
          description: 'La fecha máxima que se puede seleccionar',
          defaultValue: new Date() 
        },
        startDate: { 
          control: 'date',
          description: 'La fecha inicial para el rango de fechas',
          defaultValue: new Date() 
        },
        endDate: { 
          control: 'date',
          description: 'La fecha final para el rango de fechas',
          defaultValue: new Date() 
        },
        showDropdowns: { 
          control: 'boolean',
          description: 'Mostrar o no los selectores desplegables',
          defaultValue: true 
        },
        opens: { 
          control: 'text',
          description: 'Define la dirección de apertura del selector de fecha',
          defaultValue: 'right' 
        },
        appendToBody: { 
          control: 'boolean',
          description: 'Define si el selector de fecha se debe agregar al body',
          defaultValue: false 
        },
        ranges: { 
          control: 'object',
          description: 'Rangos predefinidos para la selección de fechas',
          defaultValue: {} 
        },
        dateRange: { 
          control: 'object',
          description: 'Rango de fechas seleccionado',
          defaultValue: {startDate: new Date(), endDate: new Date()} 
        },
        localedata: { 
          control: 'object',
          description: 'Configuración local para el formato de fechas y textos debe ir con - ASI => locale-data',
          defaultValue: {
            format: 'dd/mm/yyyy',
            applyLabel: 'Aplicar',
            cancelLabel: 'Cancelar',
            customRangeLabel: 'Rango personalizado',
            daysOfWeek: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
            monthNames: [
              'Ene',
              'Feb',
              'Mar',
              'Abr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dic',
            ],
            firstDay: 1,
          }
        },
        von: { description: 'Metodo que se comportara como Ouput para cuando se seleccionan las fechas => v-on:pickDateRange="nombre de tu funcion"', action: 'onPickDateRange' },
      },
      
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { DateRangePicker },
    setup() {
        return { args };
      },
      decorators: [() => ({ template: '<dateRangePicker v-bind="$props"   > </dateRangePicker>' })],

    template: '<dateRangePicker v-bind="$props"   > </dateRangePicker>',
});

export const Calendar = Template.bind({});
let today = new Date();
let yesterday = new Date();
today.setHours(0, 0, 0, 0);
yesterday.setDate(today.getDate() - 1);
yesterday.setHours(0, 0, 0, 0);
Calendar.args = {
    maxDate: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    showDropdowns: true,
    opens: 'right',
    appendToBody: true,
    dateRange: { startDate: new Date(), endDate: new Date() },
    localedata: {
        format: 'dd/mm/yyyy',
        applyLabel: 'Aplicar rango',
        cancelLabel: 'Cancelar',
        customRangeLabel: 'Rango personalizado',
        daysOfWeek: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        monthNames: [
            'Ene',
            'Feb',
            'Mar',
            'Abr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dic',
        ],
        firstDay: 1,
    },
    ranges: {
        hoy: [today, today],
        ayer: [yesterday, yesterday],
        'este mes': [
            new Date(today.getFullYear(), today.getMonth()),
            today,
        ],
        'este año': [
            new Date(today.getFullYear(), 0, 1),
            new Date(today.getFullYear(), 11, 31),
        ],
        'el mes pasado': [
            new Date(today.getFullYear(), today.getMonth() - 1, 1),
            new Date(today.getFullYear(), today.getMonth(), 0),
        ],
    },
    von: 'v-on:pickDateRange="pickDateRange"'
};
