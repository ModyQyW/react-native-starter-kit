import SignStore from "../store/SignStore"

export default function() {
	const signStore = new SignStore()
	return {
		signStore
	};
}
