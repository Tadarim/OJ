import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: {
      container: [
        [{ 'size': ['small', false, 'large', 'huge'] }], //字体设置
        // [{ 'header': [1, 2, 3, 4, 5, 6, false] }], //标题字号，不能设置单个字大小
        ['bold', 'italic', 'underline', 'strike'],  
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'], // a链接和图片的显示
        [{ 'align': [] }],
        [{
          'background': ['rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
            'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
            'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
            'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
            'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
            'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
            'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
            'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
            'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
            'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
            'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
            'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)']
        }],
        [{
          'color': ['rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
            'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
            'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
            'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
            'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
            'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
            'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
            'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
            'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
            'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
            'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
            'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)']
        }],
        ['clean'], //清空
        // ['emoji'], //emoji表情，设置了才能显示
        // ['video2'], //我自定义的视频图标，和插件提供的不一样，所以设置为video2
      ],
      handlers: {
        // 'image': this.imageHandler.bind(this), //点击图片标志会调用的方法
        // 'video2': this.showVideoModal.bind(this),
      },
    },
    // ImageExtend: {
    //   loading: true,
    //   name: 'img',
    //   action: RES_URL + "connector?isRelativePath=true",
    //   response: res => FILE_URL + res.info.url
    // },
    // ImageDrop: true,
    // 'emoji-toolbar': true,  //是否展示出来
    // "emoji-textarea": false, //我不需要emoji展示在文本框所以设置为false
    // "emoji-shortname": true, 
}

//这是点击图片图标触发的事件
// function imageHandler() {
//     const input = document.createElement('input')
//     input.setAttribute('type', 'file')
//     input.setAttribute('accept', 'image/*')
//     input.setAttribute('multiple', 'multiple')
//     input.click()
//     const that = this;
//     input.onchange = async () => {
//       Array.from(input.files).forEach(item => {
//       //业务需求安装了压缩图片的插件，可忽略
//         new Compressor(item, {
//           quality: 0.8,
//           convertSize: 1024 * 1024 * 8,
//           success(result) {
//           //很很很很重要的一步
//             const formData = new FormData();
//             formData.append('file', result, result.name);
//             Axios({
//               method: 'post',
//               data: formData,
//               url: config.RES_URL + 'connector?isRelativePath=true'，//图片上传的接口
//             }).then(res => {
//               if (res.data.success) {
//                 let quill = that.reactQuillRef.getEditor();//获取到编辑器本身
//                 const cursorPosition = quill.getSelection().index;//获取当前光标位置
//                 const link = config.RES_URL + res.data.info.url;
//                 quill.insertEmbed(cursorPosition, "image", link);//插入图片
//                 quill.setSelection(cursorPosition + 1);//光标位置加1
//               }
//             })
//           },
//         });
//       })
//     }
// }

const Test = () => {

    const [value,setValue] = useState('')

    const changeHandler = (value) => {
        console.log(value)
        setValue(value)
    }

    return <ReactQuill
    value={value}
    theme="snow" 
    onChange={changeHandler}
    modules={modules}  
    className=" ql-editor"
    />
}

export default Test