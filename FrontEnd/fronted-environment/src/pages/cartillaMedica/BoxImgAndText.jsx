/* eslint-disable react/prop-types */
// import { useEffect } from "react"

// export default function BoxImgAndText({Rectangle, text, pdf}){

//     useEffect(() => {
//         const loadPdfButton = document.getElementById('loadPdfButton');
    
//         if (loadPdfButton) {
//           loadPdfButton.addEventListener('click', function () {
//             const pdfUrl = pdf;
//             window.open(pdfUrl, '_blank');
//           });
//         }
//     }, [pdf]);

//     return (
//         <div className="relative inline-block w-7/12 h-auto sm:w-5/12 sm:m-2 md:w-4/12 md:m-3 m-1">
//         <img src={Rectangle} />
//         <button id="loadPdfButton" className="text-darkBlue top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl">{text}</button>
//     </div>
//     )
// }


export default function BoxImgAndText({ Rectangle, text, pdf }) {
  const handleClick = () => {
    window.open(pdf, "_blank");
  };

  return (
    <div className="relative inline-block w-7/12 h-auto sm:w-5/12 sm:m-2 md:w-3/12 md:m-3 m-1">
      <img src={Rectangle} alt="Rectangle" />
      <button
        onClick={handleClick}
        className="text-darkBlue top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl"
      >
        {text}
      </button>
    </div>
  );
}
