import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mois',
  templateUrl: './mois.page.html',
  styleUrls: ['./mois.page.scss'],
})
export class MoisPage implements OnInit {

  item : {};

  constructor(private activeRoute: ActivatedRoute)
{
    this.item = +this.activeRoute.snapshot.paramMap.get('mois');
    console.log(this.item);
}

  ngOnInit() {
    
  }

}
