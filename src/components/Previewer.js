import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import './Previewer.scss';

// Functional Component
const Previewer = (props) => {

    return (
        <div className="previewer">
            <div className="preview-header">Preview</div>
            <div id="preview" className="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked(props.markdown))}}></div>
        </div>
    )
}

export default Previewer;