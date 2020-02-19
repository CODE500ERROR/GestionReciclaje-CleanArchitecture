import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-ok',
  templateUrl: './modal-ok.component.html',
  styleUrls: ['./modal-ok.component.css']
})
export class ModalOkComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data , public dialogRef: MatDialogRef<ModalOkComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
