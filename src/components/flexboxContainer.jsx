import React from "react";
import ButtonItems from "./buttonItems";

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

  return (
    <div>
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
