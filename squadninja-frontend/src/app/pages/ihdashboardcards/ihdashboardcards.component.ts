import { Component, OnInit } from '@angular/core';
import {$} from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { FormControl } from '@angular/forms';
import { IhdashboardserService } from 'src/app/services/ihdashboardser/ihdashboardser.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ihdashboardcards',
  templateUrl: './ihdashboardcards.component.html',
  styleUrls: ['./ihdashboardcards.component.scss']
})
export class IhdashboardcardsComponent implements OnInit {

  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  closeResult: string;

  tabs = ['Devloper', 'Tester', 'Designer'];
  selected = new FormControl(0);
  

  cards = ['Idea1', 'Idea2'];
  sel = new FormControl(0);

  public ideas = [];

  private _ideas : IhdashboardserService;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    //  this._ideas.getServiceProviders()
    //  .subscribe(data => this.ideas = data);
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
        this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
        this.modalService.open(content,{ centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return  `with: ${reason}`;
  }
}
  addTab() {
    this.tabs.push('Role ');

    this.selected.setValue(this.tabs.length - 1);
    }
  

  addCard() {
    this.cards.push('{{ideas.name}}');
    this.sel.setValue(this.cards.length - 1);
  
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  removeCard(cardindex: number) {
    this.ideas.splice(cardindex, 1);
  }

}
 