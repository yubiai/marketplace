import React from 'react';
import Sidebar from './Sidebar';

const items = [
  { name: 'food', label: 'Food' },
  {
    name: 'clothes',
    label: 'Clothes',
    items: [
      { name: 'shirts', label: 'Shirts' },
      { name: 'pants', label: 'Pants' },
    ],
  },
  {
    name: 'electronics',
    label: 'Electronis',
    items: [{ name: 'cellphone', label: 'Cellphone' }],
  },
]


function Categories() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default Categories