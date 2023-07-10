import { IconType } from 'react-icons/lib';

interface INavSectionLink {
  text: string;
  url: string;
}

export interface INavSectionColum {
  title: string;
  links?: INavSectionLink[];
}

export interface INavSectionSocialMediaItem {
  title: string;
  icon: IconType;
  url: string;
}

export interface INavSectionContactsItem {
  label: string;
  text: string;
}
