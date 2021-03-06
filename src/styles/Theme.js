import Dflt from '../components/icons/Dflt'
import Night from '../components/icons/Night'
import Sun from '../components/icons/Sun'
import Snow from '../components/icons/Snow'
import Rain from '../components/icons/Rain'
import Overcast from '../components/icons/Overcast'

let ht = '1px'

export const defaultTheme = {
  primary: '#ea6d07',
  headings: '#777',
  bodyText: '#777',
  footer: '#CCC',
  hoverColor: '#fff',
  active: '#ea6d07',
  backgroundColor: '#fff',
  contentBgColor: '#fff',
  darkSection: '#555',
  transparentBar: 'rgba(75, 75, 75, .8)',
  separatorTop: '#EEE',
  separatorBtm: '#fff',
  clientLogoColor: '#ea6d07',
  white: '#ffffff',
  separatorHt: ht,
  dark: '#ea6d07',
  light: 'hsla(27, 94%, 80%, 1)',
  icon: Dflt,
}
export const sunTheme = {
  primary: '#ea6d07',
  headings: '#942004',
  bodyText: '#3d0f00',
  footer: '#ea6d07',
  hoverColor: '#942004',
  active: '#ea6d07',
  backgroundColor:
    'linear-gradient(-270deg, #fffaaa, 50%, rgba(255, 188, 5, 1) 100%)',
  contentBgColor: '#fff',
  darkSection: 'hsla(40,90%,30%,1)',
  transparentBar: 'rgba(255, 188, 5, 0.6)',
  separatorTop: '#FCCF05',
  separatorBtm: '#fff',
  clientLogoColor: '#FFE196',
  white: '#ffffff',
  separatorHt: ht,
  dark: 'rgba(235, 138, 1, 1)',
  light: '#ffffaa',
  icon: Sun,
}
export const snowTheme = {
  primary: 'hsla(224, 30%, 66%, 1)',
  headings: '#d1e1f0',
  bodyText: '#28333e',
  footer: '#d1e1f0',
  hoverColor: '#ffffff',
  active: '#ffffff',
  backgroundColor:
    'linear-gradient(270deg, hsla(224, 30%, 60%, 1) 0%, hsla(210,44%,80%, 1) 100%)',
  contentBgColor: 'hsla(224, 30%, 80%, 1)',
  darkSection: 'hsla(224,30%,40%,1)',
  transparentBar: 'rgba(190, 205, 255, 0.6)',
  separatorTop: 'hsla(224, 30%, 40%, 1)',
  separatorBtm: '#fff',
  clientLogoColor: '#777',
  white: '#ffffff',
  separatorHt: ht,
  dark: 'hsla(224,50%,20%,1)',
  light: 'hsla(224, 30%, 80%, 1)',
  icon: Snow,
}

export const overcastTheme = {
  primary: 'hsla(200, 10%, 50%, 1)',
  headings: 'hsla(190, 10%, 20%, 1)',
  bodyText: 'hsla(190, 10%, 10%, 1)',
  footer: 'hsla(190, 10%, 60%, 1)',
  hoverColor: '#ffffff',
  active: 'hsla(90, 10%, 90%, 1)',
  // hoverColor: '#8fb6c8',
  backgroundColor:
    'linear-gradient(-270deg, hsla(190, 10%, 60%, 1) 0%, hsla(90, 10%, 30%, 1) 100%)',
  // contentBgColor: '#31485e',
  contentBgColor: 'hsla(190, 10%, 70%, 1)',
  darkSection: 'hsla(200,50%,20%,1)',
  transparentBar: 'hsla(190, 10%, 30%, 1)',
  separatorTop: '#ccc',
  separatorBtm: 'hsla(200, 100%, 10%, 1)',
  clientLogoColor: '#999',
  white: '#ffffff',
  separatorHt: ht,
  dark: 'hsla(200, 100%, 10%, 1)',
  light: 'hsla(190, 10%, 70%, 1)',
  icon: Overcast,
}

export const midnightTheme = {
  primary: 'hsla(200, 100%, 15%, 1)',
  headings: 'hsla(200, 100%, 25%, 1)',
  bodyText: '#333',
  footer: 'hsla(200, 100%, 15%, 1)',
  hoverColor: '#ffffff',
  active: '#999',
  // hoverColor: '#8fb6c8',
  backgroundColor:
    'linear-gradient(-270deg, hsla(200, 100%, 10%, 1) 0%, hsla(251, 100%, 0%, 1) 100%)',
  contentBgColor: '#537380',
  darkSection: 'hsla(200,50%,5%,1)',
  transparentBar: 'rgba(49, 72, 94, 0.6)',
  separatorTop: '#777',
  separatorBtm: 'hsla(200, 100%, 10%, 1)',
  clientLogoColor: '#999',
  white: '#ffffff',
  separatorHt: ht,
  dark: 'hsla(200, 100%, 10%, 1)',
  light: '#8fb6c8',
  icon: Night,
}

export const rainTheme = {
  primary: '#5D9FA3',
  headings: '#45696D',
  bodyText: '#45696D',
  footer: '#8fb6c8',
  hoverColor: '#ffffff',
  active: '#5D9FA3',
  backgroundColor:
    'linear-gradient(270deg, hsla(214, 3%, 87%, 1) 0%, #8fb6c8 50%)',
  contentBgColor: '#D1E1F0',
  darkSection: 'hsla(194,20%,20%,1)',
  transparentBar: 'rgba(93, 159, 163, 0.6)',
  separatorTop: '#2296AD',
  separatorBtm: '#fff',
  clientLogoColor: '#2296AD',
  white: '#ffffff',
  separatorHt: ht,
  dark: 'hsla(194,20%,30%,1)',
  light: '#8fb6c8',
  icon: Rain,
}
