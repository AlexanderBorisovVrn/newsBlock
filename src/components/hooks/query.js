import { useSelector } from "react-redux"


export default function useQuery(){
const {query} = useSelector(state=>state)
  return query
}