import { useEffect, useRef } from "react";
import experience from "../images/experience_2.jpg";


export const Experience = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        img.onload = () => {
            // Match canvas size to image
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;

            ctx.drawImage(img, 0, 0);
            const bottomY = img.naturalHeight - 1; // last row of pixels
            const imageData = ctx.getImageData(0, bottomY, img.naturalWidth, 1).data;

            // Average bottom pixels color
            let r = 0, g = 0, b = 0;
            for (let i = 0; i < imageData.length; i += 4) {
                r += imageData[i];
                g += imageData[i + 1];
                b += imageData[i + 2];
            }
            const pixelCount = imageData.length / 4;
            r = Math.round(r / pixelCount);
            g = Math.round(g / pixelCount);
            b = Math.round(b / pixelCount);

            // Apply box-shadow with extracted color
            img.style.boxShadow = `13px 26px -10px rgba(${r}, ${g}, ${b})`;
            img.style.borderRadius = "20px"; // optional
        };
    }, []);

    return (
        <div className="ExperienceSection">
            <div className="row mx-0">

                <div className="col-md-6 mb-4">
                    <div className="position-relative">
                        <img
                            ref={imgRef}
                            src={experience}
                            className="experienceImg rounded-4"
                            alt=""
                        />
                    </div>
                </div>

                <div className="col-md-6 mb-4 d-flex flex-column justify-content-center">
                    <h6 className="secondaryColor topSmallHeading mb-4">EXPERIENCES</h6>
                    <h3 className="fw-bold sectionsHeading">We Provide You the Best Fashion<br></br> Experience</h3>
                    <p>Step into a world where style meets comfort. At ZyraWear, every outfit is designed by skilled fashion experts who blend trend, elegance, and quality in every stitch. From premium fabrics to flawless tailoring, we ensure you look and feel your best — every single day.</p>
                    <button class="btn border-0 shineEffect shadow-0 ps-0 secondaryColor bg-transparent mt-2 d-flex align-items-center">
                        More Info <i className="fa-solid fa-arrow-right-long ms-1"></i>
                    </button>
                </div>

            </div>
        </div>
    );
};
