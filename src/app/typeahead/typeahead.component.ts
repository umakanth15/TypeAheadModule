import { Component } from '@angular/core';
import * as autocompledata from '../data/autocomplete.json'
import { FormControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ModalService } from '../modal.service';

interface autoCompleteData{
  words:string[];
}
@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent {
  searchControl = new FormControl();
  dataList : autoCompleteData = autocompledata;
  filteredOptions = new  Observable<string[]>;
  selectedVal : string = ''

constructor(public modalService:ModalService){
  this.filteredOptions = this.searchControl.valueChanges.pipe(      
    map(value =>
       this._filter(value)
      )
  );
}

private _filter(value:string):string[]{
  this.selectedVal = value.toLowerCase();
if(this.selectedVal.length >=2){
  return this.dataList.words.filter(option => option.toLowerCase().includes(this.selectedVal));
}
return [];
}

openModal(){
  this.modalService.openModal();
}

}
