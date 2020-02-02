import { Component, OnInit } from '@angular/core';
import {Acquiror, Acquisition, Target} from '../entities/Acquisition';
import {Service} from '../services/Service';

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

  acquisition: Acquisition;
  acquiror: Acquiror;
  target: Target;

  constructor(private service: Service) { }

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

    this.acquiror.name = this.acquirorName;
    this.acquiror.state = this.acquirorState;
    this.acquiror.ticker = this.acquirorTicker;
    this.target.name = this.targetName;
    this.target.state = this.targetState;
    this.target.ticker = this.targetTicker;
    this.acquisition.annuncement_date = new Date(this.announcementDate);
    this.acquisition.status = this.status;

    this.service.insertAcquisition(this.acquisition).then((res: any) => {
      if (res.success) {
        console.log(res.data);
      } else {
        console.log("ERRORE");
      }
    }, err => {
      console.log(err.message);
    });

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
