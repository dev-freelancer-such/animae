export interface HeaderMenuOptionsInterface {
  key: string;
  label: string;
}

export interface FooterMenuItemInterface {
  key: string;
  label: string;
  href?: string;
}

export interface FooterSectionInterface {
  key: string;
  title: string;
  items: FooterMenuItemInterface[];
}
