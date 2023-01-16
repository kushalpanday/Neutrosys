import React, { useMemo} from "react";
import { useDropzone } from "react-dropzone";
import "./uploadFiles.css"
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "10px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out"
};

const focusedStyle = {
  borderColor: "#2196f3"
};

const acceptStyle = {
  borderColor: "#00e676"
};

const rejectStyle = {
  borderColor: "#ff1744"
};
export default function UploadFiles({ accept }) {
  // const [files, setFiles] = useState(null);
  // const onDrop = (acceptedFiles) => {
  //   setFiles(acceptedFiles[0]);
  // };
  const {
    getRootProps,
    getInputProps,
    open,
    acceptedFiles,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    // accept: { "image/*": [] }
    accept
  });

  const files = acceptedFiles.map((file) => (
    <p key={file.path}>
      {file.path} - {file.size} bytes
    </p>
  ));

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone", style })}>
        <input {...getInputProps()} />
        <button type="button" onClick={open} className="uploadpart">
          Upload Files
        </button>
        {console.log({ files })}
        {files.length > 0 ? (
          <p className="upload-file-job"> {files}</p>
        ) : (
          <p className="upload-file-job">Drag 'n' drop some files here</p>
        )}
      </div>
    </div>
  );
}
