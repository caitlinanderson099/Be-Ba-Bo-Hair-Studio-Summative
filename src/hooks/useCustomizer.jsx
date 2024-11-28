import { useState, useEffect } from "react";
import axios from "axios";

const useCustomizer = () => {
    
    
    // Background Customisers
    const [bgColor, setBgColor] = useState("");
    const [footerColor, setFooterColor] = useState("");

    // Font Customisers
    const [fontFamily, setFontFamily] = useState("");
    const [headerFont, setHeaderFont] = useState("");

    // Navbar & ?MobileMenu? Customisers
    const [navColor, setNavColor] = useState("");

    // Button Customisers
    const [buttonColor, setButtonColor] = useState("");
    const [buttonTextColor, setButtonTextColor] = useState("");

    // ENV Import
    const baseURL = import.meta.env.VITE_WP_BASE_URL;

    // UseEffect Function
    useEffect(() => {
        axios.get(`${baseURL}/wp-json/custom-theme/v1/customizer-settings`)
        .then((response) => {
            const {backgroundColor, fontFamily, headerFont, navbarColor, footerColor, buttonColor, buttonTextColor} = response.data;
            setBgColor(backgroundColor);
            setFontFamily(fontFamily);
            setHeaderFont(headerFont);
            setNavColor(navbarColor);
            setButtonColor(buttonColor);
            setButtonTextColor(buttonTextColor);
            setFooterColor(footerColor);
        })
        .catch((error) => {
            console.error('Error Fetching customizer settings: ', error)
        })
    }, [baseURL]);

    // Customiser Return
    return {bgColor, fontFamily, headerFont, navColor, buttonColor, buttonTextColor, footerColor};
};

export default useCustomizer;