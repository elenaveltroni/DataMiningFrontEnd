import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Service} from '../../services/Service';

@Component({
  selector: 'app-twitter-result',
  templateUrl: './twitter-result.component.html',
  styleUrls: ['./twitter-result.component.css']
})
export class TwitterResultComponent implements OnInit {

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

  addTraining(){
    console.log("add");
  }
}
