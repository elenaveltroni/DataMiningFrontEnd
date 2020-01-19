import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  textList = [];
  totalPositive = 0;
  totalNegative = 0;
  totalNeutral = 0;

  constructor() { }

  ngOnInit() {
    this.getTextList();
  }

  getTextList(){
    this.textList = [
      {
        "acquisition": "Acquisition 1",
        "documents": [
          {"title":"document 1.1",
            "operations": [
              {"phrase":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur erat nibh, non lobortis mi ultrices a. Quisque gravida ex nec turpis dapibus, in consequat turpis lobortis", "sentiment":1},
              {"phrase":"Duis porta ligula quis dolor auctor condimentum.", "sentiment":0},
              {"phrase":"Duis porta ligula quis dolor auctor condimentum.", "sentiment":-1},
            ]
          },
          {"title":"document 1.2",
            "operations": [
              {"phrase":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur erat nibh, non lobortis mi ultrices a. Quisque gravida ex nec turpis dapibus, in consequat turpis lobortis", "sentiment":1},
              {"phrase":"Duis porta ligula quis dolor auctor condimentum.", "sentiment":0},
              {"phrase":"Duis porta ligula quis dolor auctor condimentum.", "sentiment":-1},
            ]
          }
        ]
      },
      {
        "acquisition": "Acquisition 2",
        "documents": [
          {"title":"document 2.1",
            "operations": [
              {"phrase":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur erat nibh, non lobortis mi ultrices a. Quisque gravida ex nec turpis dapibus, in consequat turpis lobortis", "sentiment":1},
              {"phrase":"Duis porta ligula quis dolor auctor condimentum.", "sentiment":0},
              {"phrase":"Duis porta ligula quis dolor auctor condimentum.", "sentiment":-1},
            ]
          },
          {"title":"document 2.2",
            "operations": [
              {"phrase":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur erat nibh, non lobortis mi ultrices a. Quisque gravida ex nec turpis dapibus, in consequat turpis lobortis", "sentiment":1},
              {"phrase":"Duis porta ligula quis dolor auctor condimentum.", "sentiment":0},
              {"phrase":"Duis porta ligula quis dolor auctor condimentum.", "sentiment":-1},
            ]
          }
        ]
      }
    ];
  }
}
