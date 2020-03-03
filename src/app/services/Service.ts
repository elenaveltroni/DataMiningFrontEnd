import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Acquisition} from '../entities/Acquisition';
import {Document} from '../entities/Document';
import {Sentence} from '../entities/Sentence';
import {Keyword} from '../entities/Keyword';


@Injectable({
  providedIn: 'root'
})

export class Service {
  serverURL = "http://6d0d9b62.ngrok.io"; //"http://78.46.192.21:8080";

  constructor(private http: HttpClient) {
  }

  /*
  ACQUISITION
   */
  getAllAcquisition(){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.get(this.serverURL+"/acquisition",{
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  getAcquisition(id: string){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    let params = id;

    return new Promise(resolve => {
      this.http.get(this.serverURL+"/acquisition"+params,{
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  insertAcquisition(acquisition: Acquisition){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    let body = JSON.stringify(acquisition);

    return new Promise(resolve => {
      this.http.post(this.serverURL+"/acquisition", body,{
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  /*
  DOCUMENT
   */
  insertDocument(document: Document){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    let body = JSON.stringify(document);

    return new Promise(resolve => {
      this.http.post(this.serverURL+"/document", body,{
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  /*
  SENTENCE
   */
  insertSentence(type:string, sentences: any, id?:string){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let body;
    if(id != undefined)
      body = JSON.stringify({
        "document_id": id,
        "type": type,
        "sentences": sentences
      });
    else{
      body = JSON.stringify({
        "type": type,
        "sentences": sentences
      });
    }

    return new Promise(resolve => {
      this.http.post(this.serverURL+"/sentence",body, {
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  getSentenceById(idSentence: string){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    let params = idSentence;

    return new Promise(resolve => {
      this.http.get(this.serverURL+"/sentence"+ params,{
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  getSentenceByIdDocument(idDocument: string){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    let params = '?document_id='+idDocument;

    return new Promise(resolve => {
      this.http.get(this.serverURL+"/sentence"+ params,{
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  getAllSentence(){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.get(this.serverURL+"/sentence",{
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }


  /*
  KEYWORD
   */
  insertKeyword(keywordList: Keyword[] = []){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    let body = JSON.stringify(keywordList);

    return new Promise(resolve => {
      this.http.post(this.serverURL+"/keyword",body, {
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  getKeywordByType(type: string){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    let params = "?type=" + type;

    return new Promise(resolve => {
      this.http.get(this.serverURL+"/keyword"+params,{
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  getAllKeyword(){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.get(this.serverURL+"/keyword",{
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  /*
  TWITTER
   */
  getTwitter(username: string, start: string, end: string){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    let params = username+'?since='+start+'&until='+end;

    return new Promise(resolve => {
      this.http.get(this.serverURL+"/tweets/"+params,{
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  /*
  PREDICT
   */
  predict(model: string, sentences: any){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let b = {
      "model": model,
      "sentences": sentences
    };
    let body = JSON.stringify(b);

    return new Promise(resolve => {
      this.http.post(this.serverURL+"/predict",body, {
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  /*
  TRAIN
   */
  train(){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return new Promise(resolve => {
      this.http.post(this.serverURL+"/train", {
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

  /*
  CLUSTER
   */
  cluster(threshold: number, affinity: string, linkage: string){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    let b = {
      "threshold": threshold,
      "affinity": affinity,
      "linkage": linkage
    };
    let body = JSON.stringify(b);

    return new Promise(resolve => {
      this.http.post(this.serverURL+"/cluster",body, {
        headers
      }).subscribe((data: any) => {
        resolve(data);
      });
    });
  }

}
