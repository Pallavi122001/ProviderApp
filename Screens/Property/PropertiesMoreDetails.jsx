import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button,Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MaterialIcons, Entypo,FontAwesome,Ionicons } from '@expo/vector-icons';
import { SvgXml } from 'react-native-svg';
import ExplorePropertiesSlider from './ExplorePropertiesSlider';
import PropertiesMoredetailScrollViewContent from './PropertiesMoredetailScrollViewContent';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const xml = `<svg width="25" height="20" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.58L3.83 7H18V5Z" fill="white"/>
</svg>`;
const xml1 = `<svg width="20" height="20" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0478 3.95507H14.5C21.775 3.95507 27.6818 9.86184 27.6818 17.1369C27.6818 24.4119 21.775 30.3187 14.5 30.3187C7.22495 30.3187 1.31818 24.4119 1.31818 17.1369C1.31818 11.8707 4.41329 7.32039 8.88325 5.20998C9.21147 5.05444 9.35249 4.66162 9.19694 4.33207C9.0414 4.00384 8.64861 3.86279 8.32038 4.01834C3.40488 6.33965 0 11.3435 0 17.1369C0 25.1396 6.49732 31.6369 14.5 31.6369C22.5027 31.6369 29 25.1396 29 17.1369C29 9.1342 22.5027 2.63689 14.5 2.63689H13.9622L16.7462 1.25016C17.0717 1.0867 17.2049 0.69125 17.0414 0.365659C16.8793 0.040068 16.4839 -0.0930664 16.1583 0.06907L10.9106 2.68434C10.6865 2.79639 10.5455 3.02443 10.5455 3.27489C10.5455 3.52402 10.6865 3.75339 10.9106 3.86411L16.1583 6.47939C16.4839 6.64152 16.8793 6.50971 17.0414 6.18411C17.2049 5.85852 17.0717 5.46174 16.7462 5.29961L14.0478 3.95507ZM17.1364 18.4182L20.7073 20.9688C20.909 21.1125 21.1726 21.131 21.3928 21.0189C21.6116 20.9056 21.75 20.6788 21.75 20.4323V13.8414C21.75 13.5949 21.6116 13.3682 21.3928 13.2548C21.1726 13.1428 20.909 13.1613 20.7073 13.3049L17.1364 15.8556V14.5005C17.1364 13.7729 16.5458 13.1823 15.8182 13.1823H8.56818C7.84055 13.1823 7.25 13.7729 7.25 14.5005V19.7732C7.25 20.5009 7.84055 21.0914 8.56818 21.0914H15.8182C16.5458 21.0914 17.1364 20.5009 17.1364 19.7732V18.4182ZM15.8182 14.5005V19.7732H8.56818V14.5005H15.8182ZM20.4318 15.1227V19.1511L17.6109 17.1369L20.4318 15.1227Z" fill="#263238"/>
    </svg>
    `;
  const xml2 = `<svg width="20" height="20" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.185 32.0004H3.43701C1.78724 32.0004 0 30.5568 0 28.5634C0 27.326 2.0622 26.02 2.47464 25.8825L7.63015 23.889C7.90511 23.8203 8.04259 23.8203 8.04259 23.4766C7.49267 22.7892 5.70543 20.5208 5.70543 18.5961C5.70543 15.434 7.83637 12.8906 10.5172 12.8906C13.1294 12.8906 15.329 15.434 15.329 18.5961C15.329 20.5895 13.4731 22.8579 12.9231 23.5453C12.9231 23.9578 12.9231 23.9578 13.1981 24.0265L18.3536 26.02L18.6286 26.2262C19.7971 27.0511 20.6908 27.8072 20.6908 28.6321V28.7696C20.4158 29.8007 19.4534 32.0004 17.185 32.0004ZM7.97385 25.1264L2.95582 27.1198C2.33716 27.3948 1.3748 28.2197 1.30606 28.5634C1.30606 29.6632 2.47464 30.6256 3.36826 30.6256H17.1163C18.6286 30.6256 19.041 28.9758 19.1785 28.4946C19.041 28.2197 18.0786 27.4635 17.6662 27.1886L17.46 27.0511L12.5794 25.1951C11.4109 24.7827 11.3421 23.9578 11.4109 23.0642V22.8579L11.5483 22.7205C12.167 22.0331 13.748 19.9709 13.748 18.5273C13.748 16.1902 12.167 14.1967 10.311 14.1967C8.45503 14.1967 6.87401 16.1902 6.87401 18.5273C6.87401 19.9709 8.38629 22.0331 9.00495 22.7205L9.14243 22.9267V23.1329C9.41739 24.2327 9.00495 24.9201 7.97385 25.1264Z" fill="#263238"/>
    <path d="M24.4716 14.815C22.6843 14.815 20.1409 14.2651 17.8725 11.4468C15.5353 8.62843 15.1916 5.3289 16.9101 1.75442L16.9789 1.61694C17.1164 1.34198 17.2538 1.13576 17.5288 0.998277L18.6974 0.242137C19.3848 -0.239044 20.4159 0.0359163 20.8283 0.723317L21.7907 2.37308C22.0657 2.78552 22.2031 4.02284 21.6532 4.57276L20.3471 5.87882C20.2784 6.15378 20.4846 6.97867 21.6532 8.49095C23.028 10.2094 23.7154 10.3469 23.8529 10.3469L25.7776 9.72827C25.9838 9.65953 26.2588 9.65953 26.465 9.79701L28.8022 10.9656C29.0771 11.1031 29.2834 11.378 29.2834 11.653C29.2834 11.928 29.2146 12.2717 29.0084 12.4779L27.2212 14.2651C27.0837 14.4026 26.9462 14.4713 26.8087 14.4713C26.5338 14.5401 25.6401 14.815 24.4716 14.815ZM19.5223 1.41072H19.4535L18.2849 2.16686C18.2849 2.16686 18.2162 2.16686 18.2162 2.2356L18.1475 2.37308C17.5975 3.54166 15.9478 6.97867 18.9036 10.6219C20.4846 12.5466 22.3406 13.509 24.4716 13.509C25.4339 13.509 26.1213 13.3028 26.465 13.234L27.7023 11.9967L26.0526 11.1718L24.2653 11.7905C24.1966 11.8592 24.0591 11.8592 23.8529 11.8592C22.9593 11.8592 21.8594 11.1031 20.5534 9.52205C18.3537 6.77245 18.9036 5.53512 19.1786 5.26016L19.2473 5.19142L20.5534 3.88536C20.5534 3.74788 20.5534 3.40418 20.4846 3.2667L19.5223 1.61694C19.591 1.41072 19.5223 1.41072 19.5223 1.41072Z" fill="#263238"/>
    </svg>
    `;
    const xml3 = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.00008 9.074L9.60508 11.2498L8.64842 7.149L11.8334 4.38984L7.63925 4.02817L6.00008 0.166504L4.36091 4.02817L0.166748 4.38984L3.34591 7.149L2.39508 11.2498L6.00008 9.074Z" fill="#ECDA93"/>
    </svg>
    `;
  const xml4 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.05 13H1V11H3.05C3.5 6.83 6.83 3.5 11 3.05V1H13V3.05C17.17 3.5 20.5 6.83 20.95 11H23V13H20.95C20.5 17.17 17.17 20.5 13 20.95V23H11V20.95C6.83 20.5 3.5 17.17 3.05 13ZM12 5C10.1435 5 8.36301 5.7375 7.05025 7.05025C5.7375 8.36301 5 10.1435 5 12C5 13.8565 5.7375 15.637 7.05025 16.9497C8.36301 18.2625 10.1435 19 12 19C13.8565 19 15.637 18.2625 16.9497 16.9497C18.2625 15.637 19 13.8565 19 12C19 10.1435 18.2625 8.36301 16.9497 7.05025C15.637 5.7375 13.8565 5 12 5Z" fill="#263238" fill-opacity="0.6"/>
    </svg>
    `;
  const xml5 = `<svg width="1" height="20" viewBox="0 0 1 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="20" stroke="#263238" stroke-opacity="0.6"/>
    </svg>
    `;
    const xml6 = `<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.5472 4.22325L11.7659 0.0495625C11.5934 -0.0165208 11.403 -0.0165208 11.2305 0.0495625L0.449219 4.22325C0.179688 4.33107 0 4.58497 0 4.87017C0 5.15537 0.179688 5.40927 0.452813 5.51709L0.71875 5.62143V14.6088C0.323437 14.6088 0 14.9218 0 15.3044C0 15.687 0.323437 16 0.71875 16H2.15625C2.55156 16 2.875 15.687 2.875 15.3044C2.875 14.9218 2.55156 14.6088 2.15625 14.6088V6.17445L3.59375 6.73094V9.73947C3.59375 11.7533 6.91797 13.2175 11.5 13.2175C16.082 13.2175 19.4062 11.7533 19.4062 9.73947V6.73094L22.5472 5.51361C22.8203 5.40927 23 5.15537 23 4.87017C23 4.58497 22.8203 4.33107 22.5472 4.22325ZM17.9688 9.73947C17.9688 10.4664 15.7478 11.8263 11.5 11.8263C7.25219 11.8263 5.03125 10.4664 5.03125 9.73947V7.28743L11.2341 9.6873C11.3203 9.7186 11.4102 9.73599 11.5 9.73599C11.5898 9.73599 11.6797 9.7186 11.7659 9.6873L17.9688 7.28743V9.73947ZM18.4072 5.62143L11.5 8.29607L4.59281 5.62143L2.65578 4.87017L11.5 1.44427L20.3478 4.87017L18.4072 5.62143Z" fill="#263238" fill-opacity="0.6"/>
    </svg>
    `;
    const xml7 = `<svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5954 4.88721C14.7385 4.88721 14.0439 5.58179 14.0439 6.43865C14.0439 7.2955 14.7385 7.99008 15.5954 7.99008C16.4522 7.99008 17.1468 7.2955 17.1468 6.43865C17.1468 5.58179 16.4522 4.88721 15.5954 4.88721Z" fill="#263238"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0781 15.2007C15.0782 15.2008 15.0783 15.2009 15.595 14.6223L15.0783 15.2009C15.3726 15.4637 15.8173 15.4637 16.1116 15.2009L15.595 14.6223C16.1116 15.2009 16.1117 15.2008 16.1118 15.2007L16.1134 15.1994L16.1225 15.1912L16.1308 15.1838C16.1335 15.1812 16.1366 15.1784 16.1401 15.1753C16.1428 15.1729 16.1456 15.1703 16.1487 15.1676C16.1578 15.1593 16.1687 15.1494 16.1811 15.1381C16.2246 15.0984 16.2876 15.0406 16.3673 14.9663C16.5266 14.8177 16.753 14.6031 17.0241 14.3361C17.5654 13.8028 18.2895 13.0565 19.0158 12.2074C19.7396 11.3613 20.4801 10.3963 21.0437 9.42623C21.596 8.47543 22.0334 7.42782 22.0334 6.43847C22.0334 2.88257 19.1509 0 15.595 0C12.0391 0 9.15649 2.88257 9.15649 6.43847C9.15649 7.42782 9.59392 8.47543 10.1462 9.42623C10.7098 10.3963 11.4503 11.3613 12.1741 12.2074C12.9004 13.0565 13.6245 13.8028 14.1658 14.3361C14.4369 14.6031 14.6633 14.8177 14.8227 14.9663C14.9023 15.0406 14.9653 15.0984 15.0088 15.1381C15.0306 15.1579 15.0475 15.1732 15.0592 15.1838L15.0649 15.189L15.0728 15.196L15.0766 15.1994L15.0781 15.2007ZM10.7079 6.43847C10.7079 3.73943 12.8959 1.55144 15.595 1.55144C18.294 1.55144 20.482 3.73943 20.482 6.43847C20.482 7.01289 20.2116 7.77007 19.7022 8.64694C19.2039 9.50458 18.5287 10.3901 17.8369 11.199C17.1475 12.0049 16.4559 12.7181 15.9354 13.2307C15.8111 13.3532 15.6968 13.4639 15.595 13.5614C15.4931 13.4639 15.3788 13.3532 15.2545 13.2307C14.7341 12.7181 14.0424 12.0049 13.3531 11.199C12.6612 10.3901 11.986 9.50458 11.4878 8.64694C10.9783 7.77007 10.7079 7.01289 10.7079 6.43847Z" fill="#263238"/>
    <path d="M6.90592 9.23048H7.84671C8.27514 9.23048 8.62243 9.57776 8.62243 10.0062C8.62243 10.4346 8.27514 10.7819 7.84671 10.7819H6.96324C6.46624 10.7819 6.29364 10.7837 6.14858 10.8036C5.33493 10.9156 4.64051 11.4483 4.32145 12.205C4.26459 12.34 4.21813 12.5062 4.08928 12.9863L2.53952 18.7606C2.05135 20.5795 1.7093 21.8614 1.59303 22.8418C1.47911 23.8023 1.60406 24.312 1.89194 24.6873C2.17982 25.0627 2.63974 25.3155 3.59693 25.4544C4.57387 25.5962 5.90066 25.5982 7.78395 25.5982H23.4066C25.2898 25.5982 26.6167 25.5962 27.5937 25.4544C28.5508 25.3155 29.0107 25.0627 29.2986 24.6873C29.5865 24.312 29.7114 23.8023 29.5975 22.8418C29.4813 21.8614 29.1392 20.5795 28.651 18.7606L27.1013 12.9863C26.9725 12.5062 26.926 12.34 26.8691 12.205C26.5501 11.4483 25.8557 10.9156 25.042 10.8036C24.8969 10.7837 24.7243 10.7819 24.2273 10.7819H23.3633C22.9348 10.7819 22.5875 10.4346 22.5875 10.0062C22.5875 9.57776 22.9348 9.23048 23.3633 9.23048H24.2847C24.7027 9.2304 24.9894 9.2304 25.2535 9.2667C26.6097 9.45334 27.7669 10.341 28.2987 11.6024C28.4023 11.848 28.4765 12.1249 28.5848 12.5287L30.1662 18.4209C30.6338 20.163 31.007 21.5538 31.1381 22.659C31.2732 23.7973 31.1733 24.7924 30.5297 25.6315C29.8861 26.4707 28.9508 26.8251 27.8165 26.9897C26.715 27.1497 25.2751 27.1496 23.4713 27.1496H7.71926C5.91556 27.1496 4.47551 27.1497 3.37406 26.9897C2.2397 26.8251 1.30453 26.4707 0.660912 25.6315C0.0172898 24.7924 -0.0826151 23.7973 0.0523911 22.659C0.18348 21.5538 0.556756 20.163 1.02435 18.4209L2.60573 12.5288C2.71402 12.1249 2.78829 11.848 2.89184 11.6024C3.42361 10.341 4.58093 9.45334 5.93704 9.2667C6.2011 9.2304 6.4878 9.2304 6.90592 9.23048Z" fill="#263238"/>
    <path d="M10.3206 17.4531C9.89221 17.4531 9.54492 17.8004 9.54492 18.2288C9.54492 18.6573 9.89221 19.0046 10.3206 19.0046H20.8704C21.2989 19.0046 21.6461 18.6573 21.6461 18.2288C21.6461 17.8004 21.2989 17.4531 20.8704 17.4531H10.3206Z" fill="#263238"/>
    </svg>
    `;
    const xml8=`<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.32333 2.50561V2.49391V2.48221V1.81261C7.32333 1.57051 7.22883 1.35 7.07492 1.188L7.05512 1.1691C6.89042 1.0044 6.66182 0.900903 6.41162 0.900903C6.15962 0.900903 5.93192 1.0035 5.76812 1.1673C5.60252 1.3329 5.49992 1.56151 5.49992 1.81261V2.48221V2.49391V2.50561V3.17521C5.49992 3.42541 5.60342 3.65311 5.76812 3.81871C5.93192 3.98431 6.16052 4.08691 6.41162 4.08691C6.66182 4.08691 6.89042 3.98341 7.05512 3.81871C7.21983 3.65401 7.32333 3.42541 7.32333 3.17521V2.50561ZM19.7569 13.6107C19.7569 13.3623 19.9585 13.1607 20.2069 13.1607C20.4553 13.1607 20.6569 13.3623 20.6569 13.6107V18.1954H22.4083C22.6567 18.1954 22.8583 18.397 22.8583 18.6454C22.8583 18.8938 22.6567 19.0954 22.4083 19.0954H20.2069C19.9585 19.0954 19.7569 18.8938 19.7569 18.6454V13.6107ZM20.2069 10.8522C20.809 10.8522 21.3949 10.9206 21.9583 11.0502V7.70853H0.899103V17.3593C0.899103 17.992 1.1583 18.568 1.57591 18.9847C1.99351 19.4023 2.56861 19.6615 3.20131 19.6615H12.4803C12.4371 19.3285 12.4146 18.9901 12.4146 18.6454C12.4146 16.4935 13.2876 14.5449 14.6971 13.1355C16.1074 11.7252 18.0559 10.8531 20.2069 10.8531V10.8522ZM22.8583 11.3157C23.9437 11.709 24.9166 12.3354 25.7167 13.1355C27.1279 14.544 28 16.4926 28 18.6445C28 20.7946 27.1279 22.7422 25.7176 24.1534L25.7149 24.1561C24.3037 25.5655 22.357 26.4376 20.2069 26.4376C18.055 26.4376 16.1065 25.5646 14.6971 24.1552L14.6719 24.1282C13.7079 23.1553 12.9987 21.9295 12.6522 20.5606H3.20131C2.32021 20.5606 1.51921 20.1997 0.939603 19.6201C0.360001 19.0405 0 18.2395 0 17.3584V7.26933V7.25763V7.24592V5.24432C0 4.36412 0.360001 3.56401 0.939603 2.98441C1.52101 2.40301 2.32111 2.04301 3.20131 2.04301H4.59992V1.81171C4.59992 1.3149 4.80332 0.862203 5.13182 0.533702L5.13452 0.531002C5.46302 0.203401 5.91572 0 6.41162 0C6.91022 0 7.36383 0.203401 7.69143 0.531902L7.71753 0.559802C8.03073 0.885603 8.22333 1.3284 8.22333 1.81171V2.04301H14.6341V1.81171C14.6341 1.3149 14.8375 0.862203 15.166 0.533702L15.1687 0.531002C15.4972 0.203401 15.9499 0 16.4458 0C16.9426 0 17.3962 0.203401 17.7238 0.531902L17.7265 0.534602C18.0541 0.863103 18.2575 1.3158 18.2575 1.81171V2.04301H19.6561C20.5363 2.04301 21.3364 2.40391 21.916 2.98261C22.4974 3.56401 22.8574 4.36502 22.8574 5.24432V7.24592V7.25763V7.26933V11.3148L22.8583 11.3157ZM25.0813 13.77C24.31 12.9978 23.3542 12.4083 22.2877 12.0717L22.2859 12.0708L22.2751 12.0672L22.2652 12.0636L22.2589 12.0618L22.2553 12.06C21.6082 11.8593 20.9215 11.7513 20.2087 11.7513C18.3052 11.7513 16.5817 12.5235 15.3352 13.77C14.0886 15.0166 13.3164 16.741 13.3164 18.6436C13.3164 19.1143 13.3641 19.5751 13.4532 20.0188L13.455 20.0251L13.4559 20.0296C13.7286 21.3679 14.3893 22.564 15.3127 23.4964L15.3352 23.5171C16.5817 24.7636 18.3052 25.5358 20.2087 25.5358C22.1131 25.5358 23.8366 24.7645 25.0831 23.5189C26.3314 22.2715 27.1018 20.5471 27.1018 18.6427C27.1018 16.7392 26.3296 15.0157 25.0831 13.7673L25.0813 13.77ZM18.2584 2.94301V3.17431C18.2584 3.67291 18.055 4.12561 17.7265 4.45412L17.6986 4.48022C17.3728 4.79342 16.93 4.98602 16.4467 4.98602C15.949 4.98602 15.4954 4.78172 15.1678 4.45322C14.8384 4.12651 14.635 3.67291 14.635 3.17431V2.94301H8.22423V3.17431C8.22423 3.67291 8.02083 4.12561 7.69233 4.45412C7.36383 4.78262 6.91112 4.98602 6.41252 4.98602C5.91482 4.98602 5.46122 4.78172 5.13362 4.45322C4.80422 4.12651 4.60082 3.67291 4.60082 3.17431V2.94301H3.20221C2.56861 2.94301 1.99261 3.20221 1.57591 3.61891C1.1592 4.03561 0.900003 4.61252 0.900003 5.24522V6.80852H21.9592V5.24522C21.9592 4.61162 21.7 4.03561 21.2833 3.61891C20.8666 3.20221 20.2897 2.94301 19.657 2.94301H18.2584ZM16.4467 0.900003C16.1947 0.900003 15.967 1.0026 15.8032 1.1664C15.6376 1.332 15.535 1.56061 15.535 1.81171V2.48131V2.49301V2.50471V3.17431C15.535 3.42451 15.6385 3.65221 15.8032 3.81781C15.967 3.98341 16.1956 4.08601 16.4467 4.08601C16.6888 4.08601 16.9093 3.99151 17.0713 3.83761L17.0902 3.81781C17.2549 3.65311 17.3584 3.42451 17.3584 3.17431V2.50471V2.49301V2.48131V1.81171C17.3584 1.56061 17.2558 1.332 17.092 1.1682C16.9264 1.0026 16.6978 0.900003 16.4467 0.900003Z" fill="#263238"/>
    </svg>
    `;
const PropertiesMoreDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { propertyId } = route.params;
  const property = useSelector((state) =>
    state.property.data.find((item) => item.id === propertyId)
  );

  if (!property) {
    return <Text>Property not found</Text>;
  }

  const handleSvgClick = () => {
    navigation.navigate('ExploreProperties');
  };
  const HandleButtonClick=()=>{
    navigation.navigate('SelectBottomSheet');
  }
  return (
    <View style={styles.container}>
    <View>
    <View style={styles.header}>
    <View style={{ marginLeft: windowHeight*0.02}}>
      <Text style={{ fontSize: windowHeight * 0.017, color: 'white', fontFamily: 'NunitoSans-Regular' }}>Hi there! Searching in</Text>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginRight: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: windowHeight * 0.020, color: 'white', fontFamily: 'NunitoSans-Bold' }}>Noida, Sector 62</Text>
          <MaterialIcons name="keyboard-arrow-down" size={21} color="white" style={{ marginRight: 10 }} />
        </View>
        <View style={{ flexDirection: 'row', marginLeft: windowWidth * 0.30 }}>
          <Entypo style={{ marginRight: 10 }} name="heart-outlined" size={24} color="white" />
          <TouchableOpacity onPress={handleSvgClick}><SvgXml xml={xml} style={{ marginRight: 40 }} /></TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
  <Ionicons name="share-social-outline" size={24} color="black" 
  style={{position:'absolute',zIndex:999,top:windowHeight*0.13,backgroundColor:'white',
  padding:windowWidth*0.02,borderRadius:windowWidth*0.1,left:windowWidth*0.85}} />
  <ScrollView horizontal style={styles.imageSlider} showsHorizontalScrollIndicator={false}>
    {property.attributes.images.data.map((image) => (
      <ImageBackground key={image.id} source={{ uri: image.attributes.url }} style={styles.propertyImage} />
    ))}
  </ScrollView>
  <View style={styles.detailsCard}>
  <View style={{ display: 'flex', flexDirection: 'row' }}>
     <View>
       <Text style={{ marginRight: 20, fontSize: 16, fontFamily:'NunitoSans-Semibold' }}>{property.attributes.name}</Text>
       <Text style={{ marginRight: 20, fontSize: 12, color: 'gray',fontFamily:'NunitoSans-Regular' }}>{property.attributes.address}</Text>
     </View>
     <View style={{ display: 'flex', flexDirection: 'row' }}>
       <View><SvgXml style={{ marginLeft: windowWidth*0.04}} xml={xml1} />
         <Text style={{ fontSize: 10, fontWeight: '400',fontFamily:'Roboto-Regular'}}>Video View</Text></View>
       <View style={{ marginLeft: 10 }}>
         <SvgXml style={{ marginLeft: 15, fontWeight: '400' }} xml={xml2} />
         <Text style={{ fontSize: 10,fontWeight: '400',fontFamily:'Roboto-Regular'}}>Call Owner</Text></View>
     </View>
   </View>
   <View>
 </View>
 <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
 <View style={{ display: 'flex', flexDirection: 'row', marginRight: 10 }}>
   <SvgXml xml={xml3} style={{ marginRight: 5 }} />
   <SvgXml xml={xml3} style={{ marginRight: 5 }} />
   <SvgXml xml={xml3} style={{ marginRight: 5 }} />
   <SvgXml xml={xml3} style={{ marginRight: 5 }} />
   <SvgXml xml={xml3} style={{ marginRight: 5 }} />
 </View>
 <Text style={{ fontSize: 12, fontWeight: '100',fontFamily:'NunitoSans-Regular' }}>
   <Text style={{ fontSize: 16, fontWeight: 'bold' }
   }>5.0 </Text>Based on 1 review</Text>
