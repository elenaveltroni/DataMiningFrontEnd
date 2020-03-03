import { Component, OnInit } from '@angular/core';
import {Service} from '../services/Service';
import {$} from 'protractor';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {

  threshold: number = 100;
  affinity: string = 'euclidean';
  linkage: string = 'single';
  view_image = false;
  image: string;
  sentences = [];
  img_url:string;
  loading: boolean = false;

  constructor(private service: Service) { }

  ngOnInit() {
  }

  visualize(){
    this.view_image = false
    this.img_url = '';
    this.loading = true;
    this.service.cluster(this.threshold, this.affinity, this.linkage).then((res: any) => {
      if (res) {
        console.log(res);
        this.view_image = true;
        this.img_url = "data:image/png;base64,"+ res.image;
        this.sentences = res.result;
        this.loading = false;
      }
    });
  }

  back(){
    this.view_image = false
    this.img_url = '';
  }

}
