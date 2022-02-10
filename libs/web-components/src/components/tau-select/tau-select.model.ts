export interface SelectOption {
  icon?: string;
  title: string;
  value: number;
}

export interface SelectArgs {
  options: SelectOption[];
  placeholder: string;
}
