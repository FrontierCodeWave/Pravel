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
export const RamenMarkerString = (color: string) => {
  return `<svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_720_8003)">
<circle cx="23.5" cy="21" r="16" fill="${color}"/>
</g>
<g clip-path="url(#clip0_720_8003)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 20C16.9477 20 16.5 20.4477 16.5 21V22L30.5 22V21C30.5 20.4477 30.0523 20 29.5 20H17.5Z" fill="#0BC58D"/>
<path d="M16.5 21C16.5 20.4477 16.9477 20 17.5 20H29.5C30.0523 20 30.5 20.4477 30.5 21V22C30.5 24.7614 28.2614 27 25.5 27H21.5C18.7386 27 16.5 24.7614 16.5 22V21Z" stroke="#1A1E27" stroke-width="1.2"/>
<rect x="20.5" y="27" width="6" height="1.5" rx="0.75" fill="#0BC58D" stroke="#1A1E27" stroke-width="1.2"/>
<line x1="16.5" y1="22.4" x2="30.5" y2="22.4" stroke="#1A1E27" stroke-width="1.2"/>
<path d="M21 15V20" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M23.5 15V20" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M26 15V20" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M19.5 14.5H30.5" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M19.5 17H21M30.5 17H26.2222" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_720_8003" x="0.5" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_8003"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_720_8003" result="shape"/>
</filter>
<clipPath id="clip0_720_8003">
<rect width="24" height="24" fill="white" transform="translate(11.5 9)"/>
</clipPath>
</defs>
</svg>

`;
};
export const CafeMarkerString = (color: string) => {
  return `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_720_5245)">
<circle cx="23" cy="21" r="16" fill="${color}"/>
</g>
<path d="M19 29H27L27.5 23.5H18.5L19 29Z" fill="#0BC58D"/>
<path d="M18 18H28L27 29H19L18 18Z" stroke="#1A1E27" stroke-width="1.2" stroke-linejoin="round"/>
<path d="M19 29H27L27.5 23.5H18.5L19 29Z" stroke="#1A1E27" stroke-width="1.2" stroke-linejoin="round"/>
<path d="M26.5692 12.1897C26.674 11.8754 26.5041 11.5356 26.1897 11.4308C25.8754 11.326 25.5356 11.4959 25.4308 11.8103L26.5692 12.1897ZM25.5692 15.1897L26.5692 12.1897L25.4308 11.8103L24.4308 14.8103L25.5692 15.1897Z" fill="#1A1E27"/>
<path d="M17.5 15H28.5L29 18H17L17.5 15Z" fill="#0BC58D" stroke="#1A1E27" stroke-width="1.2" stroke-linejoin="round"/>
<defs>
<filter id="filter0_d_720_5245" x="0" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_5245"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_720_5245" result="shape"/>
</filter>
</defs>
</svg>

`;
};
export const RestaurantMarkerString = (color: string) => {
  return `<svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_720_2080)">
<circle cx="23.5" cy="21" r="16" fill="${color}"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8436 13.7382C15.139 14.7346 15.1845 16.0784 15.9549 17.0249L20.0573 22.065C20.3724 22.4521 20.9247 22.5476 21.3515 22.2887L21.6233 22.1238L27.6293 28.1298C28.0903 28.5909 28.8519 28.5405 29.2482 28.0227C29.5772 27.5927 29.5365 26.9854 29.1529 26.6033L20.8444 18.3273C20.829 18.312 20.8133 18.2972 20.7972 18.283L16.2203 13.7061C16.1119 13.5977 15.9321 13.613 15.8436 13.7382Z" fill="#0BC58D"/>
<path d="M15.9549 17.0249L15.4896 17.4036L15.9549 17.0249ZM15.8436 13.7382L16.3335 14.0846L16.3335 14.0846L15.8436 13.7382ZM20.0573 22.065L19.592 22.4437L20.0573 22.065ZM21.3515 22.2887L21.6627 22.8017L21.6627 22.8017L21.3515 22.2887ZM21.6233 22.1238L22.0476 21.6996L21.7147 21.3666L21.3121 21.6108L21.6233 22.1238ZM29.2482 28.0227L28.7717 27.658L28.7717 27.658L29.2482 28.0227ZM29.1529 26.6033L29.5763 26.1782L29.1529 26.6033ZM20.8444 18.3273L20.421 18.7524L20.421 18.7524L20.8444 18.3273ZM20.7972 18.283L20.3729 18.7072L20.3861 18.7204L20.4 18.7327L20.7972 18.283ZM16.4203 16.6461C15.8199 15.9085 15.7844 14.8612 16.3335 14.0846L15.3537 13.3917C14.4937 14.608 14.5492 16.2483 15.4896 17.4036L16.4203 16.6461ZM20.5226 21.6862L16.4203 16.6461L15.4896 17.4036L19.592 22.4437L20.5226 21.6862ZM21.0403 21.7757C20.8696 21.8793 20.6487 21.8411 20.5226 21.6862L19.592 22.4437C20.0961 23.0631 20.9798 23.2159 21.6627 22.8017L21.0403 21.7757ZM21.3121 21.6108L21.0403 21.7757L21.6627 22.8017L21.9345 22.6368L21.3121 21.6108ZM28.0536 27.7055L22.0476 21.6996L21.199 22.5481L27.205 28.5541L28.0536 27.7055ZM28.7717 27.658C28.5959 27.8877 28.2581 27.9101 28.0536 27.7055L27.205 28.5541C27.9226 29.2716 29.1079 29.1932 29.7246 28.3874L28.7717 27.658ZM28.7294 27.0284C28.8996 27.1979 28.9177 27.4673 28.7717 27.658L29.7246 28.3874C30.2368 27.7181 30.1733 26.7729 29.5763 26.1782L28.7294 27.0284ZM20.421 18.7524L28.7294 27.0284L29.5763 26.1782L21.2679 17.9022L20.421 18.7524ZM20.4 18.7327C20.4071 18.739 20.4141 18.7455 20.421 18.7524L21.2679 17.9022C21.244 17.8784 21.2195 17.8554 21.1944 17.8333L20.4 18.7327ZM15.796 14.1303L20.3729 18.7072L21.2215 17.8587L16.6446 13.2818L15.796 14.1303ZM16.3335 14.0846C16.2073 14.2631 15.9507 14.285 15.796 14.1303L16.6446 13.2818C16.2732 12.9105 15.6569 12.9629 15.3537 13.3917L16.3335 14.0846Z" fill="#1A1E27"/>
<path d="M28.4094 13.0283L25.0327 16.405C24.6422 16.7955 24.6422 17.4287 25.0327 17.8192L25.5648 18.3513C25.6429 18.4294 25.6429 18.556 25.5648 18.6341L24.7873 19.4116M32.4931 17.1121L29.1165 20.4887C28.726 20.8793 28.0928 20.8793 27.7023 20.4887L27.1322 19.9187C27.0541 19.8406 26.9275 19.8406 26.8494 19.9187L26.0719 20.6962M19.5818 24.6171L17.1476 27.0513C16.7929 27.406 16.7929 27.9811 17.1476 28.3358V28.3358C17.5024 28.6906 18.0775 28.6906 18.4322 28.3358L21.4999 25.2681" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M29.7707 14.3897L27.7288 16.4315" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<path d="M31.1001 15.7822L29.0582 17.8241" stroke="#1A1E27" stroke-width="1.2" stroke-linecap="round"/>
<defs>
<filter id="filter0_d_720_2080" x="0.5" y="0" width="46" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="3.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_2080"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_720_2080" result="shape"/>
</filter>
</defs>
</svg>


`;
};
