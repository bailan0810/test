import {Checkbox} from 'antd';

export default ({value= '', onChange = ()=>{}, src=''}) => {
    return (
        <div>
            <Checkbox.Group>
            <div >
                    <Checkbox value={value} onChange={onChange} checked={true}/>
                    <img src={src} style={{display: 'block', width: '200px'}}/>
                    </div> 
            </Checkbox.Group>
        </div>
    )
};