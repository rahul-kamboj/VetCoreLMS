import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private itemCollection = collection(this.firestore, 'samples');
  public reprotsData: any[] = [];
  public subject = new Subject<any[]>();
  private reportsSource = new BehaviorSubject(this.reprotsData);
  private fetching: boolean;
  currentMessage = this.reportsSource.asObservable();

  constructor(private firestore: Firestore) {
  }

  getAllReports() {
    return this.currentMessage;
  }

  async refreshReports() {
    await getDocs(this.itemCollection)
      .then(result => this.reportsSource.next(result.docs.map(x => ({ reportId: x.id, value: x.data() }))));
      console.log('called');
    // return this.reportsSource.next(docsSnap);
  }

  // async getAll() {
  //   // return collectionData(this.itemCollection, { idField: "reportId" });
  //   const docsSnap = await getDocs(this.itemCollection);
  //   return docsSnap;
  //   // this.itemCollection.get()
  // }

  addSample(sample: any, docId: string): string {
    if (docId == "0") {
      addDoc(this.itemCollection, sample).then(doc => {
        docId = doc.id;
      });
    }
    else {
      const docRef = doc(this.firestore, 'samples/' + docId);
      updateDoc(docRef, sample);
    }
    return docId;
  }

  deleteSample(sampleId: any): Boolean {
    const docRef = doc(this.firestore, 'samples/' + sampleId);
    deleteDoc(docRef).then(() => { return true; }).catch(err => { console.log(err); return false; });
    return true;
  }
}
