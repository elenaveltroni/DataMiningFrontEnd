import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpResponse} from './HttpResponse';
import {Acquisition} from '../entities/Acquisition';
import {AuthHttp} from 'angular2-jwt';
import {Document} from '../entities/Document';
import {Sentence} from '../entities/Sentence';
import {Keyword} from '../entities/Keyword';


@Injectable({
  providedIn: 'root'
})

export class Service {
  serverURL = "78.46.192.21/";
  public headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private authHttp: AuthHttp) {
  }

  /*
  ACQUISITION
   */
  getAllAcquisition(){
    const url = this.serverURL + 'acquisition';
    return this.authHttp
      .get(url)
      .toPromise()
      .then(res => res.json() as HttpResponse);
  }

  getAcquisition(id: string){
    const url = this.serverURL + 'acquisition/' + id;
    return this.authHttp
      .get(url)
      .toPromise()
      .then(res => res.json() as HttpResponse);
  }

  insertAcquisition(acquisition: Acquisition){
    const url = this.serverURL + 'acquisition';
    return this.authHttp.post(url, JSON.stringify(acquisition)).toPromise()
      .then(res => res.json() as HttpResponse);
  }

  /*
  DOCUMENT
   */
  insertDocument(document: Document){
    const url = this.serverURL + 'document';
    return this.authHttp.post(url, JSON.stringify(document)).toPromise()
      .then(res => res.json() as HttpResponse);
  }

  /*
  SENTENCE
   */
  insertSentence(sentence: Sentence){
    const url = this.serverURL + 'sentence';
    return this.authHttp.post(url, JSON.stringify(sentence)).toPromise()
      .then(res => res.json() as HttpResponse);
  }

  getSentenceById(idSentence: string){
    const url = this.serverURL + 'sentence/' + idSentence;
    return this.authHttp
      .get(url)
      .toPromise()
      .then(res => res.json() as HttpResponse);
  }

  getSentenceByIdDocument(idDocument: string){
    const url = this.serverURL + 'sentence/?document_id=' + idDocument;
    return this.authHttp
      .get(url)
      .toPromise()
      .then(res => res.json() as HttpResponse);
  }

  getAllSentence(){
    const url = this.serverURL + 'sentence';
    return this.authHttp
      .get(url)
      .toPromise()
      .then(res => res.json() as HttpResponse);
  }


  /*
  KEYWORD
   */
  insertKeyword(keyword: Keyword){
    const url = this.serverURL + 'keyword';
    return this.authHttp.post(url, JSON.stringify(keyword)).toPromise()
      .then(res => res.json() as HttpResponse);
  }

  getKeywordByType(type: string){
    const url = this.serverURL + 'keyword?type=' + type;
    return this.authHttp
      .get(url)
      .toPromise()
      .then(res => res.json() as HttpResponse);
  }

  getAllKeyword(){
    const url = this.serverURL + 'keyword';
    return this.http.get<HttpResponse>(url, {headers : this.headers});
  }

}
