import _ from 'lodash'
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react'
import { useTranslation } from 'react-i18next'
import { makeRequest } from '../helpers'
import { menuData } from '../data'

const MenuContext = createContext('')

const MenuProvaider = ({ children }) => {
  const { i18n } = useTranslation()
  const [menu, setMenu] = useState([])

  const [loading, setLoading] = useState(false)

  const getMenu = useCallback(async () => {
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json',
    }
    makeRequest({
      headers,
      endPoint: 'productCategoryMenu',
      // params: {
      //   lang: i18n.language,
      // },
    }).then((resp) => resp.data).then((r) => {
      const newMenu = _.map(menuData, (data) => {
        if (data.title === 'our-products') {
          data.children.push(...r)
          return data
        }
        return data
      })
      setMenu(newMenu)
    })

      .catch((error) => {
        console.log(error)
      })
  }, [i18n.language])

  useEffect(() => {
    getMenu()
  }, [])

  const values = {
    loading,
    menu,
  }

  return (
    <MenuContext.Provider value={values}>
      {children}
    </MenuContext.Provider>
  )
}

const useMenu = () => {
  const context = useContext(MenuContext)

  if (!context) { throw new Error('useLocale must be used within an MenuProvaider') }

  return context
}

export { MenuProvaider, useMenu }
