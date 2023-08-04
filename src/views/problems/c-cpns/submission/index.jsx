import React, { memo, useEffect, useState } from 'react'
import { Table } from 'antd'

import { SubmissionsWrapper } from './styled'
import { useLocation, useParams } from 'react-router-dom';
import { getSubmitRecord } from '../../../../services/modules/submit';
import Paginations from '../../../../base-ui/pagination';
import { getDate } from '../../../../utils/getDate';

const listHandler = (list) => {
    const newList = []
    for (let item of list) {
        if (!item.is_accepted) {
            if (!item.compline_success) {
                item.result = '编译出错'
            } else {
                item.result = '解答错误'
            }
        } else {
            item.result = '解答成功'
        }
        item.key = item.id
        item.created_at = getDate(item.created_at)
        newList.push(item)
    }
    return newList
}

const dataSource = [
    {
        key: '1',
        result: '执行出错',
        cost: 'N/A',
        language: 'JavaScript',
        time: '2023/07/18 17:06'
    },
    {
        key: '2',
        result: '解答错误',
        cost: 'N/A',
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
        dataIndex: 'cost_time',
        key: 'cost_time',
    },
    {
        title: '语言',
        dataIndex: 'language',
        key: 'language',
    },
    {
        title: '提交时间',
        dataIndex: 'created_at',
        key: 'created_at'
    }
];

const Submission = memo((props) => {

    const { pid } = useParams()
    // const { showResult } = props
    const [recordList, setRecordList] = useState([])
    const [recordTotal, setRecordTotal] = useState('')

    const [page, setPage] = useState(1);
    const pageChangeHandler = (page) => {
        setPage(page)
    }

    const location = useLocation()

    const fetchSubmitHandler = async (page, pid) => {
        const res = await getSubmitRecord(page, pid)
        setRecordList(listHandler(res.data?.list))
        setRecordTotal(res.data?.total)
    }

    useEffect(() => {
        fetchSubmitHandler(page, pid)
    }, [page,pid])

    return (
        <SubmissionsWrapper>
            <div className="container">
                <div className="submissions">
                    {
                        location.state?.res &&
                        <div className="result-container">
                            <div className="container">
                                <div className="result">
                                    <div className="result-info-wrapper">
                                        <div className="result-info">
                                            <span>执行结果：</span>
                                            
                                            {location.state?.res.hasOwnProperty("compline_error") && 
                                            <div className="error">
                                                编译错误
                                            </div>
                                            }
                                            {location.state?.res.hasOwnProperty("testCase") && 
                                            <div className="error">
                                                解答错误
                                            </div>
                                            }
                                            {location.state?.res.hasOwnProperty("success") && 
                                            <div className="right">
                                                解答正确
                                            </div>
                                            }

                                        </div>
                                    </div>
                                </div>

                                {
                                    location.state?.res.hasOwnProperty("compline_error") &&
                                    <div className="error-container">
                                        <div className="content-wrapper">
                                            <div className="error">
                                                {location.state?.res.compline_error}
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    location.state?.res.hasOwnProperty("testCase") &&
                                <div className="testCase-wrapper">
                                    <div className="row-container e1sc596w0">
                                        <div width="90" className="field e1sc596w1">输入：</div>
                                        <div className="value-container e1sc596w3">
                                            <div className="value e1sc596w2">{location.state?.res.testCase.Input}</div>
                                        </div>
                                    </div>
                                    <div className="row-container e1sc596w0">
                                        <div width="90" className="field e1sc596w1">输出：</div>
                                        <div className="value-container e1sc596w3">
                                            <div className="value e1sc596w2">{location.state?.res.testCase.OutputSuccess}</div>
                                        </div>
                                    </div>
                                    <div className="row-container e1sc596w0">
                                        <div width="90" className="field e1sc596w1">预期结果：</div>
                                        <div className="value-container e1sc596w3">
                                            <div className="value e1sc596w2">{location.state?.res.testCase.OutputResult}</div>
                                        </div>
                                    </div>
                                </div>}

                            </div>
                        </div>
                    }
                    <div className='table-container'>
                        <Table
                            dataSource={recordList}
                            columns={columns}
                            pagination={false}
                        />
                        <Paginations
                            total={recordTotal}
                            pageChangeHandler={pageChangeHandler}
                        />
                    </div>
                </div>
            </div>
        </SubmissionsWrapper>
    )
})


export default Submission