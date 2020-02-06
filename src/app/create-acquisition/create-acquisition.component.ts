import { Component, OnInit } from '@angular/core';
import {Acquiror, Acquisition, Target} from '../entities/Acquisition';
import {Service} from '../services/Service';
import {Document} from '../entities/Document';
import {Sentence} from '../entities/Sentence';

@Component({
  selector: 'app-create-acquisition',
  templateUrl: './create-acquisition.component.html',
  styleUrls: ['./create-acquisition.component.css']
})
export class CreateAcquisitionComponent implements OnInit {

  success = false;
  danger = false;

  status: string;
  acquirorName: string;
  acquirorTicker: string;
  acquirorState: string;
  targetName: string;
  targetTicker: string;
  targetState: string;
  announcementDate: string;
  signinDate: string = "";

  optionsStatus: Array<any>;

  acquisition: Acquisition;
  acquiror: Acquiror;
  target: Target;

  document: Document;
  acquisitions: Acquisition[] = [];
  selected_acquisition: string = undefined; //id dell'acquisition
  documentLink: string;
  documentSource: string;
  documentDate: any;
  documentType: string;

  selected_doc: string = undefined;
  documents: Document[] = [];
  sentence: Sentence;
  text: string;
  type: string;
  class: string;

  accordion1 = false;
  accordion2 = false;
  accordion3 = false;

  constructor(private service: Service) { }

  ngOnInit() {
    this.optionsStatus = [
      { value: 'IN_PROGRESS', label: 'In progress' },
      { value: 'COMPLETE', label: 'Complete' }
    ];
    this.acquisition = new Acquisition();
    this.acquiror = new Acquiror();
    this.target = new Target();
    this.document = new Document();
    this.sentence = new Sentence();
    this.getAcquisition();
  }

  saveAcquisition(){
    this.acquiror.name = this.acquirorName;
    this.acquiror.state = this.acquirorState;
    this.acquiror.ticker = this.acquirorTicker;
    this.acquisition.acquiror = this.acquiror;
    this.target.name = this.targetName;
    this.target.state = this.targetState;
    this.target.ticker = this.targetTicker;
    this.acquisition.target = this.target;
    this.acquisition.annuncement_date = new Date(this.announcementDate);
    this.acquisition.status = this.status;
    this.acquisition.documents = [];
    this.acquisition.signing_date = new Date(this.signinDate);

    this.service.insertAcquisition(this.acquisition).then(data => {
      if (data) {
          this.success = true;
          this.accordion1 = false;
      } else {
        this.danger = true;
      }
    }).catch( error => {
        this.danger = true;
    });
  }

  saveDocument(){
    this.document.link = this.documentLink;
    this.document.source = this.documentSource;
    this.document.date = this.documentDate;
    this.document.type = this.documentType;
    this.document.acquisition_id = this.selected_acquisition;

    this.service.insertDocument(this.document).then(data => {
      if (data) {
        this.success = true;
        this.accordion2 = false;
      } else {
        this.danger = true;
      }
    }).catch( error => {
      this.danger = true;
    });
  }

  saveSentence(){
    this.sentence.text = this.text;
    this.sentence.type = this.type;
    this.sentence.class = this.class;
    this.sentence.document_id = {'$oid': this.selected_doc};

    this.service.insertSentence(this.sentence).then(data => {
      if (data) {
        this.success = true;
        this.accordion3 = false;
      } else {
        this.danger = true;
      }
    }).catch( error => {
      this.danger = true;
    });
  }

  allFormAcquisitionFilled() {
    if (this.acquirorName == undefined || this.acquirorTicker == undefined || this.acquirorState == undefined ||
      this.targetName == undefined || this.targetTicker == undefined || this.targetState == undefined ||
      this.announcementDate == undefined || this.status == undefined) {
      return true;
    }
    return false;
  }

  allFormDocumentFilled() {
    if (this.documentLink == undefined || this.documentSource == undefined || this.documentDate == undefined ||
      this.documentType == undefined || this.selected_acquisition == undefined ) {
      return true;
    }
    return false;
  }

  allFormSentenceFilled() {
    if (this.text == undefined || this.type == undefined || this.class == undefined ||
      this.selected_doc == undefined) {
      return true;
    }
    return false;
  }

  getAcquisition(){
    this.service.getAllAcquisition().then((res: any) => {
      if(res) {
        this.acquisitions = res;
        for(let j = 0; j < this.acquisitions.length; j++){
          for(let i = 0; i < this.acquisitions[j].documents.length; i++){
            this.documents.push(this.acquisitions[j].documents[i]);
          }
        }
      }
    })
  }

}
