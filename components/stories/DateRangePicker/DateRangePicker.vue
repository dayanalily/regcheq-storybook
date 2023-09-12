<template>
  <date-range-picker
    v-if="dateRange"
    ref="picker"
    :ranges="ranges"
    :locale-data="{
      format: 'dd/mm/yyyy',
      applyLabel: 'Aplicar cambios',
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
    }"
    :maxDate="maxDate"
    :startDate="dateRange.startDate"
    :endDate="dateRange.endDate"
    :showDropdowns="true"
    v-model="dateRange"
    @update="pickDateRange"
    :opens="opens"
    :append-to-body="appendToBody"
  >
    <template v-slot:input="picker">
      <span
        class="date-null"
        v-if="dateRange.startDate == null && dateRange.endDate == null"
      >
        Filtrar por fecha
        <font-awesome-icon :icon="['fas', 'calendar-days']" />
      </span>
      <span v-else>
       
        {{
              new Date(dateRange.startDate).toLocaleDateString('es-ES', {
        day: '2-digit',  // 'DD'
        month: '2-digit', // 'MM'
        year: 'numeric'  // 'YYYY'
     })
        }}
       
     - {{
          new Date(dateRange.endDate).toLocaleDateString('es-ES', {
        day: '2-digit',  // 'DD'
        month: '2-digit', // 'MM'
        year: 'numeric'  // 'YYYY'
        })
     }}
        
     
      
      </span>
    </template>
  </date-range-picker>
</template>
<script>
import DateRangePicker from "vue2-daterange-picker";
import './daterangepicker.css';
export default {
  components: {
    DateRangePicker,
  },
  props: {
    maxDate: Date,
    startDate: Date,
    endDate: Date,
    showDropdowns: Boolean,
    dateRange: Object,
    opens: String,
    appendToBody: Boolean,
  },
  data() {
    return {
      today: new Date(),
      yesterday: new Date(),
      ranges: {},
    };
  },
  async created() {
    this.today = new Date();
    this.today.setHours(0, 0, 0, 0);
    this.yesterday.setDate(this.today.getDate() - 1);
    this.yesterday.setHours(0, 0, 0, 0);
    this.ranges = {
        hoy: [this.today, this.today],
        ayer: [this.yesterday, this.yesterday],
        'este mes': [
            new Date(this.today.getFullYear(), this.today.getMonth()),
            this.today,
        ],
        'este año': [
            new Date(this.today.getFullYear(), 0, 1),
            new Date(this.today.getFullYear(), 11, 31),
        ],
        'el mes pasado': [
            new Date(this.today.getFullYear(), this.today.getMonth() - 1, 1),
            new Date(this.today.getFullYear(), this.today.getMonth(), 0),
        ],
    };
  },
  methods: {
    pickDateRange() {
        console.log('this.dateRange', this.dateRange);
    },
   
  },
};
</script>
