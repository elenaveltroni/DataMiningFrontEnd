import { Component, OnInit } from '@angular/core';
import {Acquiror, Acquisition, Target} from '../entities/Acquisition';
import {Document} from '../entities/Document';
import {Service} from '../services/Service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  success_a = false;
  success_d = false;
  danger = false;

  acquisitions: Acquisition[] = [];
  //sentences: Sentence[] = [];
  totalPositive = 0;
  totalNegative = 0;
  totalNeutral = 0;

  //DOCUMENT VARIABLES
  newDocument: Document;
  docTitle: string;
  docLink: string;
  docSource: string;
  docDate: any;
  docType: string;
  selected_acquisition: string = undefined;
  acquisitionTitle: string;

  //ACQUISITION VARIABLES
  newAcquisition: Acquisition;
  acquiror: Acquiror;
  target: Target;
  status: string;
  acquirorName: string;
  acquirorTicker: string;
  acquirorState: string;
  targetName: string;
  targetTicker: string;
  targetState: string;
  announcementDate: string;
  signinDate: string = undefined;


  constructor(public service: Service) { }

  async ngOnInit() {
    await this.getTextList();
    this.newDocument = new Document();
    this.newAcquisition = new Acquisition();
    this.acquiror = new Acquiror();
    this.target = new Target();
  }

  getAcqTitle(id){
    this.service.getAcquisition(id).then((data: Acquisition) => {
      if (data) {
        this.acquisitionTitle = data.acquiror.name + ' - ' + data.target.name;
      }
    });
  }

  getTextList(){
    this.service.getAllAcquisition().then((res: any) => {
      if (res) {
        this.acquisitions = res;
        for (let j = 0; j < this.acquisitions.length; j++) {
          for (let i = 0; i < this.acquisitions[j].documents.length; i++) {
            let document: Document = this.acquisitions[j].documents[i];
            this.service.getSentenceByIdDocument(document._id.$oid).then((data: any) => {
              if (data) {
                //document.sentences = data;
                this.acquisitions[j].documents[i].sentences = data;
                for(let k = 0; k < data.length; k++){
                  if(data[k].class == '1') this.totalPositive++;
                  if(data[k].class == '0') this.totalNeutral++;
                  if(data[k].class == '-1') this.totalNegative++;
                }
                console.log(this.acquisitions[j]);
              }
            });
          }
        }
      }
    });
  }

  saveDocument(){
    this.newDocument.title = this.docTitle;
    this.newDocument.link = this.docLink;
    this.newDocument.source = this.docSource;
    this.newDocument.date = this.docDate;
    this.newDocument.type = this.docType;
    this.newDocument.acquisition_id = this.selected_acquisition;

    this.service.insertDocument(this.newDocument).then(data => {
      if (data) {
        this.success_d = true;
        this.acquisitions = [];
        this.getTextList();
      } else {
        this.danger = true;
      }
    }).catch( error => {
      this.danger = true;
    });
  }

  saveAcquisition(){
    this.acquiror.name = this.acquirorName;
    this.acquiror.state = this.acquirorState;
    this.acquiror.ticker = this.acquirorTicker;
    this.newAcquisition.acquiror = this.acquiror;
    this.target.name = this.targetName;
    this.target.state = this.targetState;
    this.target.ticker = this.targetTicker;
    this.newAcquisition.target = this.target;
    this.newAcquisition.annuncement_date = new Date(this.announcementDate);
    this.newAcquisition.status = this.status;
    this.newAcquisition.documents = [];
    if(this.signinDate == undefined)
      this.newAcquisition.signing_date = new Date(this.announcementDate);
    else
      this.newAcquisition.signing_date = new Date(this.signinDate);

    this.service.insertAcquisition(this.newAcquisition).then(data => {
      if (data) {
        this.success_a = true;
        this.acquisitions = [];
        this.getTextList();
      } else {
        this.danger = true;
      }
    }).catch( error => {
      this.danger = true;
    });
  }
}