</View>
<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
   <View style={{ display: 'flex', flexDirection: 'row' }}>
     <View>
       <SvgXml xml={xml4} />
       <SvgXml xml={xml5} style={{ marginLeft: 10, margin: 5 }} />
       <SvgXml xml={xml6} />
     </View>
     <View style={{ marginLeft: 10 }}>
       <Text style={{ color: 'gray', fontSize: windowWidth * 0.035,fontFamily:'NunitoSans-Regular' }}>12-18 Shipra Revera, Sector 62, Noida</Text>
       <Text style={{ color: 'gray', fontSize: windowWidth * 0.030, marginTop: 10, marginBottom: 10,fontFamily:'NunitoSans-Regular' }}>2.2 Km</Text>
       <Text style={{ color: 'gray',fontSize: windowWidth * 0.035,fontFamily:'NunitoSans-Regular' }}>Jaypee University</Text>
       <Text style={{ color: '#008CFF', fontSize: windowWidth * 0.035 ,fontFamily:'NunitoSans-Regular'}}>Change College/ University   </Text>
     </View>
   </View>
   <View style={{ marginLeft: windowWidth * 0.04 ,alignItems:'center'}} >
     <SvgXml xml={xml7} />
     <Text style={{ fontSize: windowWidth * 0.025, fontWeight: '400',fontFamily:'Roboto-Regular' }}>View on Map</Text>
   </View>
 </View>
 <View>
 <Text style={{fontFamily:'NunitoSans-Regular'}}>Offers</Text>
 <ExplorePropertiesSlider/>
 </View>
 <View style={{display:'flex',flexDirection:'row'}}>
 <Text style={styles.text}>Overview</Text>
 <Text style={styles.text}>Payment</Text>
 <Text style={styles.text}>Cancellation</Text>
 <Text style={styles.text}>Review</Text>
 </View>
 <View style={{borderColor:'gray',borderBottomWidth:1}}/>
 <ScrollView style={{height: windowHeight * 0.3,marginTop:windowHeight*0.02}} showsHorizontalScrollIndicator={false}>
 <PropertiesMoredetailScrollViewContent />
