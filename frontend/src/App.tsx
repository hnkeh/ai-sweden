import { useEffect, useState } from "react";
import type { Document } from "../../shared/index";
import DocumentList from "./components/document-list";
import useApi from "./hooks/use-api";
import Button from "./ui/button";
import "./App.css";

const App = () => {
	const [documents, setDocuments] = useState<Document[]>([]);
	const { fetchData } = useApi();

  useEffect(() => {
		loadDocuments();
	}, []);

	const loadDocuments = async () => {
		const data = await fetchData("/documents");
		setDocuments(data);
	};

	return (
		<>
			<DocumentList documents={documents} />
			<div style={{ textAlign: "center" }}>
				<Button onClick={loadDocuments}>Refresh</Button>
			</div>
		</>
	);
};

export default App;
