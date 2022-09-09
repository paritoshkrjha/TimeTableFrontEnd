import { useState } from "react";
import ButtonV1 from "../../../shared/widgets/ButtonV1";
import Dropdown from "../../../shared/widgets/Dropdown";
import BranchCount from "../components/BranchCount";
import Navbar from "../components/Navbar";
import SubjectCount from "../components/SubjectCount";

const Home = () => {
    let load = [];
    function setLoad(val){
        load = [...val];
    }
    
    return (
        <div className=" flex flex-col justify-center items-center">
            <Navbar load = {load} />
            <Dropdown fields={['IT','CS']} label='Enter Branch'/>
            <Dropdown fields={[1,2,3,4,5,6,7,8]} label='Enter Sem' />
            <BranchCount/>
            <SubjectCount fn = {setLoad}/>
        </div>
    )
}
export default Home;