function DessertsList(props) {
    // Implement the component here.
    const dessertData = props.data.filter((dessert) => { return dessert.calories <= 500 })
        .sort((a, b) => { return a.calories - b.calories })
        .map(dessert => {
            return <li key={dessert.name}>{dessert.name} - {dessert.calories} cal</li>
        });
    return <ul>{dessertData}</ul>;
}

export default DessertsList;