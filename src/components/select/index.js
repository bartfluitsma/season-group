import Select from 'react-select'
import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import './select.scss'

const SelectComponent = ({
  options,
  placeholder,
  label,
  onChange,
  selectedOption,
  dark,
}) => {
  const breakpoints = useBreakpoint()
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '100%',
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',

    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: dark ? '#000' : '#C3c3c3',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: dark ? 'rgba(28,117,188,0.25)' : 'transparent',
      borderRadius: '0',
      border: dark ? 'none' : '1px solid #DEDEDE',
      fontFamily: '"Inter", sans-serif',
      minHeight: '46px',
      // none of react-select's styles are passed to <Control />
      width: breakpoints.sm ? '100%' : 300,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: dark ? '#1C75BC' : '#484554',
      fontFamily: '"Inter", sans-serif',
    }),
    menuList: (provided, state) => ({
      ...provided,
      fontFamily: '"Inter", sans-serif',
      backgroundColor: dark ? 'rgba(28,117,188,0.16)' : 'transparent',
      border: dark ? 'none' : '1px solid #DEDEDE',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontFamily: '"Inter", sans-serif',
      color: dark ? '#1C75BC' : '#484554',
      fontSize: '14px',
      letterSpacing: 0,
      lineHeight: '23.6px',

      textTransform: 'capitalize',
    }),
  }

  return (
    <>
      {label && <span className="label-select-component">{label}</span> }
      <Select
        styles={customStyles}
        // defaultValue={options[0]}
        value={selectedOption && options.filter((option) => option.value === selectedOption)}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
        isClearable={false}
      />
    </>
  )
}

export default SelectComponent

SelectComponent.defaultProps = {
  label: null,
  placeholder: 'add your place holder',
  options: [],
  className: 'select__container',
  styles: {},
  isSearchable: false,
  isClearable: false,
  onChange: () => {},
}
