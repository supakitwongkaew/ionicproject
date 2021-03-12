import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { homets } from './home';
@Component({
  selector: 'app-chatlogin',
  templateUrl: './chatlogin.page.html',
  styleUrls: ['./chatlogin.page.scss'],
})
export class ChatloginPage implements OnInit {
ids:String;
pass:String;
user:String;
img:String;

getuser:String;
getid:String;
getpass:String;
getimg:String;

  ruser:String;
  rid:String;
  rpass:String;

  list:any;
  lid:String;

  obj:any;


  check:Boolean;

  constructor(public navCtrl: NavController,
    public rounter : Router,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private homets: homets
   ) { }

  ngOnInit() {
    this.homets.check().subscribe(data => {
      this.list = data.map(e => {
      return {
        id: e.payload.doc.id,
        isEdit: false,
        ids: e.payload.doc.data()['id'.toString()],
        pass: e.payload.doc.data()['pass'.toString()],
        user: e.payload.doc.data()['user'.toString()],
        img: e.payload.doc.data()['img'.toString()],
    };
   });
  });
  }

//sign in
  async signin() {
    let alert = this.alertCtrl.create({
      header: 'Sign In',
      inputs: [
        {
          name: 'lid',
          placeholder: 'ID :',
        },
        {
          name: 'lpass',
          placeholder: 'Password :',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Sign In',
          handler: data => {
            for (let i=0; i< this.list.length; i++){
              if(this.list[i].ids == data.lid && this.list[i].pass == data.lpass ){
                    this.getuser =this.list[i].user
                    this.getid =this.list[i].ids
                    this.getpass =this.list[i].pass
                    this.getimg =this.list[i].img

                    this.obj = {
                    user: this.getuser,
                    id:this.getid,
                    pass:this.getpass,
                    img:this.getimg
                    };
                    console.log(this.getuser)
                    const dataString =JSON.stringify(this.obj)
                    this.rounter.navigate(['chatmain',dataString])
                }
            }
      }
    }
      ]
    });
    (await alert).present();
  }

  async openToast() {
    const toast = await this.toastCtrl.create({
    message: "ID Password Can not use",
    duration: 5000,
    });
    toast.present();
    }

  async openToast2() {
    const toast = await this.toastCtrl.create({
    message: "Done",
    duration: 5000,
    });
    toast.present();
    }
// signup

  async signup() {
    let alert = this.alertCtrl.create({
      header: 'Sign Up',
      inputs: [
        {
          name: 'ruser',
          placeholder: 'Username :'
        },
        {
          name: 'rid',
          placeholder: 'ID :'
        },
        {
          name: 'rpass',
          placeholder: 'Password :'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Sign Up',
          handler: data => {
            for (let i=0; i< this.list.length; i++){
              if(this.list[i].ids != data.rid){
                this.check=true
                break
              }
            }
            if(this.check==true){

             let tmpobj =  //db : inputform
          {id: data.rid,
          pass: data.rpass,
          user: data.ruser,
          img :"https://img.icons8.com/pastel-glyph/64/000000/person-male--v3.png"
          };
          this.homets.add(tmpobj);
          this.openToast2()
        }else{
          this.openToast()
        }


          }//handler
        }//update
      ]
    });
    (await alert).present();
  }

}



// test


