import { useState } from "react";
import QuestionGen from "./QuestionGen";




const MainComponet = () => {
    // Outside Questions
    // const [PlaceholderQuestions] = useState([
    //     {name: "", type:"", yesValue: "", noValue:"", fixItValue:"", id: 1},
    // ])

    const [outsideQuestions] = useState([
        {name: "Parking lot clean?", type:"standards", yesValue: "The parking lot is clean.", noValue:"The parking lot is not clean.", fixItValue:".) The parking lot and sidewalks must be cleared of any debris including cigarette butts, trash, snow, etc.", id: 1},
        {name: "Dumbster area clean?", type:"standards", yesValue: "The dumpster area is clean.", noValue:"The dumpster area is not clean.", fixItValue:".) The dumbster area needs to be cleared of any debris, including trash, fixtures, pallets, etc.", id: 2},
        {name: "Outside garbage emptied?", type:"standards", yesValue: "The outside garbage cans were emptied.", noValue:"The outside garbage cans were not emptied.", fixItValue:".) The outside garbage cans must be emptied daily", id: 3},
        {name: "Customer satisfaction sign correct?", type:"standards", yesValue: "The customer satisfaction sign is correct.", noValue:"The customer satisfaction sign is not correct.", fixItValue:".) The Customer Satisfaction sign must be hung in the front window, with the DM's cell phone number (Not voice mail number).", id: 4},
    ])

    const [salesFloorQuestions] = useState([
        {name: "Good first impression?", type:"salesFloor", yesValue: "The sales floor makes a good first impression.", noValue:"The sales floor does not make a good first impression", fixItValue:".) You must stop each time you enter your store and evaluate if the appearance of your sales floor gives a good impression. Look for missing product(s), missing signs, dirty or non staightened shelves, etc.", id: 1},
        {name: "Floors look good?", type:"salesFloor", yesValue: "The floors look good.", noValue:"The floors look bad.", fixItValue:".) You must make sure your team is sweeping and mopping the floors every night.", id: 2},
        {name: "Shelves well straightened?", type:"salesFloor", yesValue: "Sales floor shelves look well straightened.", noValue:"Sales floor shelves do not look well straightened", fixItValue:".) You must train your team to keep your sales floor straightened. Remember, straightening is an all day task, but the closing team shouldn't leave untill the store looks right.", id: 3},
        {name: "Store has no missing price labels?", type:"salesFloor", yesValue: "Sales floor is not missing any price labels.", nosValue:"Sales floor is missing price labels.", fixItValue:".) Check your entire sales floor for missing label, and make replacements. Never allow items to be on the sales floor without a price.", id: 4},
        {name: "Store has no missing signs?", type:"salesFloor", yesValue: "Sales floor is not missing any signs.", noValue:"Sales floor is missing signs.", fixItValue:".) You need to check your entire sales floor for missing signs. Refer to your sign walk through for required signs, and placement.", id: 5},
        {name: "Planograms up to date?", type:"salesFloor", yesValue: "Sales floor planograms look up to date.", noValue:"Sales floor planograms do not look up to date.", fixItValue:".) You must make sure planograms get done the week they are assigned. Please develop a plan to get all planograms completed, and submit to me by email.", id: 6},
    ])


    const [standardsVal, setStandardsVal] = useState(" ")
    const [fixItVal, setFixItVal] = useState(" ")

    // ClickHandlers
    const OutsideClickHandlerYes = (id) => {
        //Stan
        let questionObject = outsideQuestions.filter((question) => question.id === id)
        let value = questionObject[0].yesValue
        //Add Good
        setStandardsVal(standardsVal + "%0D%0A" + value)
        let StanderdsTempVal = standardsVal + "%0D%0A" + value

        //Delete Bad
        let Edited = StanderdsTempVal.replace(`%0D%0A${questionObject[0].noValue}`, "");
        setStandardsVal(Edited)

        //Delete Fix It List
        let fixItEdited = fixItVal.replace(`%0D%0A%0D%0A${questionObject[0].fixItValue}`, "");
        setFixItVal(fixItEdited)
    }
    const OutsideClickHandlerNo = (id) => {
        let questionObject = outsideQuestions.filter((question) => question.id === id)
        let standardValue = questionObject[0].noValue
        let fixItValue = questionObject[0].fixItValue
        //Add Bad
        setStandardsVal(standardsVal + "%0D%0A" + standardValue)
        let StanderdsTempVal = standardsVal + "%0D%0A" + standardValue
        //Add Fix it List
        let fixItTempVal = fixItVal + "%0D%0A%0D%0A" + fixItValue
        setFixItVal(fixItTempVal)

        // Delete Good
        let Edited = StanderdsTempVal.replace(`%0D%0A${questionObject[0].yesValue}`, "");
        setStandardsVal(Edited)
    }

    const salesFloorClickHandlerYes = (id) => {
        //Stan
        let questionObject = salesFloorQuestions.filter((question) => question.id === id)
        let value = questionObject[0].yesValue
        //Add Good
        setStandardsVal(standardsVal + "%0D%0A" + value)
        let StanderdsTempVal = standardsVal + "%0D%0A" + value

        //Delete Bad
        let Edited = StanderdsTempVal.replace(`%0D%0A${questionObject[0].noValue}`, "");
        setStandardsVal(Edited)

        //Delete Fix It List
        let fixItEdited = fixItVal.replace(`%0D%0A%0D%0A${questionObject[0].fixItValue}`, "");
        setFixItVal(fixItEdited)
    }
    const salesFloorClickHandlerNo = (id) => {
        let questionObject = salesFloorQuestions.filter((question) => question.id === id)
        let standardValue = questionObject[0].noValue
        let fixItValue = questionObject[0].fixItValue
        //Add Bad
        setStandardsVal(standardsVal + "%0D%0A" + standardValue)
        let StanderdsTempVal = standardsVal + "%0D%0A" + standardValue
        //Add Fix it List
        let fixItTempVal = fixItVal + "%0D%0A%0D%0A" + fixItValue
        setFixItVal(fixItTempVal)

        // Delete Good
        let Edited = StanderdsTempVal.replace(`%0D%0A${questionObject[0].yesValue}`, "");
        setStandardsVal(Edited)
    }

    const [storeDMVal, setDMVal] = useState()
    const [storeIdVal, setStoreIdVal] = useState()

    const idChange = event => {
        setStoreIdVal(event.target.value)
    }

    const dmChange = event => {
        setDMVal(event.target.value)
    }

    //MailSetup

    var Standards = standardsVal
    var FixItList = fixItVal

    const current = new Date()
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    let toEmail = `s${storeIdVal}@stores.autozone.com,${storeDMVal}`
    let bodystring = `Visit Recap Report for store: ${storeIdVal} %0D%0AVisit Date: ${date} %0D%0A %0D%0ASTORE STANDARDS:%0D%0A${Standards} %0D%0A %0D%0ASAFTEY: %0D%0A %0D%0ALOSS PERVENTION: %0D%0A %0D%0AKPI PERFORMANCE %0D%0A %0D%0A %0D%0A %0D%0AFIX IT LIST:${FixItList} %0D%0A__________ %0D%0A %0D%0A`
    let mailtostring = `mailto:${toEmail} ?subject=Vist Recap - ${storeIdVal} - ${date} &body=${bodystring}`



    function handleClick(){
        if(storeIdVal==undefined){
            return alert("You cannot leave the store number box blank.")
        }else{
            if(isNaN(+storeIdVal)){
                return alert("The store number can only contain numbers.")
            }else{
                window.location.href = `${mailtostring}`;
            } 
        }
    }

    return ( 
        <div className="mainContent">
            {/* Store Information */}
            <div className="StoreInformationContent">
                    <div className="informationTitle">Information:</div>
                    <div className="smallhr"><hr /></div>
                    <div className="TextBox">
                        <input type="text" id="dmEmail" name="dmEmail" placeholder="DM Email" value={storeDMVal} onChange={dmChange}/>
                    </div>
                    <div className="TextBox">
                        <input type="text" id="storeNumber" name="storeNumber" placeholder="Store Number" value={storeIdVal} onChange={idChange}/>
                    </div>
            </div>
            <div className="StoreStandardsContent">
                <div className="storeStandardsTitle">Store Standards:</div>
                <div className="smallhr"><hr /></div>
                {/* Questions */}
                <div className="QuestionContent">
                    <div className="TopTitle">
                        <div className="SectionTitle">Outside Questions</div>
                        <div className="yesOrNo"> Yes | No </div>
                    </div>
                    <div className="OutsideQuestions"><QuestionGen question={outsideQuestions} ClickHandlerYes={OutsideClickHandlerYes} ClickHandlerNo={OutsideClickHandlerNo}/></div>
                    <div className="SectionTitle">Sales Floor</div>
                    <div className="salesFloorQuestions"><QuestionGen question={salesFloorQuestions} ClickHandlerYes={salesFloorClickHandlerYes} ClickHandlerNo={salesFloorClickHandlerNo}/></div>
                    <button onClick={handleClick}> Generate Email </button>
                </div>
            </div>
        </div>
     );
}
 
export default MainComponet;