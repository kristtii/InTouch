import Link from "next/link";
import style from "../navbar/footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={style["footer-container"]}>Copyright
                &copy; {new Date().getFullYear()} InTouch. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;