import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Service} from '../../services/Service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() array? = [];
  @Input() username?: string;
  @Input() since?: string;
  @Input() until?: string;
  @Input() model?: string;

  @Output() view_result? = new EventEmitter<boolean>();

  tweets_obj = {
    tweets: []
  };
  list = [];
  twitter = false;
  text = false;

  constructor(private router: Router, private route: ActivatedRoute, private service: Service) {

  }

  ngOnInit() {
    if(this.username != undefined) {
      this.twitter = true;
      this.service.getTwitter(this.username, this.since, this.until).then((res: any) => {
        if (res) {
          this.tweets_obj = res;
          console.log(this.tweets_obj.tweets);
          this.list = this.tweets_obj.tweets;
        }
      })
    }
    else{
      this.text = true;
      this.service.predict(this.model, this.array).then((res: any) => {
        if (res) {
          this.list = res;
        }
      })
    }
    console.log(this.list);
  }

  back(){
    console.log('back');
    this.view_result.emit(false);
  }
}
