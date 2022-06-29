import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import CardExperiences from './card-experience'
import ListWithSubgroup from './list-with-subgroup'
import ListWithoutSubgroup from './list-without-subgroup'

const SubMenuChildren = ({
  submenuSelected,
  titleMenuSelected,
  menuSelectedItem,
}) => {
  const [menu, setMenu] = useState(null)
  const submenutitle = _.get(submenuSelected, 'title')
  const getMenuChildren = (m) => {
    let component
    const subgroup = submenuSelected && Object.prototype.hasOwnProperty.call(submenuSelected, 'subgroup')
    const children = submenuSelected && Object.prototype.hasOwnProperty.call(submenuSelected, 'children')
    switch (true) {
      case submenutitle === 'experience':
        component = <CardExperiences
          m={m}
          titleMenuSelected={titleMenuSelected}
          submenutitle={submenutitle}
          menuSelectedItem={menuSelectedItem}
        />
        break
      case subgroup:
        component = <ListWithSubgroup
          m={m}
          titleMenuSelected={titleMenuSelected}
          submenutitle={submenutitle}
          menuSelectedItem={menuSelectedItem}
        />
        break
      case children:
        component = <ListWithoutSubgroup
          m={m}
          titleMenuSelected={titleMenuSelected}
          submenutitle={submenutitle}
          menuSelectedItem={menuSelectedItem}
        />
        break
      default:
        component = <p></p>
        break
    }
    return setMenu(component)
  }

  useEffect(() => {
    getMenuChildren(submenuSelected)
  }, [submenuSelected])
  return (
    <div className="col-9 d-flex">
      {
        menu
      }
    </div>
  )
}

export default SubMenuChildren
