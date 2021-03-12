import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class chatedit{

    constructor(private db:AngularFirestore){}

    add(tmpdoc: any){
        return this.db.collection('acc').add(tmpdoc);
    }

    load(){
        return this.db.collection('acc').snapshotChanges();
    }

    update(docId:any,tmpdoc:any){
       return this.db.doc('acc/'+docId).update(tmpdoc);
    }
}
