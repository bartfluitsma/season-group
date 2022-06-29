import Select from 'react-select'
import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import './select-component.scss'

const SelectComponent = ({
  options,
  placeholder,
  label,
  onChange,
  value,
}) => {
  const breakpoints = useBreakpoint()
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '100%',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      borderRadius: '0',
      border: '1px solid #DEDEDE',
      fontFamily: 'Manrope',
      minHeight: '44px',
      // none of react-select's styles are passed to <Control />
      width: breakpoints.sm ? '100%' : 300,
    }),
    menuList: (provided, state) => ({
      ...provided,
      fontFamily: 'Manrope',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontFamily: 'Manrope',
      color: '#C3c3c3',
      fontSize: '14px',
      letterSpacing: 0,
      lineHeight: '23.6px',
    }),
  }

  return (
    <>
      {label && <span className="label-select-component">{label}</span> }
      <Select
        styles={customStyles}
        // defaultValue={options[0]}
        value={value}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        isClearable={true}
      />
    </>
  )
}

export default SelectComponent

SelectComponent.defaultProps = {
  label: 'add your label',
  placeholder: 'add your place holder',
  options: [],
  className: 'select__container',
  styles: {},
  isSearchable: false,
  isClearable: false,
  onChange: () => {},
}
