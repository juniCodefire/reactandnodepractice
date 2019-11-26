import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from "./ContestPreview";

const ContestList = ({contests, onContestClick}) => {
	return (
		<div>
          {Object.keys(contests).map(contestID => 
	         <ContestPreview 
	         	key={contestID} 
	         	onClick={onContestClick}
	         	{...contests[contestID]} />
	      )}
	    </div>
	);
};

//ContestList Validation
ContestList.propTypes = {
	contests: PropTypes.object,
	onContestClick: PropTypes.func.isRequired,
}

export default ContestList; 