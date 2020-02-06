import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Service} from '../../services/Service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() username: string;
  @Input() since: string;
  @Input() until: string;

  @Output() view_twitter? = new EventEmitter<boolean>();

  tweets_obj = {
    tweets: []
  };
  tweets_list = [];

  constructor(private router: Router, private route: ActivatedRoute, private service: Service) {

  }

  ngOnInit() {
    console.log(this.until);
    this.service.getTwitter(this.username, this.since, this.until).then((res:any) => {
      if(res){
        this.tweets_obj = res;
        console.log(this.tweets_obj.tweets);
        this.tweets_list = this.tweets_obj.tweets;
      }
    })
  }

  back(){
    console.log('back');
    this.view_twitter.emit(false);
  }
}
