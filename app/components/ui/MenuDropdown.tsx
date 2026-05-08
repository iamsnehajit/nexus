// 'use client';
// import Select from 'react-select';
// import { useState, useEffect } from 'react';

// // স্টাইল কনফিগারেশনে 'any' টাইপ যোগ করা হয়েছে
// const customStyles = {
//   control: (provided: any) => ({
//     ...provided,
//     backgroundColor: 'transparent',
//     border: 'none',
//     boxShadow: 'none',
//     '&:hover': { border: 'none' },
//   }),
//   singleValue: (provided: any) => ({
//     ...provided,
//     color: '#000',
//     fontWeight: '300',
//     fontSize: '14px',
//   }),
//   placeholder: (provided: any) => ({
//     ...provided,
//     color: '#000',
//     fontWeight: '400',
//     fontSize: '14px',
//   }),
// };

// interface OptionType {
//   value: string;
//   label: string;
// }

// export default function MenuDropdown({ options, placeholder }: { options: OptionType[], placeholder: string }) {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) return <div className="h-[38px] w-full" />;

//   return (
//     <div className="search-div">
//       <Select
//         instanceId="menu-dropdown-unique"
//         options={options}
//         isSearchable={true}
//         placeholder={placeholder}
//         styles={customStyles}
//       />
//     </div>
//   );
// }
'use client';
import Select from 'react-select';
import { useState, useEffect } from 'react';

// স্টাইল আপনার দেওয়া আগেরটাই রাখা হয়েছে
const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    '&:hover': { border: 'none' },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#000',
    fontWeight: '300',
    fontSize: '14px',
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: '#000',
    fontWeight: '400',
    fontSize: '14px',
  }),
};

interface OptionType {
  value: string;
  label: string;
}

// এখানে onChange যোগ করা হলো যাতে Header.tsx এর এরর চলে যায়
interface MenuDropdownProps {
  options: OptionType[];
  placeholder: string;
  onChange?: (val: any) => void; // এই লাইনটি জরুরি
}

export default function MenuDropdown({ options, placeholder, onChange }: MenuDropdownProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="h-[38px] w-full" />;

  return (
    <div className="search-div">
      <Select
        instanceId={`menu-select-${placeholder.replace(/\s+/g, '-')}`} // ইউনিক আইডি
        options={options}
        isSearchable={true}
        placeholder={placeholder}
        styles={customStyles}
        onChange={onChange} // প্রপসটি এখানে পাস করা হলো
      />
    </div>
  );
}