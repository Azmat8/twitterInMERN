import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`flex items-center rounded-full border-2 ${
      isFocused ? 'border-blue-500 bg-white' : 'border-transparent bg-[#EFF3F4]'
    } transition-all`}>
      <SearchOutlined
        className={`text-lg ml-3 ${
          isFocused ? 'text-blue-500' : 'text-gray-500'
        } transition-colors`}
        style={{ position: 'absolute' }}
      />
      <input
        className={`flex-1 p-2 pl-10 rounded-full focus:outline-none ${
          isFocused ? 'bg-white' : 'bg-[#EFF3F4]'
        } transition-all`}
        placeholder="Search"
        size="37"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchBar;
