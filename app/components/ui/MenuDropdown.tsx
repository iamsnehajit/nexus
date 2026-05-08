'use client';
import Select from 'react-select';

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    '&:hover': { border: 'none' },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#000',
    fontWeight: '300',
    fontSize: '14px',
  }),
  placeholder: (provided) => ({
    ...provided,
     color: '#000',
    fontWeight: '400',
    fontSize: '14px',
  }),
};

export default function CustomSelect({ options, placeholder, onChange }) {
  return (
    <div className="search-div">
      <Select
        options={options}
        isSearchable={true}
        placeholder={placeholder}
        styles={customStyles}
        onChange={onChange}
      />
    </div>
  );
}