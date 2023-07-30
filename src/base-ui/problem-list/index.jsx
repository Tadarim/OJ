import React, { memo } from 'react'
import { ProblemListWrapper } from './styled'
import Problem from './c-cpns/problem'

const ProblemList = memo((props) => {

    const {list } = props

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
                    list?.map((item, index) =>
                        <Problem key={index} problem={item} />
                    )
                    }
                </div>
            </div>
        </ProblemListWrapper>
    )
})

export default ProblemList