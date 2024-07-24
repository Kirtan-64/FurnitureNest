import Navbar from "../components/Navbar"
import Sidepannel from "../components/Sidepannel";
import Statcard from "../components/Statcard";

const DashboardPage = () => {
    return (
        <div className="flex flex-row w-full">
            <div><Sidepannel /></div>
            <div className="flex flex-col w-full">
                <div className="w-full"><Navbar /></div>
                <div className="flex flex-col w-full p-5"> 
                    <div className="w-full flex flex-row justify-between m-2">
                        <div className="w-1/3 m-2"><Statcard prop={{name: "total sale", data: "$90"}}/></div>
                        <div className="w-1/3 m-2"><Statcard prop={{name: "total rental", data: "$10"}}/></div>
                        <div className="w-1/3 m-2"><Statcard prop={{name: "total earnings", data: "$100"}}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;