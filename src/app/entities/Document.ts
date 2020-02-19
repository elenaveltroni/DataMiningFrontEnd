import {Ob} from './Acquisition';
import {Sentence} from './Sentence';

export class Document {
  _id: Ob;
  link: string;
  date: DocDate;
  source: string;
  type: string;
  acquisition_id: string;
  title: string;
  sentences: Sentence[] = [];
}

export class DocDate{
  $date: any = new Date();
}
