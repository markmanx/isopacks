import type { Icon } from '../../types';
import block from './icons/block.svg';
import cube from './icons/cube.svg';
import diamond from './icons/diamond.svg';
import pyramid from './icons/pyramid.svg';
import sphere from './icons/sphere.svg';

const BasicIsopack: Icon[] = [
  {
    id: 'block',
    name: 'block',
    category: 'Basic',
    url: block,
    isIsometric: true
  },
  {
    id: 'cube',
    name: 'cube',
    category: 'Basic',
    url: cube,
    isIsometric: true
  },
  {
    id: 'diamond',
    name: 'diamond',
    category: 'Basic',
    url: diamond,
    isIsometric: true
  },
  {
    id: 'pyramid',
    name: 'pyramid',
    category: 'Basic',
    url: pyramid,
    isIsometric: true
  },
  {
    id: 'sphere',
    name: 'sphere',
    category: 'Basic',
    url: sphere,
    isIsometric: true
  }
];

export default BasicIsopack;
