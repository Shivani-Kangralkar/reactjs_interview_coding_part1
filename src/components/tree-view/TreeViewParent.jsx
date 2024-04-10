import React from 'react'
import TreeViewChild from './TreeViewChild'
import './styles.css'

const TreeViewParent = ({menus = []}) => {
  return (
    <div className='tree-view-container'>
      <TreeViewChild list={menus}/>     
    </div>
  )
}

export default TreeViewParent
