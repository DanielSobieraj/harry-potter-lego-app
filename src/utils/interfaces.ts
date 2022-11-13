export interface MinifigRoot {
  count: number;
  next: string;
  previous: any;
  results: MinifigResult[];
}

export interface MinifigResult {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
  detail?: string;
}

export interface SummaryFormProps {
  firstName: string;
  surname: string;
  tel: number;
  email: string;
  birthday: Date;
  address: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface SummaryRequestData {
  contactData: SummaryFormProps;
  figureId: string;
}
