import React from "react";

type FolderProps = {
	width: string;
	height: string;
}

const Folder = ({width, height}: FolderProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="icon icon-tabler icon-tabler-folder"
			width={width} height={height}
			viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
			fill="none" strokeLinecap="round" strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
		</svg>
	)
}

export default Folder;