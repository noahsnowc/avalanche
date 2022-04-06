import {useQuill }from 'react-quilljs';
import 'react-quill/dist/quill.snow.css';
import styled from "styled-components";
import "./editor.css"



export default function QuillEditor(){
    // const theme = 'bubble';
    const theme = "snow";
    const scrollingContainer = '#scroll-container';
  
    const placeholder = "Compose an epic...";
  
    const { quillRef } = useQuill( {theme, scrollingContainer ,placeholder});

    return (
    <div id="quill-container">
      <div ref={quillRef}/>
    </div>
    );
  };
  