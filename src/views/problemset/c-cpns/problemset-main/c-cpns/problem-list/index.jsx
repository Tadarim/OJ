import React, { memo } from 'react'
import { ProblemListWrapper } from './styled'
import Problem from './c-cpns/problem'

const ProblemList = memo((props) => {

    const problemList = [
        {
            id:1,
            link:'/problems/minimum-cuts-to-divide-a-circle/',
            title:'2481. 分割圆的最少切割次数',
            difficulty:'困难',
            accessPercent:'52.9%'
        },
        {
            id:2,
            link:'/problems/minimum-cuts-to-divide-a-circle/',
            title:'1. 两数之和',
            difficulty:'简单',
            accessPercent:'52.9%'
        },
        {
            id:3,
            link:'/problems/minimum-cuts-to-divide-a-circle/',
            title:'2. 两数相加',
            difficulty:'中等',
            accessPercent:'52.9%'
        },
    ]

    return (
        <ProblemListWrapper>
            <div className="problemset-list">
                <div className="list-header-container">
                    <div className="list-header">
                        <div className="header-item-container margin">
                            <div className="header-item">
                                <div className="header-desc">
                                    题目
                                </div>
                            </div>

                        </div>
                        <div className="header-item-container margin">
                            <div className="header-item">
                                <div className="header-desc">
                                    通过率
                                </div>
                            </div>

                        </div>
                        <div className="header-item-container margin">
                            <div className="header-item">
                                <div className="header-desc">
                                    难度
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-main">

                        {
                            problemList.map((item,index) => 
                                <Problem key={index} problem={item}/>
                            )
                        }
                    </div>
                </div>
        </ProblemListWrapper>
    )
})

export default ProblemList