import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * This component serves as an abstraction for a mat autocomplete
 * It will only return a value when an option is selected, it will NOT return anything if none of the values
 * have been selected
 *
 * @input matLabel: string, value for the label shown in the mat-input
 * @input placeholder: string, value for the placeholder shown in the mat-input
 * @input appearance: string, value for the appearance of the mat-form-field, only default values are supported
 * @input defaultValue: string, default value for the autocomplete
 * (see https://material.angular.io/components/form-field/api for more details)
 * @input options: string[], values used to display options by the mat-autocomplete
 *
 * @output selectedValue: EventEmitter<string>(), emitted value when an option is selected
 * */
@Component({
  selector: 'app-autocomplete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutocompleteComponent implements OnInit, OnChanges {

  @Input() matLabel: string;
  @Input() placeholder: string;
  @Input() appearance: string;
  @Input() defaultValue: string;
  @Input() options: string[];
  @Input() edit: boolean;
  @Input() width: string;
  @Input() icon: {icon: string, matToolTip: string, style: string};

  @Output() selectedValue = new EventEmitter<string>();
  @Output() searchValue = new EventEmitter<string>();
  @Output() iconClicked = new EventEmitter<string>();

  filteredOptions: Observable<string[]>;
  form: FormGroup;
  isValid: boolean = true;
  filterField = 'filter-field';
  value: string;
  started: boolean;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.started = true;
    this._initForm();
    this._setFilter();
  }

  private _initForm() {
    this.form = this._fb.group({input: {value: this.defaultValue ? this.defaultValue : '', disabled: this.edit}});
  }

  private _setFilter() {
    this.filteredOptions = this.form.controls.input.valueChanges.pipe(
      startWith(''),
      map(value => this
        .options
        .filter(option => option.toLowerCase().includes(value.toString().toLowerCase())))
    );
  }

  isEditDialog() {
    if (this.edit) {
      this.filterField = '';
    }
  }

  setValue(value: string) {
    this.isValid = true;
    this.form.controls.input.setValue(value);
    this.selectedValue.emit(value);
  }

  emptySelection(event: any) {
    if (event.key === "Backspace") {
      this.selectedValue.emit('');
      this.searchValue.emit(event.target.value);
    } else {
      const filtOptions = this.options.filter(opt => opt.toLowerCase().includes(event.target.value));
      if (filtOptions.length < 10) {
        this.searchValue.emit(event.target.value);
      }
      // this.filteredOptions.subscribe(options => {
      //   if(options.length === 0){
      //     this.searchValue.emit(event.target.value);
      //   }
      // })
    }
  }

  clear() {
    this.form.controls['input'].setValue('');
    this.selectedValue.emit('');
  }

  ngOnChanges(data: SimpleChanges) {
    if (this.started) {
      this._setFilter();
      this.isEditDialog();
    }
  }

}