</ScrollView>
  </View>
    </View>
   <TouchableOpacity style={styles.button}>
   <Text style={styles.price}> Starting From
   <FontAwesome name="rupee" size={15} color="black" />
   {property.attributes.price[0].price}/bed</Text></TouchableOpacity>
   <View style={styles.BottomButtons}>
   <TouchableOpacity style={styles.selectButton} onPress={HandleButtonClick}>
   <Text style={{color:'white',fontSize:windowWidth*0.04}}>Select Room</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.scheduleButton} onPress={()=>navigation.navigate('ExploreMorePropertiesSheet')}>
   <View style={{display:'flex',flexDirection:'row'}}>
   <SvgXml xml={xml8}/>
   <Text style={{color:'black',fontSize:windowWidth*0.04}}>
   Schedule Visit</Text>
   </View>
   </TouchableOpacity>
   </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: '#008CFF',
    paddingTop: windowWidth * 0.1,
    borderRadius: 15,
    paddingBottom: 5,
    zIndex: 2,
  },
  imageSlider: {
    marginTop: windowHeight * 0.09, 
    zIndex: 1,
  },
  propertyImage: {
    width: windowWidth,
    height: windowHeight * 0.3,
    resizeMode: 'cover',
    marginRight: windowWidth * 0.02,
  },
  detailsCard: {
    position: 'absolute',
    top: windowHeight * 0.38,
    left: windowWidth * 0.01,
    right: windowWidth * 0.01,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84,
    zIndex:999
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text:{
    fontFamily:'NunitoSans-Regular',fontSize:windowWidth*0.035,marginRight:windowWidth*0.02
  },
  button:{
    position:'absolute',backgroundColor:'#A9BFFF',borderRadius:windowWidth*0.02,
    top:windowHeight*0.9,marginLeft:windowWidth*0.48,zIndex:999,padding:windowWidth*0.02
  },
  BottomButtons:{
    display:'flex',flexDirection:'row',position:'absolute',zIndex:999,top:windowHeight*0.95
  },
  selectButton:{
     backgroundColor:'#008CFF',padding:windowWidth*0.05,
     borderTopLeftRadius:windowWidth*0.08,paddingLeft:windowWidth*0.2
  },
  scheduleButton:{
   backgroundColor:'white',padding:windowWidth*0.05,
   borderTopRightRadius:windowWidth*0.08,paddingRight:windowWidth*0.2
  }
});

export default PropertiesMoreDetails;
