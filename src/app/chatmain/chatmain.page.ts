import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { chatmain } from './chatmain';
@Component({
  selector: 'app-chatmain',
  templateUrl: './chatmain.page.html',
  styleUrls: ['./chatmain.page.scss'],
})
export class ChatmainPage implements OnInit {
getuser:String;

roomname:String;
roomkey:String;

getroomname:String;
getroomkey:String;

enterroomname:String;
enterroomkey:String;

list:any;

  constructor(public navCtrl: NavController,
    public rounter : Router,
    public alertCtrl: AlertController,
    public actroute: ActivatedRoute,
    private chatmain: chatmain
   ) { }


  ngOnInit() {
    const dataRev = this.actroute.snapshot.paramMap.get('obj');
    let getobj = JSON.parse(dataRev);
    this.getuser = getobj['name'];



    this.chatmain.check().subscribe(data => {
      this.list = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        roomname: e.payload.doc.data()['roomname'.toString()],
        roomkey: e.payload.doc.data()['roomkey'.toString()],

    };
   });
  });
  }

back(){
  this.rounter.navigate(['chatlogin'])
}

roome(){
  for (let i=0; i< this.list.length; i++){
    if(this.list[i].roomname == this.enterroomname ){
      if(this.list[i].roomkey == this.enterroomkey )
        this.rounter.navigate(['chatpage'])
    }//aleart show
  }

}
roomc(){
  let tmpobj =  //db : inputform
    {roomname: this.getroomname,
      roomkey: this.getroomkey,

    };
    this.chatmain.add(tmpobj);
    this.rounter.navigate(['chatpage'])
}//handler


}
