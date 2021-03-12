import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { chatedit } from './chatedit';

@Component({
  selector: 'app-chatedit',
  templateUrl: './chatedit.page.html',
  styleUrls: ['./chatedit.page.scss'],
})
export class ChateditPage implements OnInit {
  list:any;

  ids:String;
  pass:String;
  img:String;
  user:String;

  getids:String;
  getpass:String;
  getimg:String;
  getuser:String;

  setids:String;
  setpass:String;
  setimg:String;
  setuser:String;

  constructor(public navCtrl: NavController,
    public rounter : Router,
    public alertCtrl: AlertController,
    public actroute: ActivatedRoute,
    private chatedit: chatedit
   ) { }

   ngOnInit() {
    const dataRev = this.actroute.snapshot.paramMap.get('obj2');
    let getobj = JSON.parse(dataRev);
    this.getuser = getobj['user'];
    this.getids = getobj['id'];
    this.getpass = getobj['pass'];
    this.getimg = getobj['img'];

    this.chatedit.load().subscribe(data => {
    this.list = data.map(e => {
    return {
      id: e.payload.doc.id,
      isEdit: false,
      ids: e.payload.doc.data()['id'.toString()],
      pass: e.payload.doc.data()['pass'.toString()],
      user: e.payload.doc.data()['user'.toString()],
      img: e.payload.doc.data()['img'.toString()]

  };
 });
});

}


  back(){
    this.navCtrl.pop();
  }

  update(){


    if(this.setuser != ''){
      this.setuser == this.getuser
    }else{
      this.setuser == this.setuser
    }

    if(this.setimg != ''){
      this.setimg == this.getimg
    }else{
      this.setimg == this.setimg
    }
    for (let i=0; i< this.list.length; i++){

      if(this.list[i].user == this.getuser  &&this.list[i].img == this.getimg){


let update = {}

    update['user'] = this.setuser,
    update['img'] = this.setimg,

    this.chatedit.update(this.list[i].id, update);


    this.rounter.navigate(['chatlogin']);





  }


}


  }
}
