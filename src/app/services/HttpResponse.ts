export class HttpResponse{
  success: boolean;
  errorCode?: string;
  errorMessage?: string;
  data?: any | any[];
  totalNumberPages?: any;
}
