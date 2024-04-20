import { useNavigate } from "react-router-dom";
import "./btnLink.css";

interface BtnLinkProps {
    navLink: string;
    text: string;
    handleTestNewStart?: () => void;
}

function BtnLink({ navLink, text, handleTestNewStart }: BtnLinkProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (handleTestNewStart) handleTestNewStart();
        navigate(navLink);
    };
    return (
        <button onClick={handleClick} className="navLink">
            {text}
        </button>
    );
}

export default BtnLink;
