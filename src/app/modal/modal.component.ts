import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  itemControl = new FormControl();

  itemValue: any;

  modalForm: FormGroup;

  @Output('addItem') newItem = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { 
  }

  ngOnInit() {
    this.modalForm = this.formBuilder.group({
      productName: '',
      productValue: ''
    });

    this.modalForm.valueChanges.subscribe(value => {
      this.itemValue = value;
    });
  }

  addItem() {
    this.newItem.emit(this.itemValue);
    this.clearValue();
    this.modalService.dismissAll();
  }

  clearValue() {
    this.itemControl.setValue('');
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' })
  }

}
