import React, { useEffect } from "react";
// import Modal from "../../components/Modal/Modal";
// import styles from "./PartnerWithUs.module.css";
const PartnershipForm = () => {
    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://static.airtable.com/js/embed/embed_snippet_v1.js";
        // script.async = true;

        document.body.appendChild(script);
    }, [])
    return (
        <iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrIDfLCj7h0tqKML?backgroundColor=yellow" frameborder="0" onmousewheel="" width="100%" height="1009" style={{ background: "transparent", border: "1px solid #ccc" }}></iframe>
    )
}

export default PartnershipForm;