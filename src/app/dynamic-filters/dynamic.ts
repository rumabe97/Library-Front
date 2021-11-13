import { EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { config, Observable } from "rxjs";


/**
 * Defaults
 */

/**
 * Interfaces
 */
export interface IField {
  label?: string;
  placeholder?: string;
  appearance?: string;
  class?: string;
  value?: string;
  options?: any[];
  validators?: any[];
  shown?: boolean;
  type: string;
  prop: string;
}

export interface IAuto extends IField {
  retProp: string;
  options: any[];
  searchValue?: string;
  service?: any;
  mapper?: any;
  form?: FormControl;
  defaultValue?:string;
}



export interface IAction {
  name: string;
  icon: string;
}

export interface ITableColumn {
  name: string;
  prop: string;
  shown: boolean;
  type?: string;
  cellClass?: string;
  route?: string;
  routeId?:string
}

export interface ITableConfig {
  class?: string;
  multiSelect?: boolean;
  actions?: IAction[];
  columns: ITableColumn[];
}

export interface IFormConfig {
  rows: number;
  columns: number;
  fields: IField[];
  actions: IAction[];
}

export interface IConfigItem {
  name: string;
  shown: boolean;
}

export interface ITableFiltersConfig {
  columns: IConfigItem[];
  filters: IConfigItem[];
}

/**
 * Classes
 */
export class Field {
  @Input() config: IField;
  @Output() value = new EventEmitter<string>();

  myControl: FormControl = new FormControl();

  constructor() {
    this.myControl.setValue(this.config?.value ?? '');
  }

  emit(value?: string) {
    this.myControl.setValue(value);
    this.value.emit(value);
  }

  clear() {
    this.myControl.reset("");
    this.value.emit("");
  }
}

export class Auto extends Field {
  @Input() options: any[] = [];
  filteredOptions: Observable<any[]>;
  shownField: string;
  retField: string;

  constructor() {
    super();
    const config = this.config as IAuto;

    this.shownField = config?.prop ?? '';
    this.retField = config?.retProp ?? '';
  }

  setValue() {
    const selected: string = this.options.find(
      (item) => item[this.shownField] === this.myControl.value
    )[this.retField];
    this.emit(selected);
  }
}


export abstract class DynForm {
  @Output() query = new EventEmitter<any>();
  @Output() selectQuery = new EventEmitter<string>();

  form: FormGroup;

  abstract _build(): any;

  search(value: string) {
    this.selectQuery.emit(value);
  }

  set(field: string, value: string) {
    this.form.controls[field].setValue(value);
    let query = {};
    let formKeys = Object.keys(this.form.value);
    formKeys.forEach(key => { if (this.form.value[key]) { query[key] = this.form.value[key] } })
    this.query.emit(query);
  }
}

/*
* Functions
*/
export function parseTableFiltersConfig(tableFiltersConfig: ITableFiltersConfig, tableConfig: ITableConfig, filtersConfig: IAuto[]) {
  if (!tableFiltersConfig) return;

  tableConfig.columns.sort((a, b) => {
    return tableFiltersConfig.columns.findIndex(configItem => configItem.name === a.name) 
      < tableFiltersConfig.columns.findIndex(configItem => configItem.name === b.name) ? -1 : 1
  });
  tableConfig.columns.map(col => {
    col.shown = tableFiltersConfig.columns.find(configItem => configItem.name === col.name)?.shown ?? false
  });

  filtersConfig.sort((a, b) => {
    return tableFiltersConfig.filters.findIndex(configItem => configItem.name === a.label)
      < tableFiltersConfig.filters.findIndex(configItem => configItem.name === b.label) ? -1 : 1
  });
  filtersConfig.map(filter => {
    filter.shown = tableFiltersConfig.filters.find(configItem => configItem.name === filter.label)?.shown ?? false
  });
}

export function createTableFiltersConfig(tableConfig: ITableConfig, filtersConfig: IAuto[]): ITableFiltersConfig {
  return {
    columns: tableConfig.columns.map(col => {return {name: col.name, shown: col.shown}}),
    filters: filtersConfig.map(auto => {return {name: auto.label, shown: auto.shown}})
  }
}