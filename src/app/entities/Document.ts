import {Ob} from './Acquisition';
import {Sentence} from './Sentence';

export class Document {
  _id: Ob;
  link: string;
  date: any = new Date();
  source: string;
  type: string;
  acquisition_id: string;
  doc_id?: string;
}
