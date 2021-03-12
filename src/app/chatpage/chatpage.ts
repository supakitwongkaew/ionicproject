import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class chatpage{

    constructor(private db:AngularFirestore){}

    add(tmpdoc: any,num:any){
        return this.db.collection('massage').doc().set(tmpdoc);
    }

    check(){
        return this.db.collection('chatroom').snapshotChanges();
    }

    messageshow(){
        return this.db.collection('massage').snapshotChanges();
    }
}
