export interface SelectOption {
  icon?: string;
  title: string;
}

export interface SelectArgs {
  options: SelectOption[];
  placeholder: string;
}
