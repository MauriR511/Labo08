import { useLocation } from 'react-router-dom'; 
import Header from "../../components/header/Header";
import Description from "../../components/description/description";

const description = () => {
    return(
        <div>
            <Header />
            <Description />
        </div>
    );
};
export default description;