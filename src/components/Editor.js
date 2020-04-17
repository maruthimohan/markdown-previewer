import React from 'react';
import './Editor.scss';

// Functional Component
const Editor = (props) => {

    return (
        <div className="editor">
            <div className="editor-header">Editor</div>
            <textarea className="editor-text-area" id="editor" value={props.markdown} onChange={props.handleMarkdownChange} />
        </div>
    )
}

export default Editor;