import React from 'react'
import { I18nextProvider } from 'react-i18next'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import i18next from '../i18n/config'
import { ContentFiltersProvider } from '../hooks/use-content-filters'

const wrapRootElement = (props) => (
  <I18nextProvider i18n={i18next}>
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
    >
      <ContentFiltersProvider>
        {props.element}
      </ContentFiltersProvider>
    </ThemeProvider>
  </I18nextProvider>
)

export default wrapRootElement
