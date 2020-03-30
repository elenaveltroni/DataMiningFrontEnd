import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Service} from '../../services/Service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() document_id: string;
  @Input() array? = [];
  @Input() username?: string;
  @Input() since?: string;
  @Input() until?: string;
  @Input() model?: string;

  @Output() view_result? = new EventEmitter<boolean>();

  tweets_obj = {
    tweets: []
  };
  list_result = [];
  list_twitter = [];
  twitter = false;
  text = false;

  result: boolean = false;
  knn = {};
  logistic = {};
  svm = {};
  positive: boolean = false;
  negative: boolean = false;
  neutral: boolean = false;
  totalP: number = 0;
  totalNeg: number = 0;
  totalN: number = 0;


  constructor(private router: Router, private route: ActivatedRoute, private service: Service) {

  }

  ngOnInit() {
    if(this.username != undefined) {
      this.twitter = true;
      this.service.getTwitter(this.username, this.since, this.until).then((res: any) => {
        if (res) {
          this.tweets_obj = res;
          console.log(this.tweets_obj.tweets);
          this.list_result = this.tweets_obj.tweets;
          this.service.predict(this.model, this.list_result).then((res: any) => {
            if (res) {
              this.list_result = res;
              this.maxSentiment();
              console.log(this.list_result);
            }
          })
        }
      })
    }
    else{
      this.text = true;
      this.service.predict(this.model, this.array).then((res: any) => {
        if (res) {
          this.list_result = res;
          this.maxSentiment();
          console.log(this.list_result);
        }
      })
    }
  }

  back(){
    if(this.result)
      this.result = false;
    else{
      this.view_result.emit(false);
    }
  }

  addTraining(){
    if(this.text) {
      this.service.insertSentence('analyst', this.array, this.document_id).then((res: any) => {
        if (res) {
          console.log(res);
          this.result = true;
          this.service.train().then((data: any) => {
            if (data) {
              this.knn = data.knn;
              this.svm = data.svm;
              this.logistic = data.logistic;
            }
          });
        }
      });
    }
    else{
      this.service.insertSentence('twitter', this.array, this.document_id).then((res: any) => {
        if (res) {
          console.log(res);
          this.result = true;
          this.service.train().then((data: any) => {
            if (data) {
              this.knn = data.knn;
              this.svm = data.svm;
              this.logistic = data.logistic;
            }
          });
        }
      });
    }
  }

  maxSentiment(){
    for(let i = 0; i < this.list_result.length; i++){
      console.log(this.list_result[i].prediction);
      if(this.list_result[i].prediction == 1)
        this.totalP++;
      else if(this.list_result[i].prediction == 0)
        this.totalN++;
      else
        this.totalNeg++
    }
    if(this.totalP >= this.totalN && this.totalP >= this.totalNeg)
      this.positive = true;
    else if(this.totalN >= this.totalP && this.totalN >= this.totalNeg)
      this.neutral = true;
    else
      this.negative = true;
  }

}
