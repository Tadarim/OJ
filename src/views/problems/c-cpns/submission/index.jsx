import React, { memo, useEffect, useState } from 'react'
import { Table } from 'antd'

import { SubmissionsWrapper } from './styled'
import { useLocation, useParams } from 'react-router-dom';
import { getSubmitRecord } from '../../../../services/modules/submit';

const dataSource = [
    {
        key: '1',
        result: '执行出错',
        cost: 'N/A',
        memory: 'N/A',
        language: 'JavaScript',
        time: '2023/07/18 17:06'
    },
    {
        key: '2',
        result: '解答错误',
        cost: 'N/A',
        memory: 'N/A',
        language: 'JavaScript',
        time: '2023/07/18 17:05',
    },
];

const columns = [
    {
        title: '提交结果',
        dataIndex: 'result',
        key: 'result',
    },
    {
        title: '执行用时',
        dataIndex: 'cost',
        key: 'cost',
    },
    {
        title: '内存消耗',
        dataIndex: 'memory',
        key: 'memory',
    },
    {
        title: '语言',
        dataIndex: 'language',
        key: 'language',
    },
    {
        title: '提交时间',
        dataIndex: 'time',
        key: 'time'
    }
];

const Submission = memo((props) => {

    const { showResult } = props
    const [recordList,setRecordList] = useState([])
    const [recordTotal,setRecordTotal] = useState('')

    const location = useLocation()
    console.log(location.state.res)

    const fetchSubmitHandler = async() => {
        const res = await getSubmitRecord()
    }

    useEffect(()=>{
        
    },[])

    return (
        <SubmissionsWrapper>
            <div className="container">
                <div className="submissions">
                    {
                        showResult &&
                        <div className="result-container">
                            <div className="container">
                                <div className="result">
                                    <div className="result-info-wrapper">
                                        <div className="result-info">
                                            <span>执行结果：</span>
                                            <div className="error">执行出错</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="error-container">
                                    <div className="content-wrapper">
                                        <div className="error">
                                            {
                                                `Line 7 in solution.js
re
^
ReferenceError: re is not defined
Line 7: Char 5 in solution.js (removeElement)
Line 20: Char 19 in solution.js (Object.<anonymous>)
Line 16: Char 8 in runner.js (Object.runner)
Line 9: Char 26 in solution.js (Object.<anonymous>)
at Module._compile (node:internal/modules/cjs/loader:1101:14)
at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
at Module.load (node:internal/modules/cjs/loader:981:32)
at Function.Module._load (node:internal/modules/cjs/loader:822:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
at node:internal/main/run_main_module:17:47`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='table-container'>
                        <Table dataSource={dataSource} columns={columns} pagination={{defaultCurrent:1,total:50,position:["bottomCenter"],showSizeChanger:false}} />
                    </div>
                </div>
            </div>
        </SubmissionsWrapper>
    )
})


export default Submission