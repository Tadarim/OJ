import React, { memo, useEffect, useState } from 'react'
import { ProblemsWrapper } from './styled'
import { useNavigate, useParams } from 'react-router-dom'
import ProblemContainer from './c-cpns/problem-cotainer'
import CodeArea from './c-cpns/codeArea'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeUseMdAction, fetchProblemAction } from '../../store/modules/problem'
import { codeSubmit } from '../../services/modules/submit'
import MdEditor from '../../components/mdEditor'
import { getRandProblem } from '../../services/modules/problemset'

const Problems = memo(() => {

  const dispatch = useDispatch()
  const { pid } = useParams()
  const navigate = useNavigate()

  const { problemInfo, codeTemplate, codeLang, useMd } = useSelector((state) => (
    {
      problemInfo: state.problem.problemInfo,
      codeTemplate: state.problem.codeTemplate,
      codeLang: state.problem.codeLang,
      useMd: state.problem.useMd
    }
  ), shallowEqual)

  const [showResult, setShowResult] = useState(false)

  const submitHandler = (lang, code) => {
    codeSubmit(pid, lang, code)
    setShowResult(true)
    // setTabSelect(3)
  }

  const fetchRandomProblem = async () => {
    const res = await getRandProblem()
    navigate(`/problems/${res.data?.id}`)
  }

  const modeChangeHandler = () => {
    dispatch(changeUseMdAction(!useMd))
  }
  // useEffect(()=>{
  //   dispatch(fetchProblemAction(pid))
  // },[pid])

  return (
    <ProblemsWrapper>
      <div className="problems">
        <ProblemContainer
          pid={pid}
          fetchRandomProblem={fetchRandomProblem}
          problemInfo={problemInfo}
          codeTemplate={codeTemplate}
          codeLang={codeLang}
          showResult={showResult}
        />
        <div className="middle-area"></div>
        {
          useMd
            ?
            <MdEditor
              mode='solution'
              btnText='发布题解'
              cancelHandler={modeChangeHandler}
            />
            :
            <CodeArea
              submitHandler={submitHandler}
              codeTemplate={codeTemplate}
              codeLang={codeLang}
            />
        }
      </div>
    </ProblemsWrapper>
  )
})

export default Problems