"use client";

import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();

const MarkdownEditor = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = ({ text }: { text: string }) => {
    setContent(text);
  };

  const getWordAndLineCount = () => {
    const lines = content.split("\n");
    const wordCount = content
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    return { lineCount: lines.length, wordCount };
  };

  const { lineCount, wordCount } = getWordAndLineCount();

  return (
    <div className="relative">
      <MdEditor
        value={content}
        style={{ height: "400px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
        view={{ menu: true, md: false, html: true }}
      />
      <div className="justify-end flex mt-1 text-sm">
        <span>Lines: {lineCount}</span>
        <span className="ml-4">Words: {wordCount}</span>
      </div>
      {/* <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: mdParser.render(content) }}
      /> */}
    </div>
  );
};

export default MarkdownEditor;
