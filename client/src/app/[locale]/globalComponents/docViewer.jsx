import React, { useEffect, useState } from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const DocumentViewer = ({ docSrc }) => {
  const docs = [{ uri: docSrc }];

  return (
    <DocViewer
      pluginRenderers={DocViewerRenderers}
      documents={docs}
      className="h-[60rem] w-[40rem]"
    />
  );
};

export default DocumentViewer;
