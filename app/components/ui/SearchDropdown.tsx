// // 'use client';
// // import Select from 'react-select';

// // const options = [
// //   { value: 'dhaka', label: 'Dhaka' },
// //   { value: 'chittagong', label: 'Chittagong' },
// //   { value: 'sylhet', label: 'Sylhet' },
// //   { value: 'khulna', label: 'Khulna' },
// // ];


// // export default function SearchDropdown() {
// //   return (
// //     <div className="w-60">
// //       <Select 
// //         options={options} 
// //         isSearchable={true} 
// //         placeholder="Select a city..."
// //       />
// //     </div>
// //   );
// // }
// 'use client';
// import Select from 'react-select';

// const options = [
//   { value: 'Kolkata', label: 'Kolkata' },
//   { value: 'Howrah', label: 'Howrah' },
//   { value: 'Horipur', label: 'Horipur' },
//   { value: 'Noapara', label: 'Noapara' },
// ];

// // Custom styles to remove border and outline on focus
// const customStyles = {
//   control: (provided, state) => ({
//     ...provided,
//     border: '1px solid #ccc', // Default border
//     fontSize: '14px',  
//     color: '#0D1A1A', 
//     fontWeight: '500',   
//     boxShadow: 'none', // Removes the blue outline/glow
//     '&:hover': {
//       border: 'none', // Keeps border same on hover
//     },
//     // When focused, we keep the border same or hide it
//     border: state.isFocused ? 'none' : 'none', 
//   }),
// };

// export default function SearchDropdown() {
//   return (
//     <div className="w-60">
//       <Select 
//         options={options} 
//         isSearchable={true} 
//         placeholder="Select a city..."
//         styles={customStyles} // Apply the styles here
//       />
//     </div>
//   );
// }
'use client';
import Select from 'react-select';
import { useState, useEffect } from 'react';

const options = [
  { value: 'Kolkata', label: 'Kolkata' },
  { value: 'Howrah', label: 'Howrah' },
  { value: 'Horipur', label: 'Horipur' },
  { value: 'Noapara', label: 'Noapara' },
];

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: 'none', // কোনো বর্ডার থাকবে না
    fontSize: '14px',  
    color: '#0D1A1A', 
    fontWeight: '500',   
    boxShadow: 'none', 
    minHeight: '38px',
    '&:hover': {
      border: 'none', // হোভার করলেও বর্ডার আসবে না
    },
  }),
  // ফোকাস অবস্থায় নীল আউটলাইন বা বর্ডার সরানোর জন্য এটি জরুরি
  container: (provided: any) => ({
    ...provided,
    border: 'none',
  }),
};

export default function SearchDropdown() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-60 h-[38px]"></div>;
  }

  return (
    <div className="w-60">
      <Select 
        instanceId="nexus-no-border-select" 
        options={options} 
        isSearchable={true} 
        placeholder="Select a city..."
        styles={customStyles} 
      />
    </div>
  );
}