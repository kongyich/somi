import { useSelector } from "react-redux"
import { StateType } from "../store" 
import { ComponentsStateType } from "../store/features/componentSlice"

export default function useGetComponentInfo() {
  const components = useSelector<StateType>(state => state.component) as ComponentsStateType

  const { componentList = [], selectedId, copiedComponent } = components
  const selectedComponent = componentList.find(c => c.fe_id === selectedId)

  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent,
  }
}
