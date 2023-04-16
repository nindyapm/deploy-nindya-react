const RandomButton = () => {
    return (
        <button className="btn btn-outline-primary" id="search-button" type="button"
        onClick={(e) => alert(Math.random() * 100)}>
            Random
        </button>
    );
};

export default RandomButton