import { Component, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'bot-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
@Input() selectedItem: string='';
constructor(public modalService:ModalService){

}
  preventClosing(event:Event){
    event.stopPropagation();
  }

  closeModal(){
      this.modalService.closeModal();
  }
}
