const RequestListItem = ({ request }) => {
    return (
        <div className="p-2 w-full shadow-md m-2 bg-white flex flex-row justify-center space-between">
            <div>reuest descriptoion</div>
            <div className="p-1 flex flex-row">
                <div>button 1</div>
                <div>button 2</div>
            </div>
        </div>
    )
}

export default RequestListItem;