import { FC } from 'react'
import {
  DndContext,
  useSensors,
  useSensor,
  closestCenter,
  MouseSensor,
  DragEndEvent
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

type PropsType = {
  children: JSX.Element | JSX.Element[]
  items: Array<{ id: string, [key: string]: any }>
  onDragEnd: (startIndex: number, endindex: number) => void
}

const SortableContainer: FC<PropsType> = (props) => {

  const { children, items, onDragEnd } = props

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8, // 8px
      },
    })
  )

  function handleDragEnd(e: DragEndEvent) {
    const { active, over } = e
    if (over == null) return

    if (active.id !== over.id) {
      let startIndex = items.findIndex(c => c.fe_id === active.id)
      let endIndex = items.findIndex(c => c.fe_id === over.id)

      onDragEnd(startIndex, endIndex)
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  )
}

export default SortableContainer
