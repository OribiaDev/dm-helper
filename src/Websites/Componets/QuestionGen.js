const QuestionGen = ({question, ClickHandlerYes, ClickHandlerNo}) => {

    return ( 
        <div className="outsideQuestions">
            {question.map((question) => (
                <div key={question.id}>
                    <form>
                        <div className="questionTitle">{question.name}</div>
                        <div className="FormQuestions">
                            {/* Yes */}
                            <label className="checkbox-inline">
                                <input type="radio" name={question.name} value={question.yesValue} onChange={e=>ClickHandlerYes(question.id)}/>   
                            </label>
                            {/* No */}
                            <label className="checkbox-inline">
                                <input type="radio" name={question.name} value={question.noValue} onChange={e=>ClickHandlerNo(question.id)}/>
                            </label>
                        </div>
                    </form> 
                </div>
            ))}
        </div>
     );
}
 
export default QuestionGen;

// setState(e.target.value)