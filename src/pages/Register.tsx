import { useEffect } from "react";
import "../styles/Register.css";

const RegisterPage = () => {
  useEffect(() => {
    document.title = "Register";
  });

  return (
    <div className="auth-container">
      <nav className="navbar">
        <div className="logo">
          <svg
            width="194"
            height="31"
            viewBox="0 0 194 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.824 23.04L0 7.168H4.288L8.32 19.168L12.352 7.168H16.64L10.784 23.04H5.824Z"
              fill="#F64920"
            />
            <path
              d="M21.6315 4.704C20.8848 4.704 20.2662 4.48 19.7755 4.032C19.3062 3.584 19.0715 3.01867 19.0715 2.336C19.0715 1.65333 19.3062 1.09867 19.7755 0.671999C20.2662 0.224 20.8848 0 21.6315 0C22.3782 0 22.9862 0.224 23.4555 0.671999C23.9462 1.09867 24.1915 1.65333 24.1915 2.336C24.1915 3.01867 23.9462 3.584 23.4555 4.032C22.9862 4.48 22.3782 4.704 21.6315 4.704ZM19.5835 23.04V7.168H23.6795V23.04H19.5835Z"
              fill="#F64920"
            />
            <path
              d="M35.4507 23.424C33.9574 23.424 32.6241 23.0613 31.4508 22.336C30.2774 21.6107 29.3494 20.6187 28.6667 19.36C27.9841 18.1013 27.6427 16.672 27.6427 15.072C27.6427 13.472 27.9841 12.0533 28.6667 10.816C29.3494 9.55733 30.2774 8.576 31.4508 7.872C32.6241 7.14667 33.9574 6.784 35.4507 6.784C36.6454 6.784 37.6908 7.008 38.5868 7.456C39.4827 7.904 40.2081 8.53333 40.7627 9.344V0H44.8587V23.04H41.2108L40.7627 20.768C40.2507 21.472 39.5681 22.0907 38.7147 22.624C37.8827 23.1573 36.7947 23.424 35.4507 23.424ZM36.3148 19.84C37.6374 19.84 38.7147 19.4027 39.5467 18.528C40.4001 17.632 40.8268 16.4907 40.8268 15.104C40.8268 13.7173 40.4001 12.5867 39.5467 11.712C38.7147 10.816 37.6374 10.368 36.3148 10.368C35.0134 10.368 33.9361 10.8053 33.0827 11.68C32.2294 12.5547 31.8027 13.6853 31.8027 15.072C31.8027 16.4587 32.2294 17.6 33.0827 18.496C33.9361 19.392 35.0134 19.84 36.3148 19.84Z"
              fill="#F64920"
            />
            <path
              d="M56.9417 23.424C55.3418 23.424 53.9231 23.0827 52.6857 22.4C51.4484 21.7173 50.4777 20.7573 49.7738 19.52C49.0698 18.2827 48.7177 16.8533 48.7177 15.232C48.7177 13.5893 49.0591 12.128 49.7417 10.848C50.4457 9.568 51.4058 8.576 52.6217 7.872C53.8591 7.14667 55.3097 6.784 56.9737 6.784C58.5311 6.784 59.9071 7.12533 61.1017 7.808C62.2964 8.49067 63.2244 9.42933 63.8857 10.624C64.5684 11.7973 64.9098 13.1093 64.9098 14.56C64.9098 14.7947 64.8991 15.04 64.8777 15.296C64.8777 15.552 64.8671 15.8187 64.8457 16.096H52.7817C52.8671 17.3333 53.2937 18.304 54.0617 19.008C54.8511 19.712 55.8004 20.064 56.9097 20.064C57.7417 20.064 58.4351 19.8827 58.9897 19.52C59.5658 19.136 59.9924 18.6453 60.2697 18.048H64.4297C64.1311 19.0507 63.6297 19.968 62.9258 20.8C62.2431 21.6107 61.3897 22.2507 60.3657 22.72C59.3631 23.1893 58.2217 23.424 56.9417 23.424ZM56.9737 10.112C55.9711 10.112 55.0858 10.4 54.3177 10.976C53.5497 11.5307 53.0591 12.384 52.8457 13.536H60.7497C60.6857 12.4907 60.3017 11.6587 59.5977 11.04C58.8937 10.4213 58.0191 10.112 56.9737 10.112Z"
              fill="#F64920"
            />
            <path
              d="M76.1708 23.424C74.6348 23.424 73.2481 23.072 72.0107 22.368C70.7947 21.664 69.8241 20.6933 69.0988 19.456C68.3948 18.1973 68.0428 16.7467 68.0428 15.104C68.0428 13.4613 68.4054 12.0213 69.1308 10.784C69.8561 9.52533 70.8268 8.544 72.0428 7.84C73.2801 7.136 74.6667 6.784 76.2028 6.784C77.7174 6.784 79.0827 7.136 80.2988 7.84C81.5361 8.544 82.5068 9.52533 83.2108 10.784C83.9361 12.0213 84.2988 13.4613 84.2988 15.104C84.2988 16.7467 83.9361 18.1973 83.2108 19.456C82.5068 20.6933 81.5361 21.664 80.2988 22.368C79.0614 23.072 77.6854 23.424 76.1708 23.424ZM76.1708 19.872C77.2374 19.872 78.1654 19.4773 78.9548 18.688C79.7441 17.8773 80.1388 16.6827 80.1388 15.104C80.1388 13.5253 79.7441 12.3413 78.9548 11.552C78.1654 10.7413 77.2481 10.336 76.2028 10.336C75.1148 10.336 74.1761 10.7413 73.3868 11.552C72.6188 12.3413 72.2348 13.5253 72.2348 15.104C72.2348 16.6827 72.6188 17.8773 73.3868 18.688C74.1761 19.4773 75.1041 19.872 76.1708 19.872Z"
              fill="#F64920"
            />
            <path
              d="M97.569 23.424C96.3743 23.424 95.329 23.2 94.433 22.752C93.537 22.304 92.8117 21.6747 92.257 20.864L91.809 23.04H88.161V0H92.257V9.44C92.769 8.736 93.441 8.11733 94.273 7.584C95.1263 7.05067 96.225 6.784 97.569 6.784C99.0623 6.784 100.396 7.14667 101.569 7.872C102.742 8.59733 103.67 9.58933 104.353 10.848C105.036 12.1067 105.377 13.536 105.377 15.136C105.377 16.736 105.036 18.1653 104.353 19.424C103.67 20.6613 102.742 21.6427 101.569 22.368C100.396 23.072 99.0623 23.424 97.569 23.424ZM96.705 19.84C98.0063 19.84 99.0837 19.4027 99.937 18.528C100.79 17.6533 101.217 16.5227 101.217 15.136C101.217 13.7493 100.79 12.608 99.937 11.712C99.0837 10.816 98.0063 10.368 96.705 10.368C95.3823 10.368 94.2943 10.816 93.441 11.712C92.609 12.5867 92.193 13.7173 92.193 15.104C92.193 16.4907 92.609 17.632 93.441 18.528C94.2943 19.4027 95.3823 19.84 96.705 19.84Z"
              fill="#F64920"
            />
            <path
              d="M116.948 23.424C115.348 23.424 113.929 23.0827 112.692 22.4C111.455 21.7173 110.484 20.7573 109.78 19.52C109.076 18.2827 108.724 16.8533 108.724 15.232C108.724 13.5893 109.065 12.128 109.748 10.848C110.452 9.568 111.412 8.576 112.628 7.872C113.865 7.14667 115.316 6.784 116.98 6.784C118.537 6.784 119.913 7.12533 121.108 7.808C122.303 8.49067 123.231 9.42933 123.892 10.624C124.575 11.7973 124.916 13.1093 124.916 14.56C124.916 14.7947 124.905 15.04 124.884 15.296C124.884 15.552 124.873 15.8187 124.852 16.096H112.788C112.873 17.3333 113.3 18.304 114.068 19.008C114.857 19.712 115.807 20.064 116.916 20.064C117.748 20.064 118.441 19.8827 118.996 19.52C119.572 19.136 119.999 18.6453 120.276 18.048H124.436C124.137 19.0507 123.636 19.968 122.932 20.8C122.249 21.6107 121.396 22.2507 120.372 22.72C119.369 23.1893 118.228 23.424 116.948 23.424ZM116.98 10.112C115.977 10.112 115.092 10.4 114.324 10.976C113.556 11.5307 113.065 12.384 112.852 13.536H120.756C120.692 12.4907 120.308 11.6587 119.604 11.04C118.9 10.4213 118.025 10.112 116.98 10.112Z"
              fill="#F64920"
            />
            <path d="M128.561 23.04V0H132.657V23.04H128.561Z" fill="#F64920" />
            <path
              d="M142.514 23.424C141.149 23.424 140.029 23.2107 139.154 22.784C138.28 22.336 137.629 21.7493 137.202 21.024C136.776 20.2987 136.562 19.4987 136.562 18.624C136.562 17.152 137.138 15.9573 138.29 15.04C139.442 14.1227 141.17 13.664 143.474 13.664H147.506V13.28C147.506 12.192 147.197 11.392 146.578 10.88C145.96 10.368 145.192 10.112 144.274 10.112C143.442 10.112 142.717 10.3147 142.098 10.72C141.48 11.104 141.096 11.68 140.946 12.448H136.946C137.053 11.296 137.437 10.2933 138.098 9.44C138.781 8.58667 139.656 7.936 140.722 7.488C141.789 7.01867 142.984 6.784 144.306 6.784C146.568 6.784 148.349 7.34933 149.65 8.48C150.952 9.61067 151.602 11.2107 151.602 13.28V23.04H148.114L147.73 20.48C147.261 21.3333 146.6 22.0373 145.746 22.592C144.914 23.1467 143.837 23.424 142.514 23.424ZM143.442 20.224C144.616 20.224 145.522 19.84 146.162 19.072C146.824 18.304 147.24 17.3547 147.41 16.224H143.922C142.834 16.224 142.056 16.4267 141.586 16.832C141.117 17.216 140.882 17.696 140.882 18.272C140.882 18.8907 141.117 19.3707 141.586 19.712C142.056 20.0533 142.674 20.224 143.442 20.224Z"
              fill="#F64920"
            />
            <path
              d="M157.983 4.704C157.236 4.704 156.618 4.48 156.127 4.032C155.658 3.584 155.423 3.01867 155.423 2.336C155.423 1.65333 155.658 1.09867 156.127 0.671999C156.618 0.224 157.236 0 157.983 0C158.73 0 159.338 0.224 159.807 0.671999C160.298 1.09867 160.543 1.65333 160.543 2.336C160.543 3.01867 160.298 3.584 159.807 4.032C159.338 4.48 158.73 4.704 157.983 4.704ZM152.703 30.08V26.592H153.951C154.655 26.592 155.156 26.4533 155.455 26.176C155.754 25.8987 155.903 25.4293 155.903 24.768V7.168H159.999V24.768C159.999 26.688 159.508 28.0533 158.527 28.864C157.567 29.6747 156.255 30.08 154.591 30.08H152.703Z"
              fill="#F64920"
            />
            <path
              d="M169.945 23.424C168.58 23.424 167.46 23.2107 166.585 22.784C165.711 22.336 165.06 21.7493 164.633 21.024C164.207 20.2987 163.993 19.4987 163.993 18.624C163.993 17.152 164.57 15.9573 165.721 15.04C166.873 14.1227 168.602 13.664 170.906 13.664H174.938V13.28C174.938 12.192 174.628 11.392 174.01 10.88C173.391 10.368 172.623 10.112 171.706 10.112C170.874 10.112 170.148 10.3147 169.529 10.72C168.911 11.104 168.527 11.68 168.378 12.448H164.378C164.484 11.296 164.868 10.2933 165.529 9.44C166.212 8.58667 167.087 7.936 168.154 7.488C169.22 7.01867 170.415 6.784 171.738 6.784C173.999 6.784 175.78 7.34933 177.081 8.48C178.383 9.61067 179.034 11.2107 179.034 13.28V23.04H175.546L175.161 20.48C174.692 21.3333 174.031 22.0373 173.178 22.592C172.346 23.1467 171.268 23.424 169.945 23.424ZM170.874 20.224C172.047 20.224 172.954 19.84 173.594 19.072C174.255 18.304 174.671 17.3547 174.842 16.224H171.354C170.266 16.224 169.487 16.4267 169.018 16.832C168.548 17.216 168.314 17.696 168.314 18.272C168.314 18.8907 168.548 19.3707 169.018 19.712C169.487 20.0533 170.105 20.224 170.874 20.224Z"
              fill="#F64920"
            />
            <path
              d="M183.142 23.04V7.168H186.79L187.174 10.144C187.75 9.12 188.529 8.30933 189.51 7.712C190.513 7.09333 191.686 6.784 193.03 6.784V11.104H191.878C190.982 11.104 190.182 11.2427 189.478 11.52C188.774 11.7973 188.22 12.2773 187.814 12.96C187.43 13.6427 187.238 14.592 187.238 15.808V23.04H183.142Z"
              fill="#F64920"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.7755 4.032C20.2662 4.48 20.8848 4.704 21.6315 4.704C22.3782 4.704 22.9862 4.48 23.4555 4.032C23.9462 3.584 24.1915 3.01867 24.1915 2.336C24.1915 1.65333 23.9462 1.09867 23.4555 0.671999C22.9862 0.224 22.3782 0 21.6315 0C20.8848 0 20.2662 0.224 19.7755 0.671999C19.3062 1.09867 19.0715 1.65333 19.0715 2.336C19.0715 3.01867 19.3062 3.584 19.7755 4.032ZM19.5835 7.168V23.04H23.6795V7.168H19.5835ZM0 7.168L5.824 23.04H10.784L16.64 7.168H12.352L8.32 19.168L4.288 7.168H0ZM35.4507 23.424C33.9574 23.424 32.6241 23.0613 31.4508 22.336C30.2774 21.6107 29.3494 20.6187 28.6667 19.36C27.9841 18.1013 27.6427 16.672 27.6427 15.072C27.6427 13.472 27.9841 12.0533 28.6667 10.816C29.3494 9.55733 30.2774 8.576 31.4508 7.872C32.6241 7.14667 33.9574 6.784 35.4507 6.784C36.6454 6.784 37.6908 7.008 38.5868 7.456C39.4827 7.904 40.2081 8.53333 40.7627 9.344V0H44.8587V23.04H41.2108L40.7627 20.768C40.2507 21.472 39.5681 22.0907 38.7147 22.624C37.8827 23.1573 36.7947 23.424 35.4507 23.424ZM36.3148 19.84C37.6374 19.84 38.7147 19.4027 39.5467 18.528C40.4001 17.632 40.8268 16.4907 40.8268 15.104C40.8268 13.7173 40.4001 12.5867 39.5467 11.712C38.7147 10.816 37.6374 10.368 36.3148 10.368C35.0134 10.368 33.9361 10.8053 33.0827 11.68C32.2294 12.5547 31.8027 13.6853 31.8027 15.072C31.8027 16.4587 32.2294 17.6 33.0827 18.496C33.9361 19.392 35.0134 19.84 36.3148 19.84ZM52.6857 22.4C53.9231 23.0827 55.3418 23.424 56.9417 23.424C58.2217 23.424 59.3631 23.1893 60.3657 22.72C61.3897 22.2507 62.2431 21.6107 62.9258 20.8C63.6297 19.968 64.1311 19.0507 64.4297 18.048H60.2697C59.9924 18.6453 59.5658 19.136 58.9897 19.52C58.4351 19.8827 57.7417 20.064 56.9097 20.064C55.8004 20.064 54.8511 19.712 54.0617 19.008C53.2937 18.304 52.8671 17.3333 52.7817 16.096H64.8457C64.8671 15.8187 64.8777 15.552 64.8777 15.296C64.8991 15.04 64.9098 14.7947 64.9098 14.56C64.9098 13.1093 64.5684 11.7973 63.8857 10.624C63.2244 9.42933 62.2964 8.49067 61.1017 7.808C59.9071 7.12533 58.5311 6.784 56.9737 6.784C55.3097 6.784 53.8591 7.14667 52.6217 7.872C51.4058 8.576 50.4457 9.568 49.7417 10.848C49.0591 12.128 48.7177 13.5893 48.7177 15.232C48.7177 16.8533 49.0698 18.2827 49.7738 19.52C50.4777 20.7573 51.4484 21.7173 52.6857 22.4ZM54.3177 10.976C55.0858 10.4 55.9711 10.112 56.9737 10.112C58.0191 10.112 58.8937 10.4213 59.5977 11.04C60.3017 11.6587 60.6857 12.4907 60.7497 13.536H52.8457C53.0591 12.384 53.5497 11.5307 54.3177 10.976ZM76.1708 23.424C74.6348 23.424 73.2481 23.072 72.0107 22.368C70.7947 21.664 69.8241 20.6933 69.0988 19.456C68.3948 18.1973 68.0428 16.7467 68.0428 15.104C68.0428 13.4613 68.4054 12.0213 69.1308 10.784C69.8561 9.52533 70.8268 8.544 72.0428 7.84C73.2801 7.136 74.6667 6.784 76.2028 6.784C77.7174 6.784 79.0827 7.136 80.2988 7.84C81.5361 8.544 82.5068 9.52533 83.2108 10.784C83.9361 12.0213 84.2988 13.4613 84.2988 15.104C84.2988 16.7467 83.9361 18.1973 83.2108 19.456C82.5068 20.6933 81.5361 21.664 80.2988 22.368C79.0614 23.072 77.6854 23.424 76.1708 23.424ZM76.1708 19.872C77.2374 19.872 78.1654 19.4773 78.9548 18.688C79.7441 17.8773 80.1388 16.6827 80.1388 15.104C80.1388 13.5253 79.7441 12.3413 78.9548 11.552C78.1654 10.7413 77.2481 10.336 76.2028 10.336C75.1148 10.336 74.1761 10.7413 73.3868 11.552C72.6188 12.3413 72.2348 13.5253 72.2348 15.104C72.2348 16.6827 72.6188 17.8773 73.3868 18.688C74.1761 19.4773 75.1041 19.872 76.1708 19.872ZM105.377 15.1069C102.118 17.4506 99.2007 20.239 96.7134 23.3832C95.8684 23.3001 95.1083 23.0897 94.433 22.752C93.537 22.304 92.8117 21.6747 92.257 20.864L91.809 23.04H88.161V0H92.257V9.44C92.769 8.736 93.441 8.11733 94.273 7.584C95.1263 7.05067 96.225 6.784 97.569 6.784C99.0623 6.784 100.396 7.14667 101.569 7.872C102.742 8.59733 103.67 9.58933 104.353 10.848C105.032 12.099 105.373 13.5187 105.377 15.1069ZM121.414 7.99226C116.991 8.93891 112.819 10.5659 109.015 12.7584C109.185 12.0821 109.429 11.4453 109.748 10.848C110.452 9.568 111.412 8.576 112.628 7.872C113.865 7.14667 115.316 6.784 116.98 6.784C118.537 6.784 119.913 7.12533 121.108 7.808C121.212 7.86748 121.314 7.9289 121.414 7.99226ZM132.657 7.09533C131.928 7.05858 131.194 7.03998 130.456 7.03998C129.821 7.03998 129.189 7.05374 128.561 7.08099V0H132.657V7.09533ZM151.576 12.5752C147.91 10.5042 143.91 8.95566 139.676 8.03079C140.001 7.8252 140.35 7.64427 140.722 7.488C141.789 7.01867 142.984 6.784 144.306 6.784C146.568 6.784 148.349 7.34933 149.65 8.48C150.8 9.47881 151.442 10.8439 151.576 12.5752ZM159.999 18.7954C158.707 17.5732 157.339 16.4303 155.903 15.3744V7.168H159.999V18.7954ZM99.937 18.528C99.0837 19.4027 98.0063 19.84 96.705 19.84C95.3823 19.84 94.2943 19.4027 93.441 18.528C92.609 17.632 92.193 16.4907 92.193 15.104C92.193 13.7173 92.609 12.5867 93.441 11.712C94.2943 10.816 95.3823 10.368 96.705 10.368C98.0063 10.368 99.0837 10.816 99.937 11.712C100.79 12.608 101.217 13.7493 101.217 15.136C101.217 16.5227 100.79 17.6533 99.937 18.528ZM156.127 4.032C156.618 4.48 157.236 4.704 157.983 4.704C158.73 4.704 159.338 4.48 159.807 4.032C160.298 3.584 160.543 3.01867 160.543 2.336C160.543 1.65333 160.298 1.09867 159.807 0.671999C159.338 0.224 158.73 0 157.983 0C157.236 0 156.618 0.224 156.127 0.671999C155.658 1.09867 155.423 1.65333 155.423 2.336C155.423 3.01867 155.658 3.584 156.127 4.032ZM169.945 23.424C168.58 23.424 167.46 23.2107 166.585 22.784C165.711 22.336 165.06 21.7493 164.633 21.024C164.207 20.2987 163.993 19.4987 163.993 18.624C163.993 17.152 164.57 15.9573 165.721 15.04C166.873 14.1227 168.602 13.664 170.906 13.664H174.938V13.28C174.938 12.192 174.628 11.392 174.01 10.88C173.391 10.368 172.623 10.112 171.706 10.112C170.874 10.112 170.148 10.3147 169.529 10.72C168.911 11.104 168.527 11.68 168.378 12.448H164.378C164.484 11.296 164.868 10.2933 165.529 9.44C166.212 8.58667 167.087 7.936 168.154 7.488C169.22 7.01867 170.415 6.784 171.738 6.784C173.999 6.784 175.78 7.34933 177.081 8.48C178.383 9.61067 179.034 11.2107 179.034 13.28V23.04H175.546L175.161 20.48C174.692 21.3333 174.031 22.0373 173.178 22.592C172.346 23.1467 171.268 23.424 169.945 23.424ZM170.874 20.224C172.047 20.224 172.954 19.84 173.594 19.072C174.255 18.304 174.671 17.3547 174.842 16.224H171.354C170.266 16.224 169.487 16.4267 169.018 16.832C168.548 17.216 168.314 17.696 168.314 18.272C168.314 18.8907 168.548 19.3707 169.018 19.712C169.487 20.0533 170.105 20.224 170.874 20.224ZM186.79 7.168H183.142V23.04H187.238V15.808C187.238 14.592 187.43 13.6427 187.814 12.96C188.22 12.2773 188.774 11.7973 189.478 11.52C190.182 11.2427 190.982 11.104 191.878 11.104H193.03V6.784C191.686 6.784 190.513 7.09333 189.51 7.712C188.529 8.30933 187.75 9.12 187.174 10.144L186.79 7.168Z"
              fill="#FFBD3A"
            />
          </svg>
        </div>
      </nav>
      <section className="form-content">
        <div className="register">
          <div className="title-form">
            <h1 style={{ fontWeight: 600 }}>Pendaftaran Akun</h1>
            <p style={{ color: "#333333", marginTop: "5px" }}>
              Yuk, daftarkan akunmu sekarang juga!
            </p>
          </div>
          <div className="register-form">
            {/* <!-- Fullname input --> */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="fullname">
                Nama Lengkap <span className="red-color">&lowast;</span>
              </label>
              <input type="text" name="fullname" required />
            </div>

            {/* <!-- Email input --> */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="email">
                E-mail <span className="red-color">&lowast;</span>
              </label>
              <input type="text" name="email" required />
            </div>

            {/* <!-- Mobile Phone number input --> */}
            <div style={{display: "flex", flexDirection: "column"}}>
              <label htmlFor="mobile">
                Nomor HP <span className="red-color">&lowast;</span>
              </label>
              <div className="pnumber-select">
                <select id="phoneNumber" name="phone-number">
                  <option value="1">+62</option>
                  <option value="2">+63</option>
                  <option value="3">+64</option>
                  <option value="4">+65</option>
                </select>
                <input
                  style={{width: "100%"}}
                  type="text"
                  name="phoneNumber"
                  required
                />
              </div>
            </div>

            {/* <!-- Password input --> */}
            <div style={{display: "flex", flexDirection: "column"}}>
              <label htmlFor="password">
                Password <span className="red-color">&lowast;</span>
              </label>
              <div style={{display: "flex", alignItems: "center"}}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  style={{flex: "1"}}
                />
                <button
                  type="button"
                  id="togglePassword"
                  style={{marginLeft: "8px"}}
                >
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                      stroke="#3A3541"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                      stroke="#3A3541"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#3A3541"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* <!-- Confirm Password input --> */}
            <div style={{display: "flex", flexDirection: "column"}}>
              <label htmlFor="confirm-password">
                Konfirmasi Password
                <span className="red-color">&lowast;</span>
              </label>
              <div style={{display: "flex", alignItems: "center"}}>
                <input
                  type="password"
                  name="password"
                  id="confirmPassword"
                  required
                  style={{flex: "1"}}
                />
                <button
                  type="button"
                  id="toggleConfirmPassword"
                  style={{marginLeft: "8px"}}
                >
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                      stroke="#3A3541"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                      stroke="#3A3541"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#3A3541"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <a href="register.html" className="forgot-password">
                Lupa Password?
              </a>
            </div>
          </div>
          <div className="authentication-button">
            <button className="button register-button">
              <a href="./pages/login.html">Daftar</a>
            </button>
            <button type="submit" className="button login-button">
              <a href="./pages/login.html">Masuk</a>
            </button>
            <div className="line-container">
              <span className="text">atau</span>
            </div>
            <div style={{width: "100%"}}>
              <button className="button google-button">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4905 10.926C20.4905 10.0874 20.4224 9.47543 20.2752 8.84082H10.6992V12.6258H16.3201C16.2068 13.5664 15.5948 14.983 14.2349 15.9349L14.2159 16.0616L17.2436 18.4071L17.4534 18.4281C19.3798 16.6489 20.4905 14.0311 20.4905 10.926Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M10.6992 20.8983C13.453 20.8983 15.7648 19.9917 17.4534 18.4279L14.2349 15.9347C13.3737 16.5353 12.2177 16.9546 10.6992 16.9546C8.00211 16.9546 5.71297 15.1754 4.89695 12.7163L4.77734 12.7265L1.62906 15.1629L1.58789 15.2774C3.26508 18.6091 6.71016 20.8983 10.6992 20.8983Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.89695 12.7164C4.68164 12.0818 4.55703 11.4018 4.55703 10.6993C4.55703 9.9966 4.68164 9.31668 4.88562 8.68207L4.87992 8.54691L1.69219 6.07129L1.58789 6.1209C0.896641 7.50348 0.5 9.05605 0.5 10.6993C0.5 12.3425 0.896641 13.895 1.58789 15.2775L4.89695 12.7164Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M10.6992 4.44367C12.6144 4.44367 13.9063 5.27094 14.6429 5.96227L17.5213 3.1518C15.7535 1.50859 13.453 0.5 10.6992 0.5C6.71016 0.5 3.26508 2.78914 1.58789 6.12086L4.88563 8.68203C5.71297 6.22289 8.00211 4.44367 10.6992 4.44367Z"
                    fill="#EB4335"
                  />
                </svg>
                Masuk dengan Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
