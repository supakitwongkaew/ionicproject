import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { chatpage } from './chatpage';
@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.page.html',
  styleUrls: ['./chatpage.page.scss'],
})
export class ChatpagePage implements OnInit {
  form :any = [
    {id:1, name: "Bike",
    pic:"https://img.icons8.com/color/48/000000/bicycle.png",
    price:"20", isChecked: false
  },
  {id:2, name: "Motocycle",
    pic:"https://img.icons8.com/color/48/000000/motorcycle.png",
    price:"50", isChecked: false
  },
]
  constructor(public navCtrl: NavController,
    public rounter : Router,
    public alertCtrl: AlertController,
    public actroute: ActivatedRoute,
    private chatpage: chatpage
   ) { }

  ngOnInit() {
  }


back(){
  this.navCtrl.pop();
}
}
