import {MdOutlineClear} from "react-icons/md";

export default function Search({inputRef,handleClearSearchInput,handleSubmitSearchForm}) {

   return (
      <>
         <div
            className="absolute right-5 top-1/2 transform -translate-y-1/2 w-2/3 md:w-1/2 h-10"
         >
            <form
               className="w-full h-full"
               onSubmit={handleSubmitSearchForm}
            >
               <input
                  type="text"
                  placeholder="search..."
                  className="w-full h-full pl-4 pr-10 rounded-md border-none outline-none text-text-dark bg-gray-light"
                  ref={inputRef}
               />
               <button
                  onClick={() => handleClearSearchInput()}
                  type="button"
                  className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-red-dark w-6 h-6 rounded-full text-text-light flex items-center justify-center"
               >
                  <MdOutlineClear size={20}/>
               </button>
            </form>
         </div>
      </>
   );
}

