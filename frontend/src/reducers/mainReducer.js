export const mainReducer = (state = { data: [] }, action) => {
	switch (action.type) {
		case "COUNTRY_DATA_REQUEST":
			return { data: [...state.data, action.payload] };

		case "CONTINENT_DATA_REQUEST":
			return { data: [...state.data, action.payload] };

		case "GLOBAL_DATA_REQUEST":
			return { data: [...state.data, action.payload] };

		case "CLEAR_DATA_FROM_STATE":
			return { data: [] };

		default:
			return state;
	}
};
