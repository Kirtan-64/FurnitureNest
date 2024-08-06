const RequestList = () => {
    const data = [1,2,3,4,5,6,7,8];
    reutrn (
        <div>
            {data.map(item) => {return(<RequestList key={item} />)}}
        </div>
    )
}

export default RequestList;