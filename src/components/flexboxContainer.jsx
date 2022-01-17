import React from "react";
import ButtonItems from "./buttonItems";
import clx from 'classnames'
import styles from './flexboxContainer.module.css'

function FlexboxContainer(props) {
  const { buttonList, listType } = props;
    
    let renderList;
    switch (listType) {
        case 'two':
            renderList= buttonList.buttonsListTwo;
            break;
        case 'three':
            renderList= buttonList.buttonsListThree;
            break;
        case 'four':
            renderList= buttonList.buttonsListFour;
            break;
        case 'five':
            renderList= buttonList.buttonsListFive;
            break;
        default:
            renderList= buttonList.buttonsListFull;
            break;
    }

    const styleCheck =(langLength)=>{
        if(langLength===5)
            return styles.five;
        if(langLength===4)
            return styles.four;
        if(langLength>5)
            return styles.def;
    }

  return (
    <div  className={clx(
        styles.languageList, styleCheck(renderList.items.length)
        )}>
      {renderList.items?.map((item,index) => {
        return (
          <div key={index}>
            <ButtonItems buttonName={item.buttonName} />
          </div>
        );
      })}
    </div>
  );
}

export default FlexboxContainer;
