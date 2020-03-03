import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-training-result',
  templateUrl: './training-result.component.html',
  styleUrls: ['./training-result.component.css']
})
export class TrainingResultComponent implements OnInit {


  @Output() result? = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    this.addTraining()
  }

  back(){
    console.log('back');
    this.result.emit(false);
  }

  addTraining(){
    for(let i = 0; i < this.array_split.length; i++){
      this.senteces.push({
        'text': this.array_split[i],
        'class': document.getElementById("sentiment_"+i).value
      })
    }
    this.service.insertSentence('text', this.senteces, this.document_id).then((res: any) => {
      if(res) {
        console.log(res);
        this.service.train().then((data: any) => {
          if(data) {
            console.log(data);
          }
        });
      }
    });
  }
}
