import type { Document } from "../../../shared/index";

type Props = {
	documents: Document[];
};

const DocumentList = ({ documents }: Props) => {
	return (
		<ul>
			{documents.map((document) => (
				<li key={document.id}>{document.name}</li>
			))}
		</ul>
	);
};

export default DocumentList;
