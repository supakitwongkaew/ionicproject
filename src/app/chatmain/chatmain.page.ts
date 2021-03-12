import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { chatmain } from './chatmain';

//https://i.pinimg.com/originals/fe/a3/a3/fea3a3dd71cb2bc527da9ca1bb46dd44.jpg

@Component({
  selector: 'app-chatmain',
  templateUrl: './chatmain.page.html',
  styleUrls: ['./chatmain.page.scss'],
})
export class ChatmainPage implements OnInit {
getuser:String;
getid:String;
getpass:String;
getimg:String;

roomname:String;
roomkey:String;

getroomname:String;
getroomkey:String;

enterroomname:String;
enterroomkey:String;

sendroomname:String;

list:any;
obj:any;
obj2: any;

newMsg1 = '';
newMsg2 = '';
newMsg3 = '';
newMsg4 = '';
  constructor(public navCtrl: NavController,
    public rounter : Router,
    public alertCtrl: AlertController,
    public actroute: ActivatedRoute,
    private chatmain: chatmain
   ) { }


  ngOnInit() {
    const dataRev = this.actroute.snapshot.paramMap.get('obj');
    let getobj = JSON.parse(dataRev);
    this.getuser = getobj['user'];
    this.getid = getobj['id'];
    this.getpass = getobj['pass'];
    this.getimg = getobj['img'];
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
editprofile (){
  this.obj2 = {
    user: this.getuser,
    id:this.getid,
    pass: this.getpass,
    img:this.getimg

    };
    console.log(this.getuser)
    const dataString =JSON.stringify(this.obj2)
    this.rounter.navigate(['chatedit',dataString])

}
roome(){
  for (let i=0; i< this.list.length; i++){
    if(this.list[i].roomname == this.enterroomname ){
      if(this.list[i].roomkey == this.enterroomkey )
      this.obj = {
        id:this.getid,
      user: this.getuser,
      room:this.getroomname,
      img:this.getimg,

        roomname:   this.enterroomname,
      };
      const dataString =JSON.stringify(this.obj)
      this.rounter.navigate(['chatpage',dataString])
      this.newMsg1 = '';
      this.newMsg2 = '';
    }//aleart show
  }

}
roomc(){
  let tmpobj =  //db : inputform
    {roomname: this.getroomname,
      roomkey: this.getroomkey,
    };
    this.chatmain.add(tmpobj);
    this.obj = {
      id:this.getid,
      user: this.getuser,
      room:this.getroomname,
      img:this.getimg,
      roomname:   this.getroomname,

    };
    const dataString =JSON.stringify(this.obj)
    this.rounter.navigate(['chatpage',dataString])
    this.newMsg3 = '';
    this.newMsg4 = '';
}//handler


}
