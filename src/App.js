import React, {useState} from 'react';
import Calendar from 'react-calendar'
import './Top.css'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

function App() {
  const [ item, setItem ] = useState({20201211:{holiday:true,txt:'aiueo',typeValue:1}});
  const typeValueCategory = ["","OK", "NG", "undecided"] 

  function showParams(e){
    const day = getFormatDate(e)
    setItem({
      ...item,[day]:{
        holiday:true,
      }
    })
    console.log(item)
  }

  function changeTypeValue(e){
    const day = getFormatDate(e)
    let tmpTypeValue

    if(item[getFormatDate(e)]){
    switch(item[getFormatDate(e)].typeValue){
      case 1: {
        tmpTypeValue = 2;
        break
      }
      case 2:{
        tmpTypeValue = 3
        break;
      }
      case 3:{
        tmpTypeValue = 1
        break;
      }
      default: {
        tmpTypeValue = 0
        break;
      }
    }
  }else{
    tmpTypeValue =1;
  }
    
    setItem({
      ...item,[day]:{
        typeValue:tmpTypeValue
      }
    })
    console.log(item)
  }
  function setTxtValue(e){
    const day = getFormatDate(e)
  }

  function showContent(date){
    let returnTemp=""
    if(item[getFormatDate(date)]){
      if(item[getFormatDate(date)].txt){
          returnTemp = returnTemp + item[getFormatDate(date)].txt
      //  return item[getFormatDate(date)].txt
      }else{
      //  return null;
      }
      if(item[getFormatDate(date)].typeValue){
        returnTemp = returnTemp + typeValueCategory[item[getFormatDate(date)].typeValue]
      }
    }

    return returnTemp;
  }

  function showTypeValue(date){
    if(item[getFormatDate(date)]){
      if(item[getFormatDate(date)].typeValue){
        return typeValueCategory[item[getFormatDate(date)].typeValue]
      }
    }else{
      return "OK"
    }
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
      <Container>
      <Calendar 
      //tileClassName={({date}) => item[getFormatDate(date)] === true ? 'holiday' : null}
      //tileContent={({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null}
      tileClassName={({date}) =>item[getFormatDate(date)] && item[getFormatDate(date)].holiday ? 'holiday' : null}
      //tileContent={({date}) =><p>{item[getFormatDate(date)] && item[getFormatDate(date)].txt ? item[getFormatDate(date)].txt : null}</p>}
      tileContent={({date}) =><p><img src={`${process.env.PUBLIC_URL}/` + showTypeValue(date) + `.png`}/>{showContent(date)}</p>}
      onChange={changeTypeValue}
      value={value}/>
      <button onClick={event => (console.log(item['20201211']))}>a</button>
    <Button variant="contained" color="primary">
      Test
    </Button>
    </Container>
    </div>
  );
}

export default App;
