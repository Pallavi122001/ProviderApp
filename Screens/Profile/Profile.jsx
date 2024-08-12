import { View, Text ,StyleSheet,Image, ImageBackground,TouchableOpacity,StatusBar,Dimensions} from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Profile() {
  const navigation=useNavigation();
  const HandleSvgClick=()=>{
    navigation.navigate('HomeScreen')
  }
  const xml = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `;
  const xml1=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.6493 12H10.4936C10.2221 12 10 12.2893 10 12.6429C10 12.9964 10.2221 13.2857 10.4936 13.2857H14.6493C14.9208 13.2857 15.1429 12.9964 15.1429 12.6429C15.1429 12.2893 14.9208 12 14.6493 12Z" fill="#263238"/>
  <path d="M14.6493 10H10.4936C10.2221 10 10 10.2893 10 10.6429C10 10.9964 10.2221 11.2857 10.4936 11.2857H14.6493C14.9208 11.2857 15.1429 10.9964 15.1429 10.6429C15.1429 10.2893 14.9208 10 14.6493 10Z" fill="#263238"/>
  <path d="M7.57249 9.14426C7.38001 8.95191 7.0666 8.95191 6.87411 9.14426L5.1442 10.8729L3.41428 9.14426C3.22179 8.95191 2.90839 8.95191 2.7159 9.14426C2.52341 9.33661 2.52341 9.64979 2.7159 9.84214L4.44581 11.5708L2.7159 13.2995C2.52341 13.4918 2.52341 13.805 2.7159 13.9974C2.81214 14.0935 2.938 14.1429 3.06386 14.1429C3.18971 14.1429 3.31557 14.0935 3.41181 13.9974L5.14173 12.2687L6.87164 13.9974C7.06413 14.1897 7.37754 14.1897 7.57002 13.9974C7.76251 13.805 7.76251 13.4918 7.57002 13.2995L5.84011 11.5708L7.57002 9.84214C7.76251 9.64979 7.76251 9.33661 7.57002 9.14426H7.57249Z" fill="#263238"/>
  <path d="M7.22083 5.14307H3.06509C2.79363 5.14307 2.57153 5.43235 2.57153 5.78592C2.57153 6.13949 2.79363 6.42878 3.06509 6.42878H7.22083C7.49229 6.42878 7.71439 6.13949 7.71439 5.78592C7.71439 5.43235 7.49229 5.14307 7.22083 5.14307Z" fill="#263238"/>
  <path d="M15.3132 0H2.68468C1.45483 0 0 1.45483 0 2.68468V15.3153C0 16.5452 1.45483 18 2.68468 18H15.3153C16.5452 18 18 16.5452 18 15.3153V2.68468C18 1.45483 16.5452 0 15.3153 0H15.3132ZM17.1408 15.3132C17.1408 16.0824 16.0824 17.1408 15.3132 17.1408H2.68468C1.91549 17.1408 0.857041 16.0824 0.857041 15.3132V2.68468C0.857041 1.91549 1.91549 0.857041 2.68468 0.857041H15.3153C16.0845 0.857041 17.143 1.91549 17.143 2.68468V15.3153L17.1408 15.3132Z" fill="#263238"/>
  <path d="M14.9349 4.64916H13.3506V3.06485C13.3506 2.79339 13.1285 2.57129 12.8571 2.57129C12.5856 2.57129 12.3635 2.79339 12.3635 3.06485V4.64916H10.7792C10.5077 4.64916 10.2856 4.87126 10.2856 5.14272C10.2856 5.41417 10.5077 5.63627 10.7792 5.63627H12.3635V7.22059C12.3635 7.49205 12.5856 7.71415 12.8571 7.71415C13.1285 7.71415 13.3506 7.49205 13.3506 7.22059V5.63627H14.9349C15.2064 5.63627 15.4285 5.41417 15.4285 5.14272C15.4285 4.87126 15.2064 4.64916 14.9349 4.64916Z" fill="#263238"/>
  </svg>
  `;
  const xml2=`<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.37573 2.85937C6.35852 1.43436 8.94738 0.875875 11.4964 1.55347C15.9873 2.74727 18.645 7.32292 17.4444 11.768C17.3532 12.1057 17.553 12.4534 17.8907 12.5446C18.2284 12.6358 18.576 12.4359 18.6672 12.0983C20.0529 6.96798 16.9827 1.70127 11.8218 0.329366C8.6458 -0.514894 5.41483 0.311424 3.07755 2.2643C2.52811 2.7234 2.02769 3.24496 1.58872 3.82209C1.43733 4.02114 1.41724 4.29061 1.53742 4.50989C1.6576 4.72918 1.89555 4.8572 2.14477 4.83668L4.52731 4.64045C4.75977 4.62129 4.96287 4.47595 5.056 4.26211C5.14909 4.04831 5.11714 3.80059 4.97284 3.61737L4.37573 2.85937Z" fill="#263238"/>
  <path d="M1.0987 6.60409C1.43636 6.69532 1.63617 7.04298 1.54497 7.38062C0.370284 11.7299 3.03334 16.2438 7.53482 17.4404C10.0339 18.1047 12.5627 17.602 14.518 16.276L13.9899 15.3925C13.8774 15.2042 13.8702 14.9711 13.9711 14.7763C14.0719 14.5816 14.2664 14.4528 14.485 14.4361L16.8639 14.2536C17.1133 14.2345 17.3506 14.364 17.4695 14.584C17.5884 14.8041 17.5666 15.0736 17.4139 15.2717C16.9289 15.9011 16.3679 16.4624 15.748 16.9464C13.4356 18.7518 10.2982 19.4856 7.20943 18.6645C2.05906 17.2954 -1.04318 12.1056 0.322165 7.05039C0.413368 6.71271 0.761031 6.5129 1.0987 6.60409Z" fill="#263238"/>
  <path d="M9.81666 12.666C9.81666 13.0158 9.53313 13.2993 9.18336 13.2993C8.83358 13.2993 8.55005 13.0158 8.55005 12.666C8.55005 12.3162 8.83358 12.0327 9.18336 12.0327C9.53313 12.0327 9.81666 12.3162 9.81666 12.666Z" fill="#263238"/>
  <path d="M8.23341 7.55742C8.23341 6.88121 8.7816 6.33302 9.45781 6.33302H9.50002C10.1965 6.33302 10.7666 6.90407 10.7666 7.60663C10.7666 8.31698 10.1902 8.8944 9.48593 8.8944H9.18337C8.8336 8.8944 8.55006 9.17793 8.55006 9.5277V10.7662C8.55006 11.1159 8.8336 11.3995 9.18337 11.3995C9.53315 11.3995 9.81668 11.1159 9.81668 10.7662V10.1396C11.0695 9.97643 12.0332 8.8988 12.0332 7.60663C12.0332 6.21063 10.9021 5.06641 9.50002 5.06641H9.45781C8.08205 5.06641 6.9668 6.18166 6.9668 7.55742C6.9668 7.90717 7.25033 8.19073 7.6001 8.19073C7.94988 8.19073 8.23341 7.90717 8.23341 7.55742Z" fill="#263238"/>
  </svg>
  `;
  const xml3=`<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.27448 14.4326C0.821805 14.3567 0.541339 14.2078 0.356046 13.9933C0.210308 13.8246 0.112933 13.6083 0.0604673 13.3191C0.00389922 13.0075 1.27954e-05 12.5856 1.27954e-05 12.0141V10.5626C1.27954e-05 10.5542 -0.0129416 9.62939 0.785532 8.8962C1.26502 8.45595 2.0578 8.0675 3.38978 8.0675C4.72177 8.0675 5.51454 8.45595 5.99403 8.8962C6.7925 9.62939 6.77955 10.5542 6.77955 10.5626V12.0141C6.77955 12.5855 6.77566 13.0073 6.71909 13.3189C6.66663 13.6082 6.5693 13.8244 6.42352 13.9932C6.23827 14.2077 5.9578 14.3566 5.50508 14.4326C5.49774 14.5305 5.48798 14.6185 5.47507 14.6975C5.42692 14.9919 5.33231 15.1958 5.19854 15.346C5.05832 15.5035 4.86893 15.6124 4.59412 15.6691C4.32462 15.7247 3.93979 15.7294 3.38978 15.7294C2.83978 15.7294 2.45494 15.7247 2.18544 15.6691C1.91063 15.6124 1.72124 15.5035 1.58103 15.346C1.44725 15.1958 1.35264 14.9919 1.30449 14.6975C1.29158 14.6185 1.28182 14.5305 1.27448 14.4326ZM5.52715 13.5208C5.63938 13.4958 5.72302 13.458 5.78205 13.3897C5.85326 13.3072 5.87044 13.1865 5.88823 13.0281C5.91734 12.769 5.91591 12.4376 5.91591 12.0141V10.5626C5.91591 10.5576 5.903 10.0132 5.4236 9.57301C5.05116 9.23106 4.42429 8.96889 3.38978 8.96889C2.35528 8.96889 1.72841 9.23106 1.35596 9.57301C0.876559 10.0132 0.863648 10.5576 0.863648 10.5626V12.0141C0.863648 12.4377 0.862223 12.7691 0.891327 13.0282C0.909118 13.1866 0.926305 13.3073 0.997468 13.3897C1.0565 13.458 1.14018 13.4958 1.25241 13.5208C1.25233 13.4697 1.25228 13.4171 1.25228 13.3632V11.2675C1.25228 11.0187 1.44578 10.8168 1.6841 10.8168C1.92242 10.8168 2.11592 11.0187 2.11592 11.2675V13.3632C2.11592 13.8221 2.11475 14.1662 2.14027 14.4243C2.15435 14.5666 2.15729 14.6692 2.2136 14.7324C2.26256 14.7874 2.34478 14.7875 2.45494 14.8012C2.68233 14.8296 2.98556 14.828 3.38978 14.828C3.79401 14.828 4.09723 14.8296 4.32462 14.8012C4.43478 14.7875 4.517 14.7874 4.56597 14.7324C4.62228 14.6692 4.62521 14.5666 4.63929 14.4243C4.66481 14.1662 4.66364 13.8221 4.66364 13.3632V11.2675C4.66364 11.0187 4.85714 10.8168 5.09546 10.8168C5.33378 10.8168 5.52728 11.0187 5.52728 11.2675V13.3632C5.52728 13.4171 5.52724 13.4697 5.52715 13.5208ZM13.4949 14.4326C13.0422 14.3567 12.7618 14.2078 12.5765 13.9933C12.4307 13.8246 12.3334 13.6083 12.2809 13.3191C12.2243 13.0075 12.2205 12.5856 12.2205 12.0141V10.5626C12.2205 10.5542 12.2075 9.62939 13.006 8.8962C13.4855 8.45595 14.2782 8.0675 15.6102 8.0675C16.9422 8.0675 17.735 8.45595 18.2145 8.8962C19.0129 9.62939 19 10.5542 19 10.5626V12.0141C19 12.5855 18.9961 13.0073 18.9395 13.3189C18.8871 13.6082 18.7897 13.8244 18.644 13.9932C18.4587 14.2077 18.1782 14.3566 17.7255 14.4326C17.7182 14.5305 17.7084 14.6185 17.6955 14.6975C17.6474 14.9919 17.5528 15.1958 17.419 15.346C17.2788 15.5035 17.0894 15.6124 16.8146 15.6691C16.5451 15.7247 16.1602 15.7294 15.6102 15.7294C15.0602 15.7294 14.6754 15.7247 14.4059 15.6691C14.1311 15.6124 13.9417 15.5035 13.8015 15.346C13.6677 15.1958 13.5731 14.9919 13.5249 14.6975C13.512 14.6185 13.5023 14.5305 13.4949 14.4326ZM17.7476 13.5208C17.8598 13.4958 17.9435 13.458 18.0025 13.3897C18.0737 13.3072 18.0909 13.1865 18.1087 13.0281C18.1378 12.769 18.1364 12.4376 18.1364 12.0141V10.5626C18.1364 10.5576 18.1234 10.0132 17.644 9.57301C17.2716 9.23106 16.6447 8.96889 15.6102 8.96889C14.5757 8.96889 13.9488 9.23106 13.5764 9.57301C13.097 10.0132 13.0841 10.5576 13.0841 10.5626V12.0141C13.0841 12.4377 13.0827 12.7691 13.1118 13.0282C13.1296 13.1866 13.1467 13.3073 13.2179 13.3897C13.2769 13.458 13.3606 13.4958 13.4729 13.5208C13.4728 13.4697 13.4727 13.4171 13.4727 13.3632V11.2675C13.4727 11.0187 13.6662 10.8168 13.9045 10.8168C14.1429 10.8168 14.3364 11.0187 14.3364 11.2675V13.3632C14.3364 13.8221 14.3352 14.1662 14.3607 14.4243C14.3748 14.5666 14.3777 14.6692 14.434 14.7324C14.483 14.7874 14.5652 14.7875 14.6754 14.8012C14.9028 14.8296 15.206 14.828 15.6102 14.828C16.0144 14.828 16.3177 14.8296 16.5451 14.8012C16.6552 14.7875 16.7374 14.7874 16.7864 14.7324C16.8427 14.6692 16.8456 14.5666 16.8597 14.4243C16.8852 14.1662 16.8841 13.8221 16.8841 13.3632V11.2675C16.8841 11.0187 17.0776 10.8168 17.3159 10.8168C17.5542 10.8168 17.7477 11.0187 17.7477 11.2675V13.3632C17.7477 13.4171 17.7477 13.4697 17.7476 13.5208ZM5.1915 2.11346L5.87904 2.22658C6.11446 2.26534 6.27544 2.49628 6.23835 2.74196C6.20126 2.98768 5.98 3.15574 5.74457 3.11698L4.05551 2.83908C3.94238 2.82047 3.84094 2.7557 3.77358 2.65903C3.70622 2.5624 3.67836 2.44175 3.6962 2.32366L3.9625 0.560759C3.99964 0.315083 4.2209 0.147018 4.45628 0.185778C4.69171 0.224493 4.85274 0.45543 4.8156 0.701151L4.7162 1.35913C6.13385 0.495137 7.78309 0 9.54318 0C11.597 0 13.5 0.674245 15.0601 1.82204C15.2549 1.96531 15.3016 2.24673 15.1643 2.45009C15.027 2.6534 14.7574 2.70212 14.5626 2.55879C13.1432 1.51453 11.4118 0.901396 9.54318 0.901396C7.95837 0.901396 6.47227 1.34245 5.1915 2.11346ZM14.3702 18.6409C12.9525 19.5049 11.3033 20 9.54318 20C7.48933 20 5.58635 19.3258 4.02624 18.178C3.83144 18.0347 3.78476 17.7533 3.92204 17.55C4.05936 17.3466 4.32898 17.2979 4.52378 17.4412C5.94321 18.4855 7.67458 19.0986 9.54318 19.0986C11.128 19.0986 12.6141 18.6576 13.8949 17.8865L13.2073 17.7734C12.9719 17.7347 12.8109 17.5038 12.848 17.258C12.8851 17.0123 13.1064 16.8443 13.3418 16.883L15.0309 17.1609C15.144 17.1795 15.2454 17.2443 15.3128 17.3409C15.3801 17.4376 15.408 17.5583 15.3902 17.6763L15.1239 19.4392C15.0867 19.6849 14.8655 19.853 14.6301 19.8142C14.3947 19.7755 14.2336 19.5445 14.2708 19.2988L14.3702 18.6409ZM3.43296 7.79708C2.42121 7.79708 1.59774 6.93129 1.59774 5.85908C1.59774 4.78686 2.42121 3.92107 3.43296 3.92107C4.44467 3.92107 5.26819 4.78686 5.26819 5.85908C5.26819 6.93129 4.44467 7.79708 3.43296 7.79708ZM3.43296 6.89568C3.9714 6.89568 4.40455 6.4297 4.40455 5.85908C4.40455 5.28845 3.9714 4.82247 3.43296 4.82247C2.89453 4.82247 2.46137 5.28845 2.46137 5.85908C2.46137 6.4297 2.89453 6.89568 3.43296 6.89568ZM15.6534 7.79708C14.6417 7.79708 13.8182 6.93129 13.8182 5.85908C13.8182 4.78686 14.6417 3.92107 15.6534 3.92107C16.6651 3.92107 17.4886 4.78686 17.4886 5.85908C17.4886 6.93129 16.6651 7.79708 15.6534 7.79708ZM15.6534 6.89568C16.1918 6.89568 16.625 6.4297 16.625 5.85908C16.625 5.28845 16.1918 4.82247 15.6534 4.82247C15.115 4.82247 14.6818 5.28845 14.6818 5.85908C14.6818 6.4297 15.115 6.89568 15.6534 6.89568Z" fill="#263238"/>
  </svg>
  `;
  const xml4=`<svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.93539 7.71297C11.0277 7.71297 12.7138 5.40528 12.7138 3.49143C12.6707 2.52938 12.2496 1.62324 11.5421 0.969901C10.8346 0.31656 9.89783 -0.0311933 8.93539 0.00220075C7.97144 -0.0230956 7.03585 0.329708 6.32862 0.985187C5.62139 1.64067 5.19865 2.54681 5.15077 3.50989C5.15077 5.40528 6.84308 7.71297 8.93539 7.71297ZM8.93539 1.23297C9.57461 1.19934 10.2012 1.41985 10.6785 1.8464C11.1557 2.27295 11.445 2.87092 11.4831 3.50989C11.4831 4.82682 10.2831 6.50066 8.93539 6.50066C7.58769 6.50066 6.38154 4.82682 6.38154 3.50989C6.4289 2.8733 6.72171 2.27999 7.19819 1.85518C7.67467 1.43037 8.29755 1.20727 8.93539 1.23297ZM16 14.4637C15.9588 15.0476 15.7976 15.6168 15.5265 16.1356C15.2555 16.6544 14.8804 17.1118 14.4246 17.4791C13.023 18.8287 11.1749 19.617 9.23077 19.6945C9.06756 19.6945 8.91103 19.6297 8.79563 19.5143C8.68022 19.3989 8.61539 19.2423 8.61539 19.0791C8.61539 18.9159 8.68022 18.7594 8.79563 18.644C8.91103 18.5286 9.06756 18.4637 9.23077 18.4637C10.8649 18.4078 12.4209 17.7504 13.6 16.6176C13.9302 16.3561 14.204 16.0304 14.4049 15.6603C14.6059 15.2901 14.7298 14.8831 14.7692 14.4637C14.7293 14.0419 14.6026 13.6328 14.3972 13.2622C14.1917 12.8915 13.912 12.5673 13.5754 12.3099C12.7163 11.4768 11.6475 10.8921 10.4827 10.618C9.31782 10.3438 8.10045 10.3905 6.96 10.753C6.80689 10.7967 6.6428 10.7793 6.50222 10.7046C6.36163 10.6298 6.25549 10.5035 6.2061 10.3521C6.1567 10.2007 6.1679 10.0361 6.23734 9.89284C6.30678 9.74955 6.42905 9.63876 6.57846 9.58374C7.93125 9.15565 9.37461 9.10122 10.7558 9.42621C12.137 9.75119 13.4046 10.4435 14.4246 11.4299C14.8831 11.7988 15.2599 12.259 15.5311 12.7813C15.8023 13.3035 15.962 13.8765 16 14.4637ZM5.53846 14.7714V13.8484C5.53846 13.2771 5.31154 12.7293 4.90761 12.3254C4.50369 11.9214 3.95585 11.6945 3.38462 11.6945C2.81338 11.6945 2.26554 11.9214 1.86162 12.3254C1.45769 12.7293 1.23077 13.2771 1.23077 13.8484V14.7714C0.904349 14.7714 0.591298 14.9011 0.360484 15.1319C0.12967 15.3627 0 15.6758 0 16.0022V19.0791C0 19.4055 0.12967 19.7186 0.360484 19.9494C0.591298 20.1802 0.904349 20.3099 1.23077 20.3099H5.53846C5.86488 20.3099 6.17793 20.1802 6.40875 19.9494C6.63956 19.7186 6.76923 19.4055 6.76923 19.0791V16.0022C6.76923 15.6758 6.63956 15.3627 6.40875 15.1319C6.17793 14.9011 5.86488 14.7714 5.53846 14.7714ZM2.46154 13.8484C2.46154 13.6035 2.55879 13.3688 2.7319 13.1956C2.90501 13.0225 3.1398 12.9253 3.38462 12.9253C3.62943 12.9253 3.86422 13.0225 4.03733 13.1956C4.21044 13.3688 4.30769 13.6035 4.30769 13.8484V14.7714H2.46154V13.8484ZM1.23077 19.0791V16.0022H5.53846V19.0791H1.23077Z" fill="#263238"/>
  </svg>
  `;
  const xml5=`<svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.58255 0H13.4174C14.1285 0 14.7742 0.292052 15.2417 0.763391C15.7099 1.23473 16 1.88472 16 2.59996V18.0946C16 18.8105 15.7093 19.4604 15.2417 19.9318C14.7735 20.4025 14.1279 20.6952 13.4174 20.6952H2.58255C1.8721 20.6952 1.22583 20.4025 0.758279 19.9318C0.290726 19.4604 0 18.8105 0 18.0946V2.59996C0 1.88409 0.290726 1.2341 0.758279 0.763391C1.22646 0.292052 1.8721 0 2.58255 0ZM4.01038 5.08653C3.7442 5.08653 3.52899 4.86923 3.52899 4.60125C3.52899 4.33327 3.74483 4.11598 4.01038 4.11598H11.9896C12.2558 4.11598 12.471 4.33327 12.471 4.60125C12.471 4.86923 12.2552 5.08653 11.9896 5.08653H4.01038ZM4.01038 8.91742C3.7442 8.91742 3.52899 8.70012 3.52899 8.43214C3.52899 8.16416 3.74483 7.94687 4.01038 7.94687H11.9896C12.2558 7.94687 12.471 8.16416 12.471 8.43214C12.471 8.70012 12.2552 8.91742 11.9896 8.91742H4.01038ZM4.01038 12.7483C3.7442 12.7483 3.52899 12.531 3.52899 12.263C3.52899 11.9951 3.74483 11.7784 4.01038 11.7784H11.9896C12.2558 11.7784 12.471 11.9957 12.471 12.263C12.471 12.531 12.2552 12.7483 11.9896 12.7483H4.01038ZM4.01038 16.5792C3.7442 16.5792 3.52899 16.3619 3.52899 16.0946C3.52899 15.8266 3.74483 15.6093 4.01038 15.6093H8.37568C8.64186 15.6093 8.85707 15.8266 8.85707 16.0946C8.85707 16.3625 8.64123 16.5792 8.37568 16.5792H4.01038ZM10.8148 16.5792C10.5486 16.5792 10.3327 16.3619 10.3327 16.0946C10.3327 15.8266 10.5486 15.6093 10.8148 15.6093H11.989C12.2552 15.6093 12.4704 15.8266 12.4704 16.0946C12.4704 16.3625 12.2545 16.5792 11.989 16.5792H10.8148ZM13.4168 0.970552H2.58192C2.13702 0.970552 1.7324 1.15427 1.43853 1.45013C1.14465 1.74598 0.962165 2.15333 0.962165 2.60123V18.0958C0.962165 18.5437 1.14465 18.9511 1.43853 19.247C1.7324 19.5428 2.13702 19.7259 2.58192 19.7259H13.4168C13.8617 19.7259 14.2663 19.5422 14.5602 19.247C14.8541 18.9511 15.0366 18.5437 15.0366 18.0958V2.60123C15.0366 2.15333 14.8541 1.74598 14.5602 1.45013C14.2663 1.15427 13.8617 0.970552 13.4168 0.970552Z" fill="#263238"/>
  </svg>
  `;
  const xml6=`<svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_305_9129)">
  <path d="M9.49992 1.69531C8.81053 1.69504 8.12364 1.77912 7.45425 1.94571C7.37702 1.96307 7.304 1.99585 7.23948 2.04212C7.17496 2.0884 7.12025 2.14723 7.07855 2.21518C7.03685 2.28312 7.00901 2.35881 6.99666 2.43778C6.98432 2.51675 6.98771 2.59742 7.00665 2.67504C7.02559 2.75267 7.0597 2.82569 7.10696 2.88981C7.15422 2.95393 7.21368 3.00786 7.28186 3.04843C7.35003 3.08899 7.42555 3.11539 7.50396 3.12605C7.58237 3.13671 7.6621 3.13143 7.73846 3.11051C8.74461 2.85885 9.79215 2.82587 10.8118 3.01375C11.8315 3.20164 12.8002 3.60611 13.6537 4.20042C14.5072 4.79473 15.2261 5.56535 15.7629 6.46133C16.2998 7.35731 16.6423 8.35823 16.7679 9.39794C16.8935 10.4376 16.7992 11.4924 16.4914 12.4926C16.1835 13.4927 15.6691 14.4155 14.9821 15.1998C14.2951 15.9841 13.4512 16.6121 12.5061 17.0423C11.5611 17.4725 10.5364 17.6951 9.49992 17.6953C9.17433 17.6929 8.84927 17.6683 8.52696 17.6217C8.44146 17.6105 8.35754 17.5977 8.27363 17.5833C7.97953 17.5346 7.6887 17.4675 7.40279 17.3825C6.26026 17.036 5.21883 16.4126 4.36913 15.5665L4.31846 15.5193C4.17121 15.3705 4.03267 15.2129 3.89809 15.0513C3.87988 15.0297 3.86009 15.0105 3.84267 14.9881C3.72075 14.8385 3.60517 14.6817 3.4975 14.5225C3.46979 14.4817 3.43971 14.4425 3.41279 14.4025C3.31859 14.2601 3.23309 14.1121 3.14838 13.9633C3.11117 13.8977 3.06921 13.8337 3.03675 13.7673C2.62177 12.9757 2.35347 12.114 2.24509 11.2249C2.23559 11.1449 2.22292 11.0737 2.21579 10.9969C2.19046 10.7657 2.177 10.5353 2.177 10.2953C2.17638 9.72989 2.23959 9.16625 2.36542 8.61531C2.38443 8.53808 2.38804 8.45779 2.37604 8.37913C2.36405 8.30047 2.33669 8.22501 2.29555 8.15714C2.25442 8.08927 2.20033 8.03035 2.13645 7.9838C2.07256 7.93726 2.00015 7.90403 1.92342 7.88604C1.8467 7.86805 1.76721 7.86566 1.68957 7.87902C1.61192 7.89238 1.53769 7.92121 1.47118 7.96384C1.40467 8.00648 1.34722 8.06205 1.30218 8.12734C1.25713 8.19262 1.22539 8.26631 1.20879 8.34411C1.0628 8.98402 0.989235 9.63862 0.989503 10.2953C0.989503 10.5673 1.00534 10.8385 1.03067 11.1089C1.03859 11.1985 1.05284 11.2873 1.06392 11.3761C1.08054 11.5049 1.09163 11.6345 1.113 11.7617C1.113 11.7785 1.12567 11.7913 1.12963 11.8065C1.27304 12.6193 1.53252 13.4067 1.89992 14.1441C1.90399 14.1631 1.90928 14.1818 1.91575 14.2001C1.93713 14.2433 1.96404 14.2801 1.98621 14.3249C2.03134 14.4097 2.08042 14.4905 2.12792 14.5737C2.22213 14.7401 2.31792 14.9049 2.42321 15.0641C2.45884 15.1177 2.50238 15.1689 2.53484 15.2241C2.65913 15.4041 2.78659 15.5809 2.92354 15.7497C2.94729 15.7785 2.97342 15.8057 2.99796 15.8345C3.15154 16.0185 3.30988 16.1985 3.47929 16.3697C3.49592 16.3865 3.51413 16.4017 3.53075 16.4185C3.68909 16.5785 3.84742 16.7313 4.01842 16.8769C4.02792 16.8849 4.04059 16.8881 4.05009 16.8953C4.91122 17.6246 5.90676 18.1744 6.97925 18.5129H6.98479C7.22229 18.5929 7.47167 18.6497 7.71867 18.7025C7.78359 18.7169 7.84929 18.7281 7.915 18.7401C8.10817 18.7769 8.30239 18.807 8.49767 18.8305C8.57129 18.8393 8.64413 18.8481 8.71775 18.8553C8.97663 18.8793 9.23709 18.8953 9.49913 18.8953C11.7562 18.8953 13.9209 17.9892 15.5169 16.3764C17.1129 14.7636 18.0095 12.5762 18.0095 10.2953C18.0095 8.01445 17.1129 5.82701 15.5169 4.21419C13.9209 2.60138 11.7562 1.69531 9.49913 1.69531H9.49992Z" fill="#263238"/>
  <path d="M3.57514 5.94555C4.00693 5.34591 4.52484 4.81473 5.11176 4.36955C5.23774 4.27408 5.32102 4.13194 5.34329 3.97441C5.36556 3.81688 5.32499 3.65686 5.23051 3.52955C5.13603 3.40225 4.99537 3.31809 4.83948 3.29558C4.68359 3.27308 4.52524 3.31408 4.39926 3.40955C3.71657 3.92612 3.11429 4.5431 2.61247 5.23995C2.56497 5.30356 2.53049 5.3761 2.51103 5.45332C2.49157 5.53055 2.48754 5.61092 2.49915 5.68973C2.51077 5.76855 2.5378 5.84424 2.57868 5.91239C2.61956 5.98053 2.67347 6.03977 2.73725 6.08663C2.80103 6.1335 2.8734 6.16705 2.95016 6.18534C3.02691 6.20363 3.1065 6.20628 3.18428 6.19315C3.26206 6.18002 3.33647 6.15136 3.40317 6.10885C3.46987 6.06634 3.52752 6.01083 3.57276 5.94555H3.57514Z" fill="#263238"/>
  <path d="M8.3125 13.6952C8.15503 13.6952 8.00401 13.7584 7.89266 13.871C7.78131 13.9835 7.71875 14.1361 7.71875 14.2952C7.71875 14.4543 7.78131 14.607 7.89266 14.7195C8.00401 14.832 8.15503 14.8952 8.3125 14.8952H10.6875C10.845 14.8952 10.996 14.832 11.1073 14.7195C11.2187 14.607 11.2812 14.4543 11.2812 14.2952C11.2812 14.1361 11.2187 13.9835 11.1073 13.871C10.996 13.7584 10.845 13.6952 10.6875 13.6952H10.0938V8.69521C10.0938 8.53608 10.0312 8.38347 9.91984 8.27095C9.80849 8.15843 9.65747 8.09521 9.5 8.09521H9.10417C8.96435 8.09583 8.82922 8.14622 8.72253 8.23752C8.61583 8.32883 8.54439 8.45522 8.52076 8.59447C8.49713 8.73373 8.52282 8.87695 8.59333 8.99896C8.66383 9.12097 8.77462 9.21397 8.90625 9.26162V13.6952H8.3125Z" fill="#263238"/>
  <path d="M9.49992 7.09512C9.93714 7.09512 10.2916 6.73695 10.2916 6.29512C10.2916 5.85329 9.93714 5.49512 9.49992 5.49512C9.06269 5.49512 8.70825 5.85329 8.70825 6.29512C8.70825 6.73695 9.06269 7.09512 9.49992 7.09512Z" fill="#263238"/>
  </g>
  <defs>
  <clipPath id="clip0_305_9129">
  <rect width="19" height="24" fill="white" transform="translate(0 0.695312)"/>
  </clipPath>
  </defs>
  </svg>
  
  `
  return (
    <View style={styles.contanier}>
    <StatusBar backgroundColor="#008CFF" barStyle="dark-content" translucent={true} />
   <View style={{ backgroundColor: '#008CFF', paddingBottom:width*0.17, paddingTop: 10 }}>
  <ImageBackground style={{ width: width * 0.15, height: width * 0.1}} 
  source={require('../../assets/Images/profile_top.png')}>
  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
  <View style={{ flexDirection: 'row',display:'flex' }}>
  <Image style={styles.profileimage} source={require('../../assets/Images/profile.png')} />
      <View style={{ marginTop: width * 0.15, marginLeft: width * 0.04 }}>
        <Text style={{ color: 'white', fontWeight: '200', fontSize: width * 0.035,
      fontFamily:'NunitoSans-Semibold'}}>Hi there!</Text>
      </View>
    </View>
    <View>
    <TouchableOpacity onPress={HandleSvgClick}>
        <SvgXml xml={xml} style={{marginLeft:width * 0.55,marginTop:width * 0.10}}/>
        </TouchableOpacity>
      </View>
  </View>
  </ImageBackground>
</View>

    <View  style={{marginTop:width * 0.035,marginLeft:width * 0.015}}>
    <View style={styles.profileText}>
    <View style={styles.profile}>
    <SvgXml xml={xml1} style={{marginRight:width * 0.02,marginLeft:width * 0.02}}/>
      <Text style={styles.profiletext}>Cost of Living Calculator</Text>
    </View>
      <AntDesign name="right" size={width * 0.040} color="black" />
    </View>
    <View style={styles.profileText}>
    <View style={styles.profile}>
    <SvgXml xml={xml2} style={{marginRight:width * 0.02,marginLeft:width * 0.02}}/>
      <Text style={styles.profiletext}>FAQs</Text>
    </View>
      <AntDesign name="right" size={width * 0.040} color="black" />
    </View>
    <View style={styles.profileText}>
    <View style={styles.profile}>
    <SvgXml xml={xml3} style={{marginRight:width * 0.02,marginLeft:width * 0.02}}/>
    <Text style={styles.profiletext}>Refer & Earn</Text>
    </View>
      <AntDesign name="right" size={width * 0.040} color="black" />
    </View>
    <View style={styles.profileText}>
    <View style={styles.profile}>
    <SvgXml xml={xml4} style={{marginRight:width * 0.02,marginLeft:width * 0.02}}/>
    <Text style={styles.profiletext}>Privacy Policy</Text>
    </View>
      <AntDesign name="right" size={width * 0.040} color="black" />
    </View>
    <View style={styles.profileText}>
    <View style={styles.profile}>
    <SvgXml xml={xml5} style={{marginRight:width * 0.02,marginLeft:width * 0.02}}/>
    <Text style={styles.profiletext}>Terms & Conditions</Text>
    </View>
      <AntDesign name="right" size={width * 0.040} color="black" />
    </View>
    <View style={styles.profileText}>
    <View style={styles.profile}>
    <SvgXml xml={xml6} style={{marginRight:width * 0.02,marginLeft:width * 0.02}}/>
    <Text style={styles.profiletext}>About Provider App</Text>
    </View>
      <AntDesign name="right" size={width * 0.040} color="black" />
    </View>
    </View>
    <View style={{paddingTop:height * 0.23}}>
      <ImageBackground style={styles.background} 
      source={require('../../assets/Images/profilebackground.png')}>
      <TouchableOpacity style={styles.whatsploginbtn}>
      <Text style={styles.whatsappText}>
      WhatsApp Login (⚡Fastest)</Text>
      </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity style={styles.loginbtn} onPress={()=>navigation.navigate('PhoneLogin')}>
      <Text style={styles.loginText}
     >Login With OTP</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.text}>
      By signing up, you agree to our     
      <View style={{ borderBottomWidth: 0.2, borderBottomColor: 'black',marginRight:width*0.03,
      marginLeft:width*0.05 }}>
        <Text style={{fontSize: width * 0.030,
          fontFamily:'NunitoSans-Semibold'}}>Terms</Text>
      </View>and  
      <View style={{ borderBottomWidth: 0.2, borderBottomColor: 'black', }}>
        <Text style={{fontSize: width * 0.030,
        fontFamily:'NunitoSans-Semibold'}}>Privacy Policy</Text>
      </View>
    </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  contanier:{
     flex:1,backgroundColor:'white'
  },
    background:{
      width: width * 0.95,
      height: height * 0.24,  
        resizeMode:'contain'
    },
    loginbtn:{
      backgroundColor:'#008CFF',width:width * 0.95,height:height * 0.07,borderRadius:width * 0.03,
      marginLeft:width * 0.030,marginRight:width * 0.015,justifyContent:'center',marginTop:height * 0.00
    },
    whatsploginbtn:{
      backgroundColor:'#26D367',width:width * 0.95,height:height * 0.07,margin:width * 0.015,
     borderRadius:width * 0.03,marginTop:height * 0.15,justifyContent:'center',marginLeft:width * 0.030
    },profiletext:{
      fontWeight:'300',fontSize:width * 0.035,fontFamily:'NunitoSans-Regular'
    },
    profileimage:{
      height: width * 0.15, width: width * 0.15, 
      marginTop: width * 0.10, marginLeft: width * 0.06
    },
    text:{
      textAlign: 'center', marginTop: width * 0.025, fontSize: width * 0.030,
       fontWeight: '100',marginRight:width * 0.002,fontFamily:'NunitoSans-Regular' 
    },
    profileText:{
      display:'flex',flexDirection:'row',margin:width * 0.009,
      marginRight:width*0.06,marginLeft:width*0.04,
      justifyContent:'space-between'
    },
    profile:{
      display:'flex',flexDirection:'row'
    },
    loginText:{
      textAlign:'center',fontSize:width * 0.045,color:'white',fontFamily:'Roboto-Regular'
    },
    whatsappText:{
      textAlign:'center',fontSize:width * 0.045,fontFamily:'Roboto-Regular'
    }
})
