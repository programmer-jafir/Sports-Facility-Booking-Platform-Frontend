import { useState, useRef, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchInput = () => {
  const [showInput, setShowInput] = useState(false);
  
  // reffering the input field
  const inputRef = useRef<HTMLInputElement>(null);

  // when the search button is clicked, show input and focus on it
  const handleSearchClick = () => {
    if (!showInput) {
        setShowInput(true);
      }

      if (inputRef.current) {
        inputRef.current.focus();
      }
  };

  // automatically focus on the input field when it arrivel
  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  return (
    <div className="flex items-center gap-2">
      {showInput && (
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="outline-none px-4 py-2 rounded-full text-gray-700 border-2 border-gray-300"
        />
      )}
      
      <button
        className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200"
        onClick={handleSearchClick}
      >
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchInput;
