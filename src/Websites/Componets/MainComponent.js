import { useState } from "react";
import QuestionGen from "./QuestionGen";


const MainComponet = () => {
    // Outside Questions
    // const [PlaceholderQuestions] = useState([
    //     {name: "", type:"", yesValue: "", noValue:"", fixItValue:".) ", id: 1},
    // ])


    //Standerds 
    const [outsideQuestions] = useState([
        {name: "Parking lot clean?", type:"standards", yesValue: "The parking lot is clean.", noValue:"The parking lot is not clean.", fixItValue:".) The parking lot and sidewalks must be cleared of any debris including cigarette butts, trash, snow, etc.", id: 1},
        {name: "Dumpster area clean?", type:"standards", yesValue: "The dumpster area is clean.", noValue:"The dumpster area is not clean.", fixItValue:".) The dumpster area needs to be cleared of any debris, including trash, fixtures, pallets, etc.", id: 2},
        {name: "Outside garbage emptied?", type:"standards", yesValue: "The outside garbage cans were emptied.", noValue:"The outside garbage cans were not emptied.", fixItValue:".) The outside garbage cans must be emptied daily", id: 3},
        {name: "Customer satisfaction sign correct?", type:"standards", yesValue: "The customer satisfaction sign is correct.", noValue:"The customer satisfaction sign is not correct.", fixItValue:".) The Customer Satisfaction sign must be hung in the front window, with the DM's cell phone number (Not voice mail number).", id: 4},
    ])

    const [salesFloorQuestions] = useState([
        {name: "Good first impression?", type:"salesFloor", yesValue: "The sales floor makes a good first impression.", noValue:"The sales floor does not make a good first impression", fixItValue:".) You must stop each time you enter your store and evaluate if the appearance of your sales floor gives a good impression. Look for missing product(s), missing signs, dirty or non straightened shelves, etc.", id: 1},
        {name: "Floors look good?", type:"salesFloor", yesValue: "The floors look good.", noValue:"The floors look bad.", fixItValue:".) You must make sure your team is sweeping and mopping the floors every night.", id: 2},
        {name: "Shelves well straightened?", type:"salesFloor", yesValue: "Sales floor shelves look well straightened.", noValue:"Sales floor shelves do not look well straightened", fixItValue:".) You must train your team to keep your sales floor straightened. Remember, straightening is an all day task, but the closing team shouldn't leave until the store looks right.", id: 3},
        {name: "Store has no missing price labels?", type:"salesFloor", yesValue: "Sales floor is not missing any price labels.", nosValue:"Sales floor is missing price labels.", fixItValue:".) Check your entire sales floor for missing label, and make replacements. Never allow items to be on the sales floor without a price.", id: 4},
        {name: "Store has no missing signs?", type:"salesFloor", yesValue: "Sales floor is not missing any signs.", noValue:"Sales floor is missing signs.", fixItValue:".) You need to check your entire sales floor for missing signs. Refer to your sign walk through for required signs, and placement.", id: 5},
        {name: "Planograms up to date?", type:"salesFloor", yesValue: "Sales floor planograms look up to date.", noValue:"Sales floor planograms do not look up to date.", fixItValue:".) You must make sure planograms get done the week they are assigned. Please develop a plan to get all planograms completed, and submit to me by email.", id: 6},
    ])

    const [officeQuestions] = useState([
        {name: "Office floor clean and mopped?", type:"office", yesValue: "Office floor clean and mopped.", noValue:"Office floor is not clean and mopped.", fixItValue:".) You must make sure your team is sweeping and mopping the office floor regularly.", id: 1},
        {name: "Bulletin boards set correctly, and updated?", type:"office", yesValue: "Office bulletin boards are set correctly and updated.", noValue:"Office bulletin boards are not set correctly, and updated.", fixItValue:".) You must make sure that all office boards are set correctly, and updated daily.", id: 2},
        {name: "Office counter clean and organized?", type:"office", yesValue: "Office counters are clean and organized.", noValue:"Office counters are not clean and organized.", fixItValue:".) Please clean off all office counters, and properly file reports.", id: 3},
    ])

    const [hardPartsQuestions] = useState([
        {name: "Hard parts area well straightened?", type:"hardParts", yesValue: "Hard parts area is well straightened .", noValue:"Hard parts area is not well straightened.", fixItValue:".) Your hard parts area needs to be straightened everyday. Train your team to understand that it is important to keep the hard parts looking as good as the sales floor.", id: 1},
        {name: "Area has no parts on the floor?", type:"hardParts", yesValue: "Hard parts area does not have parts on the floor.", noValue:"Hard parts area has parts on the floor.", fixItValue:".) You must get all parts off the floor and into the flexograms where they belong. Having parts on the floor is a safety issue!", id: 2},
        {name: "Flexograms look up to date?", type:"hardParts", yesValue: "Hard part flexograms up to date.", noValue:"Hard part flexograms do not look up to date.", fixItValue:".) Flexograms must get completed the week that they are assigned. Please develop a plan to get them completed, and submit it to me by email. ", id: 3},
        {name: "Bathrooms are both clean and stocked?", type:"hardParts", yesValue: "Bathrooms are clean, and well stocked.", noValue:"Bathrooms are not clean and well stocked.", fixItValue:".) Please train your team to clean the bathrooms daily. Remember, lead by example!", id: 4},
    ])

    //Safety 
    const [safetyQuestions] = useState([
        {name: "Oil tank is clean and kept closed?", type:"safety", yesValue: "Oil recycling tank is clean, and kept closed.", noValue:"Oil recycling tank is not clean, and kept closed.", fixItValue:".) All oil is to be added to the recycling tank by an autozoner as soon as it is received. Keep the oil tank clean and the lid closed.", id: 1},
        {name: "Battery core pallet correctly stacked?", type:"safety", yesValue: "Battery core pallet is correctly stacked.", noValue:"Battery core pallet is not correctly stacked.", fixItValue:".) Train your team to correctly stack cores on the return pallet. Failure to properly maintain the core pallet is a safety issue!", id: 2},
        {name: "Retail waste area inspected weekly?", type:"safety", yesValue: "The Retail Waste area is inspected weekly.", noValue:"The Retail Waste area is not inspected weekly.", fixItValue:".) The Retail Waste area must get inspected each week, Failure to do so could result in AutoZone getting fined!", id: 3},
        {name: "Safety board updated?", type:"safety", yesValue: "Safety board is up to date.", noValue:"Safety board is not up to date.", fixItValue:".) Please make sure the safety board is updated every week. Allowing this board to be come outdated sends a message to your team that safety is not a priority.", id: 4},
        {name: "Tape on all ladders?", type:"safety", yesValue: "There is tape on all of the ladders.", noValue:"There is not tape on all of the ladders.", fixItValue:".) Please make sure there is tape on all ladders for zoners to use, so that all hard part boxes stay closed.", id: 5},
        {name: "Hard Parts boxes taped up?", type:"safety", yesValue: "There are no open hard part boxes.", noValue:"There are open hard part boxes.", fixItValue:".) While touring the store I found hard part boxes that were open. Open boxes are a safety issue. Please make sure your team gets these boxes sealed up.", id: 6},
        {name: "All Drivers are MVR Approved?", type:"safety", yesValue: "All drivers are MVR approved.", noValue:"Not all drivers are MVR approved.", fixItValue:".) All drivers, CS and CSMs must be 'Driver Approved'. Do not allow anyone to drive a company vehicle unless they are listed as an 'Approved Driver'!", id: 7},
    ])

    //Loss Prevention 
    const [lossPreventionQuestions] = useState([
        {name: "DIY Daily Packet is correct?", type:"lossPrevention", yesValue: "The DIY daily packet is correct.", noValue:"The DIY daily packet is not correct.", fixItValue:".) Please make sure your team is putting the correct paperwork in the DIY Daily Packet each day, including that days banking, PCI report, and overstock report.", id: 1},
        {name: "Item adjustments under $1000?", type:"lossPrevention", yesValue: "This weeks item adjustments are under $1000.", noValue:"This weeks item adjustments are over $1000.", fixItValue:".) Your item adjustments are over $1000 this week. Please go back through all adjustments and insure they are correct.", id: 2},
        {name: "Inventory Control binder used correctly?", type:"lossPrevention", yesValue: "The Inventory Control binder is being used correctly.", noValue:"The Inventory Control binder is not being used correctly.", fixItValue:".) Please make sure that you are following the Inventory Control Matrix correctly, including filing the correct paperwork in the Inventory Control binder.", id: 3},
        {name: "MNDR completed correctly?", type:"lossPrevention", yesValue: "MNDR is being completed correctly.", noValue:"MNDR is not being completed correctly.", fixItValue:".) You must retrain your team on the proper way to complete the MNDR, including insuring it gets done everyday.", id: 4},
        {name: "VDP being managed correctly?", type:"lossPrevention", yesValue: "VDP is being correctly managed.", noValue:"VDP is not being correctly managed.", fixItValue:".) You must retrain your team on the proper way to handle VDP orders.", id: 5},
        {name: "LP Dashboard worked?", type:"lossPrevention", yesValue: "The LP Dashboard is being worked correctly.", noValue:"The LP Dashboard is not being correctly worked.", fixItValue:".) You need to review the LP Dashboard weekly, insure each zoner initials next to their name, and that the uncredited recalls and returns are properly worked.", id: 6},
        {name: "Paid Outs are being used correctly?", type:"lossPrevention", yesValue: "Paid Outs are being used correctly.", noValue:"Paid Outs are not being used correctly.", fixItValue:".) You must make sure paid-out are only getting done with the proper authorization and documentation.", id: 7},
        {name: "PnL reviewd, and initialed?", type:"lossPrevention", yesValue: "The PnL has been reviewed by the SM and CSM, with notes.", noValue:"The PnL has not been reviewed by the SM and CSM, with notes.", fixItValue:".) You and the CSM must review the PnL every period, make notes, and initial.", id: 8},
        {name: "COM invoice recap being done correctly?", type:"lossPrevention", yesValue: "The commercial invoice recap is being done correctly every day.", noValue:"The commercial invoice recap is not being done correctly each day.", fixItValue:".) A commercial invoice recap must get printed and worked every day and filed in the COM daily packet.", id: 9},
        {name: "COM invoices are signed?", type:"lossPrevention", yesValue: "Commercial invoices are all signed.", noValue:"Commercial invoices are not all signed.", fixItValue:".) You must check to insure that all commercial invoices have signature from both a member of DIY management, and the customer.", id: 10},
        {name: "COM hand slips being used correctly?", type:"lossPrevention", yesValue: "Commercial hand slips are being filled out, and used, correctly.", noValue:"Commercial hand slips are not being filled out, or used, correctly.", fixItValue:".) All Commercial hand slips must have three signatures, and be used for all returns and payments.", id: 11},
        {name: "COM returns processed same day received?", type:"lossPrevention", yesValue: "All commercial returns are processed the same day received.", noValue:"All commercial returns are not processed the same day they are received.", fixItValue:".) Please insure that all Commercial returns get processed the same day they are received.", id: 12},
        {name: "COM cores being picked up within 72hrs?", type:"lossPrevention", yesValue: "Commercial cores are being resolved within 72 hours.", noValue:"Commercial cores are not being resolved within 72 hours.", fixItValue:".) Please insure that all Commercial cores are either getting picked up or billed within 72 hours.", id: 13},
        {name: "COM AZO balances under control?", type:"lossPrevention", yesValue: "Commercial AZO balances are under control.", noValue:"Commercial AZO balances are not under control.", fixItValue:".) Please insure that all Commercial AZO accounts are kept current, and under credit limits.", id: 14},
        {name: "Register 45 being reconciled correctly?", type:"lossPrevention", yesValue: "Register 35 is being correctly reconciled everyday.", noValue:"Register 35 is not being correctly reconciled everyday.", fixItValue:".) Please insure that register 35 is getting reconciled everyday. ", id: 15},
    ])

    //KPI Preformance 
    const [kpiQuestions] = useState([
        {name: "DIY sales are above last year?", type:"kpi", yesValue: "YTD DIY sales are above last year.", noValue:"YTD DIY sales are below last year.", fixItValue:".) Your store is currently behind last years DIY sales. You must work with your team to increase sales! ", id: 1},
        {name: "COM sales are above last year?", type:"kpi", yesValue: "YTD COM sales are above last year.", noValue:"YTD COM sales are below last year.", fixItValue:"", id: 2},
        {name: "Wittdtjr is +2% vs LY?", type:"kpi", yesValue: "The store's Wittdtjr score is currently +2 percent vs LY.", noValue:"The store's Wittdtjr score is currently not +2 percent vs LY.", fixItValue:"", id: 3},
        {name: "COC is over 2%?", type:"kpi", yesValue: "Store's COC score is over 2 percent.", noValue:"Store's COC score is under 2 percent.", fixItValue:"", id: 4},
        {name: "Air/Oil is over 10%?", type:"kpi", yesValue: "Store's Air/Oil is over 10 percent.", noValue:"Store's Air/Oil is under 10 percent.", fixItValue:"", id: 5},
        {name: "Oil Bundle deals are over 3%?", type:"kpi", yesValue: "Store's oil bundle score is over 3 percent.", noValue:"Store's oil bundle deal score is under 3 percent.", fixItValue:"", id: 6},
        {name: "NonApps are over 3%?", type:"kpi", yesValue: "The store's NonApp score is over 3 percent.", noValue:"The store's NonApp score is under 3 percent.", fixItValue:"", id: 7},
        {name: "AZ Rewards are over 40%?", type:"kpi", yesValue: "The store's AZ Rewards score is over 40 percent.", noValue:"The store's AZ Rewards score is under 40 percent.", fixItValue:"", id: 8},
        {name: "Phone Shop 6wk is over 80%?", type:"kpi", yesValue: "The store's 6wk phone shop score is over 80 percent.", noValue:"The store's 6wk phone shop score is under 80 percent.", fixItValue:"", id: 9},
        {name: "Customer Satisfaction Score is over 70%?", type:"kpi", yesValue: "The store's customer satisfaction score is over 70 percent.", noValue:"The store's customer satisfaction score is under 70 percent.", fixItValue:"", id: 10},
        {name: "Duratester is over 70%?", type:"kpi", yesValue: "The store's Duratester score is over 70 percent.", noValue:"The store's Duratester score is under 70 percent.", fixItValue:"", id: 11},
    ])


    const [standardsVal, setStandardsVal] = useState(" ")
    const [fixItVal, setFixItVal] = useState(" ")

    // ClickHandlers
    const OutsideClickHandlerYes = (id) => {
        //Stan
        let questionObject = outsideQuestions.filter((question) => question.id === id)
        let value = questionObject[0].yesValue
        //Add Good
        setStandardsVal(standardsVal + "\n" + value)
        let StanderdsTempVal = standardsVal + "\n" + value

        //Delete Bad
        let Edited = StanderdsTempVal.replace(`\n${questionObject[0].noValue}`, "");
        setStandardsVal(Edited)

        //Delete Fix It List
        let fixItEdited = fixItVal.replace(`\n\n${questionObject[0].fixItValue}`, "");
        setFixItVal(fixItEdited)
    }
    const OutsideClickHandlerNo = (id) => {
        let questionObject = outsideQuestions.filter((question) => question.id === id)
        let standardValue = questionObject[0].noValue
        let fixItValue = questionObject[0].fixItValue
        //Add Bad
        setStandardsVal(standardsVal + "\n" + standardValue)
        let StanderdsTempVal = standardsVal + "\n" + standardValue
        //Add Fix it List
        let fixItTempVal = fixItVal + "\n\n" + fixItValue
        setFixItVal(fixItTempVal)

        // Delete Good
        let Edited = StanderdsTempVal.replace(`\n${questionObject[0].yesValue}`, "");
        setStandardsVal(Edited)
    }

    const salesFloorClickHandlerYes = (id) => {
        //Stan
        let questionObject = salesFloorQuestions.filter((question) => question.id === id)
        let value = questionObject[0].yesValue
        //Add Good
        setStandardsVal(standardsVal + "\n" + value)
        let StanderdsTempVal = standardsVal + "\n" + value

        //Delete Bad
        let Edited = StanderdsTempVal.replace(`\n${questionObject[0].noValue}`, "");
        setStandardsVal(Edited)

        //Delete Fix It List
        let fixItEdited = fixItVal.replace(`\n\n${questionObject[0].fixItValue}`, "");
        setFixItVal(fixItEdited)
    }
    const salesFloorClickHandlerNo = (id) => {
        let questionObject = salesFloorQuestions.filter((question) => question.id === id)
        let standardValue = questionObject[0].noValue
        let fixItValue = questionObject[0].fixItValue
        //Add Bad
        setStandardsVal(standardsVal + "\n" + standardValue)
        let StanderdsTempVal = standardsVal + "\n" + standardValue
        //Add Fix it List
        let fixItTempVal = fixItVal + "\n\n" + fixItValue
        setFixItVal(fixItTempVal)

        // Delete Good
        let Edited = StanderdsTempVal.replace(`\n${questionObject[0].yesValue}`, "");
        setStandardsVal(Edited)
    }

    const officeClickHandlerYes = (id) => {
        //Stan
        let questionObject = officeQuestions.filter((question) => question.id === id)
        let value = questionObject[0].yesValue
        //Add Good
        setStandardsVal(standardsVal + "\n" + value)
        let StanderdsTempVal = standardsVal + "\n" + value

        //Delete Bad
        let Edited = StanderdsTempVal.replace(`\n${questionObject[0].noValue}`, "");
        setStandardsVal(Edited)

        //Delete Fix It List
        let fixItEdited = fixItVal.replace(`\n\n${questionObject[0].fixItValue}`, "");
        setFixItVal(fixItEdited)
    }
    const officeClickHandlerNo = (id) => {
        let questionObject = officeQuestions.filter((question) => question.id === id)
        let standardValue = questionObject[0].noValue
        let fixItValue = questionObject[0].fixItValue
        //Add Bad
        setStandardsVal(standardsVal + "\n" + standardValue)
        let StanderdsTempVal = standardsVal + "\n" + standardValue
        //Add Fix it List
        let fixItTempVal = fixItVal + "\n\n" + fixItValue
        setFixItVal(fixItTempVal)

        // Delete Good
        let Edited = StanderdsTempVal.replace(`\n${questionObject[0].yesValue}`, "");
        setStandardsVal(Edited)
    }

    const hardPartsClickHandlerYes = (id) => {
        //Stan
        let questionObject = hardPartsQuestions.filter((question) => question.id === id)
        let value = questionObject[0].yesValue
        //Add Good
        setStandardsVal(standardsVal + "\n" + value)
        let StanderdsTempVal = standardsVal + "\n" + value

        //Delete Bad
        let Edited = StanderdsTempVal.replace(`\n${questionObject[0].noValue}`, "");
        setStandardsVal(Edited)

        //Delete Fix It List
        let fixItEdited = fixItVal.replace(`\n\n${questionObject[0].fixItValue}`, "");
        setFixItVal(fixItEdited)
    }
    const hardPartsClickHandlerNo = (id) => {
        let questionObject = hardPartsQuestions.filter((question) => question.id === id)
        let standardValue = questionObject[0].noValue
        let fixItValue = questionObject[0].fixItValue
        //Add Bad
        setStandardsVal(standardsVal + "\n" + standardValue)
        let StanderdsTempVal = standardsVal + "\n" + standardValue
        //Add Fix it List
        let fixItTempVal = fixItVal + "\n\n" + fixItValue
        setFixItVal(fixItTempVal)

        // Delete Good
        let Edited = StanderdsTempVal.replace(`\n${questionObject[0].yesValue}`, "");
        setStandardsVal(Edited)
    }

    //safety
    const [safetyVal, setSafetyVal] = useState(" ")

    const safetyClickHandlerYes = (id) => {
        //Stan
        let questionObject = safetyQuestions.filter((question) => question.id === id)
        let value = questionObject[0].yesValue
        //Add Good
        setSafetyVal(safetyVal + "\n" + value)
        let SafetyTempVal = safetyVal + "\n" + value

        //Delete Bad
        let Edited = SafetyTempVal.replace(`\n${questionObject[0].noValue}`, "");
        setSafetyVal(Edited)

        //Delete Fix It List
        let fixItEdited = fixItVal.replace(`\n\n${questionObject[0].fixItValue}`, "");
        setFixItVal(fixItEdited)
    }
    const safetyClickHandlerNo = (id) => {
        let questionObject = safetyQuestions.filter((question) => question.id === id)
        let safetyValue = questionObject[0].noValue
        let fixItValue = questionObject[0].fixItValue
        //Add Bad
        setSafetyVal(safetyVal + "\n" + safetyValue)
        let SafetyTempVal = safetyVal + "\n" + safetyValue
        //Add Fix it List
        let fixItTempVal = fixItVal + "\n\n" + fixItValue
        setFixItVal(fixItTempVal)

        // Delete Good
        let Edited = SafetyTempVal.replace(`\n${questionObject[0].yesValue}`, "");
        setSafetyVal(Edited)
    }

    //Loss Prevention
    const [lossPreventionVal, setLossPreventionVal] = useState(" ")

    const lossPreventionClickHandlerYes = (id) => {
        //Stan
        let questionObject = lossPreventionQuestions.filter((question) => question.id === id)
        let value = questionObject[0].yesValue
        //Add Good
        setLossPreventionVal(lossPreventionVal + "\n" + value)
        let LossPreventionTempVal = lossPreventionVal + "\n" + value

        //Delete Bad
        let Edited = LossPreventionTempVal.replace(`\n${questionObject[0].noValue}`, "");
        setLossPreventionVal(Edited)

        //Delete Fix It List
        let fixItEdited = fixItVal.replace(`\n\n${questionObject[0].fixItValue}`, "");
        setFixItVal(fixItEdited)
    }
    const lossPreventionClickHandlerNo = (id) => {
        let questionObject = lossPreventionQuestions.filter((question) => question.id === id)
        let lossPreventionValue = questionObject[0].noValue
        let fixItValue = questionObject[0].fixItValue
        //Add Bad
        setLossPreventionVal(lossPreventionVal + "\n" + lossPreventionValue)
        let LossPreventionTempVal = lossPreventionVal + "\n" + lossPreventionValue
        //Add Fix it List
        let fixItTempVal = fixItVal + "\n\n" + fixItValue
        setFixItVal(fixItTempVal)

        // Delete Good
        let Edited = LossPreventionTempVal.replace(`\n${questionObject[0].yesValue}`, "");
        setLossPreventionVal(Edited)
    }

    //KPI
    const [kpiVal, setKpiVal] = useState(" ")

    const kpiClickHandlerYes = (id) => {
        //Stan
        let questionObject = kpiQuestions.filter((question) => question.id === id)
        let value = questionObject[0].yesValue
        //Add Good
        setKpiVal(kpiVal + "\n" + value)
        let KpiTempVal = kpiVal + "\n" + value

        //Delete Bad
        let Edited = KpiTempVal.replace(`\n${questionObject[0].noValue}`, "");
        setKpiVal(Edited)

        //Delete Fix It List
        let fixItEdited = fixItVal.replace(`\n\n${questionObject[0].fixItValue}`, "");
        setFixItVal(fixItEdited)
    }
    const kpiClickHandlerNo = (id) => {
        let questionObject = kpiQuestions.filter((question) => question.id === id)
        let kpiValue = questionObject[0].noValue
        let fixItValue = questionObject[0].fixItValue
        //Add Bad
        setKpiVal(kpiVal + "\n" + kpiValue)
        let KpiTempVal = kpiVal + "\n" + kpiValue
        //Add Fix it List
        let fixItTempVal = fixItVal + "\n\n" + fixItValue
        setFixItVal(fixItTempVal)

        // Delete Good
        let Edited = KpiTempVal.replace(`\n${questionObject[0].yesValue}`, "");
        setKpiVal(Edited)
    }


    const [storeDMVal, setDMVal] = useState("")
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
    var safety = safetyVal
    var lp = lossPreventionVal
    var kpi = kpiVal

    const current = new Date()
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    let toEmail = `s${storeIdVal}@stores.autozone.com`
    let emailcc = `${storeDMVal}`
    let bodystring = `Visit Recap Report for store: ${storeIdVal} \nVisit Date: ${date} \n\nSTORE STANDARDS:\n${Standards} \n\nSAFTEY:\n${safety} \n \nLOSS PERVENTION:\n${lp} \n \nKPI PERFORMANCE:\n${kpi} \n \n \n \nFIX IT LIST:${FixItList} \n__________ \n \n`



    function generateEmailHandleClick(){
        if(storeIdVal===undefined) return alert("You cannot leave the store number box blank!")
        if(isNaN(+storeIdVal)) return alert("The store number can only contain numbers!")
        MailTo()
    }

    function MailTo(){
        //Copy Function (Over 1600 Chars)
        let editedmailtostring = `mailto:${toEmail} ?cc=${emailcc} &subject=Vist Recap - ${storeIdVal} - ${date} &body= `
        copyTextToClipboard(bodystring)
        window.location.href = `${editedmailtostring}`;
    }

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
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
                        <input type="text" id="storeNumber" name="storeNumber" placeholder="*Store Number" value={storeIdVal} onChange={idChange}/>
                    </div>
                    <br />
                    <div className="requiredText">* Is a required field</div>
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
                    <div className="SectionTitle">Office Area</div>
                    <div className="officeQuestions"><QuestionGen question={officeQuestions} ClickHandlerYes={officeClickHandlerYes} ClickHandlerNo={officeClickHandlerNo}/></div>
                    <div className="SectionTitle">Hard Parts Area</div>
                    <div className="hardPartsQuestions"><QuestionGen question={hardPartsQuestions} ClickHandlerYes={hardPartsClickHandlerYes} ClickHandlerNo={hardPartsClickHandlerNo}/></div>
                    <div className="SectionTitle">Safety</div>
                    <div className="safetyQuestions"><QuestionGen question={safetyQuestions} ClickHandlerYes={safetyClickHandlerYes} ClickHandlerNo={safetyClickHandlerNo}/></div>
                    <div className="SectionTitle">Loss Prevention</div>
                    <div className="lossPreventionQuestions"><QuestionGen question={lossPreventionQuestions} ClickHandlerYes={lossPreventionClickHandlerYes} ClickHandlerNo={lossPreventionClickHandlerNo}/></div>
                    <div className="SectionTitle">KPI Preformance</div>
                    <div className="kpiQuestions"><QuestionGen question={kpiQuestions} ClickHandlerYes={kpiClickHandlerYes} ClickHandlerNo={kpiClickHandlerNo}/></div>
                </div>
                <br />
                {/* Email Gen */}
                <div className="EmailGenTitle">Email Generation</div>
                <div className="smallhr"><hr /></div>
                <div className="EmailGenNotice">
                    <div className="EmailGenNoticeText">
                        *Please Note that when you click the button below, DM-Helper will attempt to generate the email by copying the body of the email into your clipboard, please allow this permission. It will then open your default email app with everything except the body automatically filled in. Then paste in the body in the body of the email.
                    </div>
                </div>
                <button onClick={generateEmailHandleClick}> Generate Email </button>
            </div>
        </div>
     );
}
 
export default MainComponet;