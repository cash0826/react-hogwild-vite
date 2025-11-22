import { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogLists";
import Filter from "./Filter";
import HogForm from "./HogForm";
import hogs from "../porkers_data";

function App() {

	const [showGreased, setShowGreased] = useState(false);
	const [allHogs, setAllHogs] = useState(hogs);
	const [sortBy, setSortBy] = useState("");

	function handleShowGreased() {
			setShowGreased((previous) => !previous);
	}

	// derive the list to display by filtering then optionally sorting
	const filteredHogs = allHogs.filter(hog => (showGreased ? hog.greased : true));
	let displayedHogs = [...filteredHogs];

	if (sortBy === "name") {
		displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
	} else if (sortBy === "weight") {
		displayedHogs.sort((a, b) => a.weight - b.weight);
	}

	function handleAddHog(newHog) {
			console.log("New Pig Submitted:", newHog);
			setAllHogs((prev) => [...prev, newHog]);
	}

 	function handleSort(e) {
 		setSortBy((prev) => e.target.value);
 	}

	return (
			<div className="ui grid container App">
					<div className="sixteen wide column centered">
						<Nav />
					</div>

					<div className="ui eight wide column">
						<Filter onChangeShowGreased={handleShowGreased} onChangeHandleSort={handleSort} sortBy={sortBy} showGreased={showGreased} />
					</div>

					<div className="ui eight wide column">
						<HogForm onFormSubmission={handleAddHog} />
					</div>
            
					<div className="ui eight wide column">
						<HogList hogs={displayedHogs}/>
					</div>

			</div>
	);
}

export default App;
