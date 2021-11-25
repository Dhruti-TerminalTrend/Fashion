import React from 'react';
import Theme, {Box} from '../../Components/Theme';
import Svg, {Path} from 'react-native-svg';

const SIZE = Theme.borderRadii.l * 2;

const SocialIcon = ({children}) => {
  return (
    <Box
      backgroundColor="white"
      marginHorizontal="s"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center">
      {children}
    </Box>
  );
};

const Google = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={20}
      width={20}>
      <Path
        fill="#fbbb00"
        d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
      />
      <Path
        fill="#518ef8"
        d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
      />
      <Path
        fill="#28b446"
        d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
      />
      <Path
        fill="#f14336"
        d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
      />
    </Svg>
  );
};
const Facebook = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={18}
      viewBox="88.428 12.828 107.543 207.085">
      <Path
        fill="#3c5a9a"
        d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
      />
    </Svg>
  );
};

const Apple = () => {
  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width={25}
        height={25}>
        <Path
          fill="#000"
          d="M14.94 5.19A4.38 4.38 0 0016 2a4.44 4.44 0 00-3 1.52 4.17 4.17 0 00-1 3.09 3.69 3.69 0 002.94-1.42zm2.52 7.44a4.51 4.51 0 012.16-3.81 4.66 4.66 0 00-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 00-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82 2 .82 3.3.79 2.22-1.24 3.06-2.45a11 11 0 001.38-2.85 4.41 4.41 0 01-2.68-4.04z"
        />
      </Svg>
    </>
  );
};

const SocialLogin = () => {
  return (
    <>
      <Box flexDirection="row" justifyContent="center">
        <SocialIcon children={<Facebook />} />
        <SocialIcon children={<Google />} />
        <SocialIcon children={<Apple />} />
      </Box>
    </>
  );
};

export default SocialLogin;
