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

export interface PartsResult {
  id: number;
  inv_part_id: number;
  part: Part;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
}

export interface Part {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: string;
  print_of?: string;
}

export interface FormProps {
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
