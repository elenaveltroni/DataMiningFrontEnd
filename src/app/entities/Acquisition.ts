export class Acquisition {
  _id: Ob;
  annuncement_date?: any = new Date(); //timestamp
  signing_date?: any = new Date();
  status?: string;
  acquiror?: Acquiror;
  target?: Target;
  documents?: [];
}

export class Acquiror{
  name?: string;
  ticker?: string;
  state?: string;
}

export class Target {
  name?: string;
  ticker?: string;
  state?: string;
}

export class Ob {
  $oid: string;
}
