import React, { memo } from 'react'
import { BottomWrapper } from './styled'

const ProblemsBottom = memo(({ pid, fetchRandomProblem }) => {

    return (
        <BottomWrapper>
            <div className="question-fast-picker-wrapper">
                <div className="question-fast-picker">
                    <div className="picker-handlers">
                        <button className='problem-random' onClick={fetchRandomProblem}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" d="M18.48 17.5h-2.204a5 5 0 01-4.31-2.466l-.625-1.061-.624 1.061a5 5 0 01-4.31 2.466H2.661a1 1 0 110-2h3.746a3 3 0 002.586-1.48L10.181 12 8.993 9.98A3 3 0 006.407 8.5H2.661a1 1 0 110-2h3.746a5 5 0 014.31 2.466l.624 1.061.624-1.061a5 5 0 014.31-2.466h2.205V4.315a.5.5 0 01.874-.332l2.536 2.853a1 1 0 010 1.328l-2.536 2.853a.5.5 0 01-.874-.332V8.5h-2.204a3 3 0 00-2.587 1.48L12.501 12l1.188 2.02a3 3 0 002.587 1.48h2.204v-2.185a.5.5 0 01.874-.332l2.83 3.185a.5.5 0 010 .664l-2.83 3.185a.5.5 0 01-.874-.332V17.5z" clipRule="evenodd">
                                </path>
                            </svg>
                            <span>随机一题</span>
                        </button>
                        <div className="space-filler"></div>
                        <div className="picker-pagination-handlers">
                            <a href={`/problems/${pid > 1 ? pid - 1 : pid}`}>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.091 4.929l-7.057 7.078 7.057 7.064a1 1 0 01-1.414 1.414l-7.764-7.77a1 1 0 010-1.415l7.764-7.785a1 1 0 111.415 1.414z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span>上一题</span>
                                </button>
                            </a>
                            <div className="pagination-screen">{pid}/3130</div>
                            <a href={`/problems/${parseInt(pid) + 1}`}>
                                <button>
                                    <span>下一题</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.913 19.071l7.057-7.078-7.057-7.064a1 1 0 011.414-1.414l7.764 7.77a1 1 0 010 1.415l-7.764 7.785a1 1 0 01-1.414-1.414z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </BottomWrapper>
    )
})

export default ProblemsBottom