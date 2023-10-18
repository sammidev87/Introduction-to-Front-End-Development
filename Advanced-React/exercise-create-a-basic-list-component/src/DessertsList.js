function DessertsList(props) {
    // Implement the component here.
    const under500Cal = props.data.filter((dessert) => dessert.calories <= 500);
    const sortedCalList = under500Cal.sort((a, b) => a.calories - b.calories);
    const dessertData = sortedCalList.map(dessert => {
        const dessertText = `${dessert.name} - ${dessert.calories} cal`
        return <li>{dessertText}</li>
    })
    return (
        <ul>
            {dessertData}
        </ul>
    );
  }
  
  export default DessertsList;