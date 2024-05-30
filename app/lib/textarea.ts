import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import { CurrentTheme } from '../components/drawer/service/currentTheme';

export const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
    line-height: 1.2;
    font-size: 18px;
    padding: 15px 10px;
    border-radius: 8px;

    /* Hide scrollbars for all browsers */
    overflow: hidden;

    /* Firefox (optional, for a cleaner look) */
    scrollbar-width: none;

    // firefox
    &:focus-visible {
      outline: 0;
    }

    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
  
      &::-webkit-scrollbar-track {
        background: ${theme.palette.mode === 'dark' ? '#27272a' : '#f5f5f5'}; // Adjust based on your background color
      }
  
      &::-webkit-scrollbar-thumb {
        background: ${theme.palette.mode === 'dark' ? '#888888' : '#a9a9a9'}; // Adjust based on your desired thumb color
        border-radius: 10px; // Optional: Rounded corners for the thumb
      }
  
      /* Scrollbar customization for Firefox */
      scrollbar-width: thin;
      scrollbar-color: ${theme.palette.mode === 'dark' ? '#888888 transparent' : '#a9a9a9 transparent'}; // Adjust based on your desired colors
  `,
);
