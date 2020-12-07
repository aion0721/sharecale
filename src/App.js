import React, {useState} from 'react';
import Calendar from 'react-calendar'
import './Top.css'

function App() {
  const [ item, setItem ] = useState({20201211:'holiday'});
  function showParams(e){
    const day = getFormatDate(e)
    setItem({
      ...item,[day]:'holiday'
    })
    console.log(item)
  }
   // state の日付と同じ表記に変換
   function getFormatDate(date) {
    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
  }
  function showTile(e){
  }
  const [ value, onChange ] = useState(new Date());
  return (
    <div>
      <Calendar 
      tileClassName={({date}) => item[getFormatDate(date)] === 'holiday' ? 'holiday' : null}
      //tileContent={({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null}
      tileContent={({date}) =><p>{getFormatDate(date)}</p>}
      onChange={showParams}
      value={value}/>
      <button onClick={event => (console.log(item['20201211']))}>a</button>
    </div>
  );
}

export default App;
