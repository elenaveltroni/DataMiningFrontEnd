import { Component, OnInit } from '@angular/core';
import {Acquisition} from '../entities/Acquisition';
import {Sentence} from '../entities/Sentence';
import {Document} from '../entities/Document';
import {Service} from '../services/Service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  acquisitions: Acquisition[] = [];
  sentences: Sentence[] = [];
  totalPositive = 0;
  totalNegative = 0;
  totalNeutral = 0;

  constructor(public service: Service) { }

  async ngOnInit() {
    await this.getTextList();
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
                for(let k = 0; k < data.length; k++){
                  this.sentences.push(data[k]);
                  if(data[k].class == '1') this.totalPositive++;
                  if(data[k].class == '0') this.totalNeutral++;
                  if(data[k].class == '-1') this.totalNegative++;
                }
                console.log(this.sentences);
              }
            });
          }
        }
      }
    });
  }
}
