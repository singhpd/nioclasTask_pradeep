import "./App.css";
import { useEffect, useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
function Questions() {
 
 
  const [apiData, setApiData] = useState();
  const [page, sertPage] = useState(0);

   useEffect(() => {
    const updateNews = async () => {
      const url = `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionId[page]}`;
      const data = await fetch(url);
      const parsedData = await data.json();
      setApiData(parsedData);
    };
    updateNews();
  },[page]);


  const questionId = [ "AreaUnderTheCurve_901","BinomialTheorem_901", "DifferentialCalculus2_901",
];
  const handleIncriment = () => {
    sertPage((pre) => (pre === 2 ? 2 : pre + 1));
  };
  const handleDecrement = () => {
    sertPage((pre) => (pre === 0 ? 0 : pre - 1));
  };

  return (
    <div className="App">
      {apiData?.map((value, index) => {
        return (
            
          <div key={index} >
            <h2>Question {page+1}</h2>
            <div className="container">
            <MathJaxContext className="container">
              <MathJax>{value.Question}</MathJax>

            </MathJaxContext>
            </div>
          </div>
        );
      })}

      <button className="next" onClick={handleDecrement}>Back</button>
      <button className="next" onClick={handleIncriment}> Next</button>
    </div>
  );
}

export default Questions;
