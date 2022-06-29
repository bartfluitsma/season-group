import React from 'react'
import { I18nextProvider } from 'react-i18next'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import i18next from '../i18n/config'
import { MenuProvaider } from '../hooks/use-menu'

const wrapRootElement = (props) => (
  <I18nextProvider i18n={i18next}>
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
    >
      <MenuProvaider>
        {props.element}
      </MenuProvaider>
    </ThemeProvider>
  </I18nextProvider>
)

export default wrapRootElement
