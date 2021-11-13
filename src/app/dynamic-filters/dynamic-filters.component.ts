import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IAuto } from './dynamic';

@Component({
  selector: 'app-dynamic-filters',
  templateUrl: './dynamic-filters.component.html',
  styleUrls: ['./dynamic-filters.component.scss'],
})
export class DynamicFiltersComponent implements OnInit {

  @Input() filters: IAuto[];
  @Input() showFilters: boolean;
  @Output() query = new EventEmitter();
  @Output() search = new EventEmitter();

  form: FormGroup;

  constructor(private _fb: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit() {
    let controlsConfig = {};
    this.filters.forEach(filter => {
      if (filter.searchValue) {
        controlsConfig[filter.searchValue] = [filter.value];
      } else {
        controlsConfig[filter.prop] = [filter.value];
      }
    });


    this.form = this._fb.group(controlsConfig);
  }

  setAutocompleteValue(entry: { formFilter: string, value: any, type: string }) {

    this.form.controls[entry.formFilter].setValue(entry.value);
    this.emit();
  }

  setInputValue(entry: { formFilter: string, value: any, type: string }) {
    this.form.controls[entry.formFilter].setValue(entry.value.target.value);
    this.emit();
  }

  clearDate(entry: { formFilter: string, event: any }) {
    this.form.controls[entry.formFilter].setValue(null);
    this.emit();
  }

  filterDate(entry: { formFilter: string, event: any }) {
    this.form.controls[entry.formFilter].setValue(entry.event.value);
    this.emit();
  }

  hasValue(formFilter: string): boolean {
    return this.form.controls[formFilter].value;
  }

  selectedItem(entry: { searchValue: string, value: any, type: string }) {
    this.form.controls[entry.searchValue].setValue(entry.value.id);
    this.emit();
  }

  clear(entry: { formFilter: string }) {
    this.form.controls[entry.formFilter].setValue('');
    this.emit();
  }

  emit() {
    let query = {};
    let formKeys = Object.keys(this.form.value);

    formKeys.forEach(key => {
      if (this.form.value[key]) {
        query[key] = this.form.value[key];
      }
    });
    this.query.emit(query);
  }

  buildFilter(item) {
    return {
      options: item.options,
      prop: item.prop,
      retProp: item.retProp,
      class: item.class,
      appearance: item.appearance,
      label: item.label,
      placeholder: item.placeholder,
      searchValue: item.searchValue,
      defaultValue: item.defaultValue
    };
  }

  showAutocomplete(item) {
    return item.shown === true && item.type === 'autocomplete';
  }

  showAutoSelect(item) {
    return item.shown && item.type === 'autoselect';
  }

  showDate(item) {
    return item.shown === true && item.type === 'date';
  }

  showInput(item) {
    return item.shown === true && item.type === 'input';
  }
}

