/* eslint-disable no-unused-vars */
const customStyles = {
  indicatorsContainer: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided, state) => ({
    ...provided,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: 0,
    height: '44px',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#C3C3C3',
  }),
  input: (provided, state) => ({
    ...provided,
    height: '40px',
    
  }),
  singleValue: (provided, state) => ({
    ...provided,
    paddingLeft: '8px',
  }),
  control: (provided, state) => ({
    ...provided,
    height: '46px',
    backgroundColor: 'transparent',
    borderRadius: '0',
    border: '1px solid #dedede !important',
    boxShadow: 'none',

    // none of react-select's styles are passed to <Control />
    width: '100%',
  }),
}

export default customStyles
