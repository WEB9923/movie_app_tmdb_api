import {BeatLoader} from "react-spinners";

export default function Loader() {
   return (
      <>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <BeatLoader
               color="#12ae9d"
               size={25}
               speedMultiplier={1}
            />
         </div>
      </>
   );
}
