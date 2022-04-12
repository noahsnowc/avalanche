import {useQuill }from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import "./editor.css"
import React from 'react'; 




export default function QuillEditor(){
    // const theme = 'bubble';
    const theme = "snow";
    const scrollingContainer = '#scroll-container';
  
    const placeholder = "Compose an epic...";
  
    const { quill, quillRef } = useQuill( {theme, scrollingContainer ,placeholder});

    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
            console.log('Text change!');
            console.log(quill.getText()); // Get text only
            console.log(quill.getContents()); // Get delta contents
            console.log(quill.root.innerHTML); // Get innerHTML using quill
            console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
          });
        }
      }, [quill]);

    return (
    <div id="quill-container">
      <div ref={quillRef}/>
    </div>
    );
  };
  