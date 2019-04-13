import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionfirebaseService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemDoc: AngularFirestoreDocument<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('items');
    // this.items = this.itemsCollection.valueChanges();  //en caso de no querer el id

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    
  }

  getItems(){
    return this.items;
  }

  
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}
