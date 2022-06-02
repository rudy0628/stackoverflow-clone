import { useCallback } from 'react';

import { useState } from 'react';
import { Issues } from '../models/Issue.model';

function useFetch() {
	const [data, setData] = useState<Issues>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchData = useCallback(async (url: string) => {
		setIsLoading(true);
		const response = await fetch(url);
		const data = await response.json();
		setData(data.items);
		setIsLoading(false);
	}, []);

	return [data, fetchData, isLoading] as const;
}

export default useFetch;
