import { FieldNT, Fields } from '../../blogic/misc';
import FieldTypeUI from '../../components/FieldTypeUI';
import SmGapH from '../../components/simple/SmGapH';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './styles.scss'
import { useState } from 'react';
import { stdArrElemsSwap } from '../../components/simple/utils';

enum EnDropppableId {
  D1 = 'd1',
  D2 = 'd2'
}

const colorOver = 'rgba(226,164,239,0.49)';
const colorMain = 'yellow';

interface Props {

}

export default function OnePage(props: Props) {
  const [selFields, selFieldsSet] = useState([{nameTech: 'test1', nameVisual: 'test1'}] as FieldNT[]);

  const onDragEndHandler = (result: any) => {
    console.log(`!!-!!-!! -> :::::::::::::: onDragEnd() {210423113201}:${Date.now()}`); // del+
    const {destination, source, draggableId} = result;
    console.log('!!-!!-!! 1212-10 destination {210423121200}\n', destination); // del+
    console.log('!!-!!-!! 1212-20 source {210423121214}\n', source); // del+
    console.log('!!-!!-!! 1212-30 draggableId {210423121227}\n', draggableId); // del+

    if (!destination) {
      return
    }

    const sIndex = source.index;
    const dIndex = destination.index;
    const sDid = source.droppableId
    const dDid = destination.droppableId

    const sField = Fields.values()[sIndex]

    if (sDid !== dDid) {
      if (dDid === EnDropppableId.D2) {
        selFields.splice(dIndex, 0, sField)
        selFieldsSet([...selFields])
      }
    } else if (dDid === EnDropppableId.D2) {
      const arr0 = [...selFields]
      stdArrElemsSwap(arr0, sIndex, dIndex)
      selFieldsSet(arr0)
    }

  }

  return <>
    <div>
      <div className={'op_title'}>OnePage</div>
      <SmGapH h={16}/>
      <div className={'op_con1'}>
        <DragDropContext onDragEnd={onDragEndHandler}>
          <Droppable droppableId={EnDropppableId.D1}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{backgroundColor: snapshot.isDraggingOver ? colorOver : colorMain}}
                {...provided.droppableProps}
              >
                {provided.placeholder}
                {
                  Fields.values().map((field, index) => {
                    return <Draggable key={index} draggableId={`${EnDropppableId.D1}-${index}`} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <FieldTypeUI field={field}/>
                        </div>
                      )}
                    </Draggable>
                  })
                }
              </div>
            )}
          </Droppable>
          <Droppable droppableId={EnDropppableId.D2}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{backgroundColor: snapshot.isDraggingOver ? colorOver : colorMain}}
                {...provided.droppableProps}
              >
                {provided.placeholder}
                {
                  selFields.map((field, index) => {
                    return <Draggable key={index} draggableId={`${EnDropppableId.D2}-${index}`} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <FieldTypeUI field={field}/>
                        </div>
                      )}
                    </Draggable>
                  })
                }
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  </>
}
