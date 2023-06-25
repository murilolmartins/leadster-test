import { IconType } from 'react-icons/lib';

interface NavSectionLink {
  text: string;
  url: string;
}

export interface NavSectionColum {
  title: string;
  links: NavSectionLink[];
}

export interface NavSectionSocialMediaItem {
  icon: IconType;
  url: string;
}

export interface NavSectionContactsItem {
  label: string;
  text: string;
}
