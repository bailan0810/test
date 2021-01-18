import {Input} from 'antd';
export default  () => {
 
        const debounce = (fn) => {
          //todo
          return setInterval(()=>fn, 2000);
        }
        const search = (value) => {
          console.log(value);
        }
        return <Input onChange={(e) => debounce(search(e.target.value))} />
};