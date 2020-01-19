import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-acquisition',
  templateUrl: './create-acquisition.component.html',
  styleUrls: ['./create-acquisition.component.css']
})
export class CreateAcquisitionComponent implements OnInit {

  status: string;
  acquirorName: string;
  acquirorTicker: string;
  acquirorState: string;
  targetName: string;
  targetTicker: string;
  targetState: string;
  announcementDate: string;

  optionsStatus: Array<any>;

  constructor() { }

  ngOnInit() {
    this.optionsStatus = [
      { value: 'IN_PROGRESS', label: 'In progress' },
      { value: 'COMPLETE', label: 'Complete' }
    ];
  }

  save(){
    console.log(this.acquirorName);
    console.log(this.acquirorTicker);
    console.log(this.acquirorState);
    console.log(this.targetName);
    console.log(this.targetTicker);
    console.log(this.targetState);
    console.log(this.announcementDate);
    console.log(this.status);
  }

  allFormFilled(){
    if(this.acquirorName == undefined || this.acquirorTicker == undefined || this.acquirorState == undefined ||
      this.targetName == undefined || this.targetTicker == undefined || this.targetState == undefined ||
      this.announcementDate == undefined || this.status == undefined){
      return true;
    }
    return false;
  }

}
