import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';

import {
  INavSectionColum,
  INavSectionContactsItem,
  INavSectionSocialMediaItem
} from 'interfaces';

export const navSectionLinksValues: INavSectionColum[] = [
  {
    title: 'Links Principais',
    links: [
      {
        text: 'Home',
        url: '/'
      },
      {
        text: 'Ferramenta',
        url: '/'
      },
      {
        text: 'Preços',
        url: '/'
      },
      {
        text: 'Contato',
        url: '/'
      }
    ]
  },
  {
    title: 'Cases',
    links: [
      {
        text: 'Geração de Leads B2B',
        url: '/'
      },
      {
        text: 'Geração de Leads em Software',
        url: '/'
      },
      {
        text: 'Geração de Leads em Imobiliária',
        url: '/'
      },
      {
        text: 'Cases de Sucesso',
        url: '/'
      }
    ]
  },
  {
    title: 'Materiais',
    links: [
      {
        text: 'Blog',
        url: '/'
      },
      {
        text: 'Parceria',
        url: '/'
      },
      {
        text: 'Guia Definitivo do Marketing',
        url: '/'
      },
      {
        text: 'Materiais Gratuitos',
        url: '/'
      }
    ]
  }
];

export const navSectionSocialMediaValues: INavSectionSocialMediaItem[] = [
  {
    icon: BiLogoLinkedin,
    url: 'https://www.linkedin.com/company/leadster-platform'
  },
  {
    icon: BiLogoFacebook,
    url: 'https://www.facebook.com/leadsterplatform'
  },
  {
    icon: BsInstagram,
    url: 'https://www.instagram.com/leadster.com.br'
  }
];

export const navSectionContactsValues: INavSectionContactsItem[] = [
  {
    label: 'E-mail:',
    text: 'contato@leadster.com.br'
  },
  {
    label: 'Telefone:',
    text: '(42) 98828-9851'
  }
];
