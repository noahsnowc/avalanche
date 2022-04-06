import {useQuill }from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';



export default function QuillEditor(){
    const theme = "snow";
    // const theme = 'bubble';
  
    const modules = {
    };
  
    const placeholder = "Compose an epic...";
  
    const formats = ["bold", "italic", "underline", "strike"];
  
    const { quillRef } = useQuill({ theme, modules, formats, placeholder });
  
    return (
      <div style={{ width: "auto", height: "auto"}}>
        <div ref={quillRef} />
      </div>
    );
  };
  