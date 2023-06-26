import { IconType } from 'react-icons/lib';

interface INavSectionLink {
  text: string;
  url: string;
}

export interface INavSectionColum {
  title: string;
  links?: NavSectionLink[];
}

export interface INavSectionSocialMediaItem {
  icon: IconType;
  url: string;
}

export interface INavSectionContactsItem {
  label: string;
  text: string;
}
