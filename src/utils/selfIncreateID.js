let id = 0;
export default function selfIncreateID(tag="tag-"){
  return `${tag}${id++}`
}