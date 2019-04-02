import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  // private icons = [
  //   'calendar',
  //   'calendar',
  //   'beer',
  //   'football',
  //   'basketball',
  //   'paper-plane',
  //   'american-football',
  //   'boat',
  //   'bluetooth',
  //   'build'
  // ];
  private mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 0; i < 12; i++) {
      this.items.push({
        title: this.mois[i],
        note: 'This is item #' + i,
        icon: "calendar"
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
