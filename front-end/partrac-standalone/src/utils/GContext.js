
import { createContext } from "react";

const GContext = createContext({
    package: [],
    initials: "",
    setInitials: function(){ console.log("empty function") },
    addPart: function(){console.log("empty function")}
});


export default GContext;