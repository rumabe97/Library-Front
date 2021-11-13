import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {debounceTime, tap} from 'rxjs/operators';
import {Auto} from '../dynamic';

/**
 * This component is intended to deal with unlimited sets
 * updating each time options input is reset
 */
@Component({
  selector: 'app-autoselect',
  templateUrl: './autoselect.component.html',
  styleUrls: ['./autoselect.component.scss']
})
export class AutoselectComponent extends Auto implements OnInit, OnChanges {

  @Input() config: any;

  @Output() search = new EventEmitter<string>();
  @Output() selectedValue = new EventEmitter();
  @Output() cleared = new EventEmitter();

  searching = false;
  form: FormControl = new FormControl('');

  constructor() {
    super();
  }

  ngOnInit() {
    this.form = this.config.form ? this.config.form : this.form;
    this.form.setValue(this.config.defaultValue);
    this.shownField = this.config.prop;
    this.form.valueChanges
        .pipe(debounceTime(300),
            tap(() => this.searching = true))
        .subscribe(value => this.search.emit(value));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searching = false;
  }

  clearAutoselect() {
    this.form.setValue('');
    this.cleared.emit(this.config.searchValue);
  }

  selectedItem(event: MatAutocompleteSelectedEvent) {
    this.form.setValue(event.option.value[this.shownField]);
    this.selectedValue.emit(event.option.value);
  }
}
