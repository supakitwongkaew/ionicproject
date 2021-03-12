import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { chatpage } from './chatpage';
@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.page.html',
  styleUrls: ['./chatpage.page.scss'],
})
export class ChatpagePage implements OnInit {
  getroomname:String;
  getuser:String;
  getid:String;
showimg:String;

  getroom:String;

  textinput:String;

  list: any;

  text:String;
  from:String;
  img:String;


  newMsg = '';

  date:String=" ";
  content: any;
n:number=1;
  num:String;

  constructor(public navCtrl: NavController,
    public rounter : Router,
    public alertCtrl: AlertController,
    public actroute: ActivatedRoute,
    private chatpage: chatpage,
    private db:AngularFirestore

   ) { }

  ngOnInit() {
    const dataRev = this.actroute.snapshot.paramMap.get('obj');
    let getobj = JSON.parse(dataRev);

    this.getuser = getobj['user'];
    this.getid = getobj['id'];
    this.getroomname = getobj['roomname'];
    this.showimg = getobj['img'];

    console.log(getobj)


    this.chatpage.messageshow().subscribe(data => {
      this.list = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        from: e.payload.doc.data()['from'.toString()],
        text: e.payload.doc.data()['text'.toString()],
        room: e.payload.doc.data()['room'.toString()],
        img: e.payload.doc.data()['img'.toString()],
        date: e.payload.doc.data()['date'.toString()],

    };
   });
    //console.log(this.list);
  });

  }



  add(){

    let tmpobj =  //db : inputform
  {
  from: this.getuser,
  text: this.textinput,
  img: this.showimg,
  room: this.getroomname,
  date:this.date

  };

  for(let i = 0; i < this.list.length; i++) {

  }

  this.db.collection('massage').doc((this.list.length+1).toString()).set(tmpobj);
  this.newMsg = '';
  this.content.scrollToBottom();

  this.datesend()
  }


datesend(){
  this.date= new Date().toISOString();
  console.log(this.date)
}
back(){
  this.navCtrl.pop();
}

}
