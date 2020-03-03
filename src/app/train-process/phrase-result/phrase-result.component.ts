import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Service} from '../../services/Service';

@Component({
  selector: 'app-phrase-result',
  templateUrl: './phrase-result.component.html',
  styleUrls: ['./phrase-result.component.css']
})
export class PhraseResultComponent implements OnInit {

  @Input() array_split? = [];
  @Input() document_id?: string;
  @Output() view_phrases? = new EventEmitter<boolean>();

  senteces = [];

  constructor(private router: Router, private route: ActivatedRoute, private service: Service) { }

  ngOnInit() {
  }

  back(){
    console.log('back');
    this.view_phrases.emit(false);
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
        this.service.train().then((res: any) => {
          if(res) {
            console.log(res);
          }
        });
      }
    });
  }
}
