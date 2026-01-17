const useApi = () => {
	const fetchData = async (url: string, options?: RequestInit) => {
		try {
			const apiOrigin = import.meta.env.VITE_API_ORIGIN;
			const fullUrl = `${apiOrigin}${url}`;

			const response = await fetch(fullUrl, options);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Failed to fetch data:", error);
			return undefined;
		}
	};

	return { fetchData };
};

export default useApi;
