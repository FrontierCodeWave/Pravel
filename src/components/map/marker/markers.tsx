export const MarkerCurrentImage = (svgString: string) => {
  return {
    src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`,
    size: {
      width: 34,
      height: 34,
    },
  };
};
export const MarkerPlaceImage = (svgString: string) => {
  return {
    src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`,
    size: {
      width: 47,
      height: 46,
    },
    options: {
      offset: {
        x: 23,
        y: 0,
      },
    },
  };
};

export const CurrentMarkerString = (color: string) => {
  return `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17" cy="17" r="17" fill="${color}" fill-opacity="0.4"/>
    <circle cx="17.0011" cy="17.0011" r="10.3214" fill="${color}"/>
    </svg>`;
};

export const FoodMarkerString = (color: string) => {
  return `<svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_720_6497)">
<circle cx="23.5" cy="21" r="16" fill="${color}"/>
</g>
<rect x="16.5" y="19" width="14" height="2" fill="#0BC58D"/>
<path d="M15.5 27H16.6972C16.8946 27 17.0877 27.0584 17.2519 27.1679L17.7442 27.4962C18.237 27.8247 18.8161 28 19.4083 28H27.5917C28.1839 28 28.763 27.8247 29.2558 27.4962L29.7481 27.1679C29.9123 27.0584 30.1054 27 30.3028 27H31.5C32.0523 27 32.5 26.5523 32.5 26C32.5 25.4477 32.0523 25 31.5 25H29.8028C29.6054 25 29.4123 25.0584 29.2481 25.1679L28.2519 25.8321C28.0877 25.9416 27.8946 26 27.6972 26H19.3028C19.1054 26 18.9123 25.9416 18.7481 25.8321L17.7519 25.1679C17.5877 25.0584 17.3946 25 17.1972 25H15.5C14.9477 25 14.5 25.4477 14.5 26C14.5 26.5523 14.9477 27 15.5 27Z" fill="#0BC58D"/>
<path d="M16.5 20C16.5 19.4477 16.9477 19 17.5 19H29.5C30.0523 19 30.5 19.4477 30.5 20V23C30.5 24.6569 29.1569 26 27.5 26H19.5C17.8431 26 16.5 24.6569 16.5 23V20Z" stroke="#1A1E27" stroke-width="1.2"/>
<path d="M17.5 25H15.5C14.9477 25 14.5 25.4477 14.5 26V26C14.5 26.5523 14.9477 27 15.5 27H16.6972C16.8946 27 17.0877 27.0584 17.2519 27.1679L17.7442 27.4962C18.237 27.8247 18.8161 28 19.4083 28H27.5917C28.1839 28 28.763 27.8247 29.2558 27.4962L29.7481 27.1679C29.9123 27.0584 30.1054 27 30.3028 27H31.5C32.0523 27 32.5 26.5523 32.5 26V26C32.5 25.4477 32.0523 25 31.5 25H29.5" stroke="#1A1E27" stroke-width="1.2"/>
<path d="M16.5 21.5H30.5" stroke="#1A1E27" stroke-width="1.2"/>
<path d="M19.808 13C19.525 13.3333 19.2867 14.3859 19.808 15C20.2607 15.5334 19.8079 16.6667 19.5249 17" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M23.308 13C23.025 13.3333 22.7867 14.3859 23.308 15C23.7607 15.5334 23.3079 16.6667 23.0249 17" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M26.808 13C26.525 13.3333 26.2867 14.3859 26.808 15C27.2607 15.5334 26.8079 16.6667 26.5249 17" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<defs>
<filter id="filter0_d_720_6497" x="0.5" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_6497"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_720_6497" result="shape"/>
</filter>
</defs>
</svg>
`;
};
