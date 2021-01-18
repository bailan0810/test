import React, { useState } from "react";
import Debounce from "./debounce";
import PictureSelect from "./pictureSelect";
export default () => {
  const [value, setValue] = React.useState([]);
  const pictures = [
    {
      id: '1',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/7/9/3/29984_2_tru01050_15.jpg'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/2/8/3/29984_1_tru01050_12.jpg'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/3/8/3/29984_1_tru01050_2.jpg'
    },
  ];
  console.log(value); // 输出用户选择图片 id。
  return (
    <>
      <Debounce />
      {pictures.map(item=>(
              <PictureSelect
        value={item.id}
        src={item.url}
        onChange={(e) => {
          if(value.includes(e.target.value)){
            setValue([...value].filter(v=>!(v===e.target.value)))
          } else {
            setValue([...value,e.target.value])
          }
        }}
      />      
                    ))}
      
    </>
  );
};
