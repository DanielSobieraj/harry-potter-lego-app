export interface Root {
  count: number;
  next: string;
  previous: any;
  results: Result[];
}

export interface Result {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}
