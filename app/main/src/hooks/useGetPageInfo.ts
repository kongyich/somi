import { useSelector } from "react-redux";
import type { StateType } from '../store'
import type { PageInfoType } from '../store/features/pageInfoSlice'

export default function useGetPageInfo() {
  const pageinfo = useSelector<StateType>(state => state.pageInfo) as PageInfoType

  return pageinfo
}
