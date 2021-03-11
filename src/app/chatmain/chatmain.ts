import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class chatmain{

    constructor(private db:AngularFirestore){}

    add(tmpdoc: any){
        return this.db.collection('chatroom').add(tmpdoc);
    }

    check(){
        return this.db.collection('chatroom').snapshotChanges();
    }
}
