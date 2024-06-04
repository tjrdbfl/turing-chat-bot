import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const FileUploadBtn = () => {
    return(
        <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        className="button_AttachFileIcon"
    >
        <AttachFileIcon className="text-3xl m-0" />
        <VisuallyHiddenInput type="file" />
    </Button>
    );
}
export default FileUploadBtn;